"use client";

export interface History {
  company_id: string;
  user_id: string;
  project_name: string;
  project_detail: string;
  start_date: Date;
  completed_date: Date;
  project_price: BigInteger;
  project_status: ProjectStatus;
}

export enum ProjectStatus {
  Pending = "pending",
  Rejected = "rejected",
  Accepted = "accepted",
  Progress = "progress",
  Cancelled = "cancelled",
  Finished = "finished",
}
