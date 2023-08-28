export interface childrentype {
  children: React.ReactNode;
  showmadal?: boolean;
  handleCancel?: any;
}

export interface bootomtype {
  id: number;
  name: string;
}

export interface IFormInput {
  name: string;
  email: string;
  password: string | number;
}
