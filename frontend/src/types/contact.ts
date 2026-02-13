export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  propertySize?: string;
  serviceType?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
