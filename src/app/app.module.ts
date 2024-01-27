import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './pages/blog/blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LocalhostComponent } from './pages/blogs/localhost/localhost.component';
import { JavascriptComponent } from './pages/blogs/javascript/javascript.component';
import { JcookieComponent } from './pages/blogs/jcookie/jcookie.component';
import { ShadowsofAIComponent } from './pages/blogs/shadowsof-ai/shadowsof-ai.component';
import { ProgrammingLanguageComponent } from './pages/blogs/programming-language/programming-language.component';
import { OperatingSystemComponent } from './pages/blogs/operating-system/operating-system.component';
import { PythonAiMlComponent } from './pages/blogs/python-ai-ml/python-ai-ml.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    BlogComponent,
    PrivacyPolicyComponent,
    LocalhostComponent,
    JavascriptComponent,
    JcookieComponent,
    ShadowsofAIComponent,
    ProgrammingLanguageComponent,
    OperatingSystemComponent,
    PythonAiMlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
