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

export interface PopularSearchQueriesResult {
  highlights: any[];
  highlight: Highlight;
  document: PopularSearchQueriesDocument;
  text_match: number;
  geo_distance_meters: null;
  vector_distance: null;
}

export interface PopularSearchQueriesDocument {
  count: number;
  id: string;
  q: string;
}

export interface SearchResult {
  highlights: HighlightElement[];
  highlight: PurpleHighlight;
  document: Document;
  text_match: number;
  geo_distance_meters: null;
  vector_distance: null;
}

export interface Document {
  category: string;
  create_date: number;
  id: string;
  is_embed: boolean;
  is_enabled: boolean;
  poster: string;
  tags: string[];
  title: string;
  trend_score: number;
  uid: string;
  video_url: string;
  views: number;
}

export interface PurpleHighlight {
  tags?: Title[];
  title?: Title;
}

export interface Title {
  matched_tokens: MatchedTokenEnum[];
  snippet: string;
}

export enum MatchedTokenEnum {
  Ass = "ass",
  MatchedTokenAss = "Ass",
}

export interface HighlightElement {
  field: Field;
  snippet: null | string;
  snippets: string[] | null;
  value: null;
  values: null;
  indices: number[] | null;
  matched_tokens: Array<MatchedTokenEnum[] | MatchedTokenEnum>;
}

export enum Field {
  Tags = "tags",
  Title = "title",
}
