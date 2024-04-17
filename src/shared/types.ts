export enum SelectedPage {
    Home = "home",
    About = "about",
    FearOfFailure = "fearoffailure",
    GrowthAndFixed = "growthandfixed",
    Resilience = "resilience",
    FailForwardWeek = "failforwardweek",
    Contact = "contact",
  
  }

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description:string;
}
  
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}