export enum SelectedPage {
    Home = "home",
    About = "about",
    FearOfFailure = "fearoffailure",
    GrowthAndFixed = "growthandfixed",
    Resilience = "resilience",
    FailForwardWeek = "failforwardweek",
    MessageUs = "messageus",
    Footer = "footer",
    NewPage = "newpage",
    Continue = "continue"
  
  }

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description:string;
  writing?:string;
}
  
export interface ClassType {
  name: string;
  description?: string;
  image: string;
  link: string;
}
