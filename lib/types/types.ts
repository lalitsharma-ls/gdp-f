export interface Video {
  id: string;
  uid: string;
  title: string;
  videoUrl: string;
  isEmbed: boolean;
  isEnabled: boolean;
  poster: string;
  createDate: Date;
  updateDate: Date;
  views: number;
  fetchDetails: FetchDetails;
  tags: Tag[];
  category: string;
  metaDetails: MetaDetails;
  videoReports: VideoReports | null;
}

export interface FetchDetails {
  id: number;
  siteName: SiteName;
  fetchDate: Date;
  fetchUrl: string;
}

export enum SiteName {
  IndianporngirlNet = "indianporngirl.net",
}

export interface MetaDetails {
  id: number;
  keywords: string;
  description: string;
  title: string;
  ogTitle: string;
  ogDescription: string;
}

export enum Tag {
  Bhabhi = "bhabhi",
  IndianGirl = "indian-girl",
  IndianPorn = "indian-porn",
  PremiumVideos = "premium-videos",
  SexVideo = "sex-video",
}

export interface VideoReports {
  id: number;
  videoId: null;
  reportId: null;
  reportDate: Date;
  reportDescription: ReportDescription;
}

export enum ReportDescription {
  Broken = "broken",
  Other = "other",
  Spam = "spam",
  Violence = "violence",
}

export interface Tags {
  id: string;
  name: string;
  image: null;
  description: null;
  createAt: Date;
  updatedAt: Date;
  isEnabled: boolean;
}