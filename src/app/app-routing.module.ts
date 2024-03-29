import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LocalhostComponent } from './pages/blogs/localhost/localhost.component';
import { JavascriptComponent } from './pages/blogs/javascript/javascript.component';
import { JcookieComponent } from './pages/blogs/jcookie/jcookie.component';
import { ShadowsofAIComponent } from './pages/blogs/shadowsof-ai/shadowsof-ai.component';
import { ProgrammingLanguageComponent } from './pages/blogs/programming-language/programming-language.component';
import { OperatingSystemComponent } from './pages/blogs/operating-system/operating-system.component';
import { PythonAiMlComponent } from './pages/blogs/python-ai-ml/python-ai-ml.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'services',component:ServicesComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/localstorage',component:LocalhostComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'blog/javascript',component:JavascriptComponent},
  {path:'blog/jcookie',component:JcookieComponent},
  {path:'blog/shadowsofai',component:ShadowsofAIComponent},
  {path:'blog/programminglanguage',component:ProgrammingLanguageComponent},
  {path:'blog/useofcandc++',component:OperatingSystemComponent},
  {path:'blog/python-ai-ml',component:PythonAiMlComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
