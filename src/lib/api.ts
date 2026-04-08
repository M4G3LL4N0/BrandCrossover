export interface ApiState {
  loading: boolean;
  success: string;
  error: string;
}

export interface ApiResponse {
  error?: string;
  message?: string;
  data?: Record<string, unknown>;
}

export interface WaitlistForm {
  name: string;
  email: string;
  company?: string;
}

export interface IntakeForm {
  full_name: string;
  work_email: string;
  brand_name: string;
  website_url?: string;
  category: string;
  goals: string;
  dream_partners?: string;
}

export const initialState: ApiState = {
  loading: false,
  success: "",
  error: "",
};

export async function handleApiRequest(
  endpoint: string,
  payload: Record<string, unknown>,
  setState: React.Dispatch<React.SetStateAction<ApiState>>
) {
  setState({ loading: true, success: "", error: "" });

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData: ApiResponse = await res.json();
      throw new Error(errorData.error || `Failed to call ${endpoint}`);
    }

    const data: ApiResponse = await res.json();
    
    if (!data?.message) {
      throw new Error("No valid response data received");
    }

    setState({
      loading: false,
      success: data.message,
      error: "",
    });
  } catch (error) {
    setState({
      loading: false,
      success: "",
      error: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}
