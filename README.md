<p align="center">
<img src="https://user-images.githubusercontent.com/70070951/195313293-ed597f4f-a617-44d8-8023-75118b55daad.jpg" width="400" height="200">
</p>
<p align="center">
📔<a href="https://github.com/Faris-abukhader/we-work/blob/main/README_ar.md"> بالعربي </a>📔 
 </p>
<p align="center">
 backend-end part <a href="https://github.com/Faris-abukhader/we-work-backend">from here</>
</p>


## 🚩 Table of Contents

- [Introduction](#--introduction)
- [Model and diagram](#--model-and-diagram)
- [Installation](#--installation)
- [Development setup](#--development-setup)
- [Project structure](#--project-structure)
- [Features](#--features)
- [Packages](#-packages)
- [License](#-license)




## <img src="https://cdn-icons-png.flaticon.com/512/1436/1436664.png" width="25" height="25" style="padding-right:15px">  Introduction 

<p>
WeWork is an open source freelancing platform , where is consist of two parts , first part is Backend  and the other part is Frontend which you are reading now . In this part we gonna design different pages like landing page , job list , job details and more .
<br/>
 </br>
As we create authentication system at Backend , here in Frontend we also going to implement authentication to protect some routes and provide authorization for users .
<br/>
 </br>
In this project three different accounts going to use it , first visitor , second employer and lastly freelancer . Visitor has limited route can visit which only public routes , where employer and freelancer there share some routes + there own protected routes . 
</br>
</br>
First scenario for freelancer to get employed
Employers can publish there own jobs , then freelancer can provides there proposals , employers can accept or decline the proposals , once proposal is accepted one recruiting request gonna be send to freelancer , if both side accept the request the job goona be closed ; also the employer can send request to specific freelancer direclty without waiting for proposal.
</br>
</br>
Second senario for freelancer to get employed
Employers after they publish there jobs they can send hiring request to specifc freelancer , if the freelancer is accept that request , them freelancer can submit the product , and lastly the employer can rate freelancer work.
</br>

</p>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Model and diagram

<div style="padding:0px 200px 0px 200px">
<img src='https://user-images.githubusercontent.com/70070951/208335857-f170b261-1f5e-4e5c-9db9-3054b2244eca.png'/>
<img src='https://user-images.githubusercontent.com/70070951/208335844-e7ca7329-b82a-4ee2-a191-57d49b2e242a.png'/>
</div>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Installation 


### 🔘 Cloning repository
1. On GitHub.com, navigate to the main page of the repository.
2. Above the list of files, click  Code.
3. Copy the URL for the repository.
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
```
git clone github.com/Faris-abukhader/we-work
```
Press Enter to create your local clone
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `we-work`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/814/814848.png" width="25" height="25" style="padding-right:15px">  Development setup

To set up this project you need to download NodeJs in your machine or if you have it make sure you have the latest version of it.

### 🔘 Checking up Node version
```
node -v
```

### 🔘 Downloading Node

> for Windows  


Download the windows installer from [NodeJs offical website](https://nodejs.org/en/download/) make sure you have download the latest version of NodeJs.
<br/>


> for Mac
- You can download NodeJs using brew CLI
```
brew install node
```
- You can download NodeJs mac version through [the offical website](https://nodejs.org/en/download/)
<br/>
<hr/>


### 🔘 Downloading the packages

Go to project direct where  <package.json> is exist and type in terminal :
```
npm install 
```

To run the project just type down in terminal :
```
npm run dev
```

<br/>
<hr/>


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Project structure  

```
📦we-work
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜AccountTypeCard.js
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂allWorks
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜allWorks.js
 ┃ ┃ ┣ 📂employerHiringRequest
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜employerHiringRequest.js
 ┃ ┃ ┣ 📂freelancerHiringRequest
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜freelancerHiringRequest.js
 ┃ ┃ ┣ 📂freelancerProducts
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜freelancerProducts.js
 ┃ ┃ ┣ 📂freelancerProposals
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜freelancerProposals.js
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜profile.js
 ┃ ┃ ┣ 📜SubNav.js
 ┃ ┃ ┗ 📜WelcomingBanner.js
 ┃ ┣ 📂general
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜general.js
 ┃ ┣ 📂jobDetails
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜jobDetails.js
 ┃ ┣ 📂jobList
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜jobList.js
 ┃ ┣ 📂landingPage
 ┃ ┃ ┃ ┣ 📜...
 ┃ ┃ ┃ ┣ 📜landingPage.js
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┃ ┣ 📜FooterSection.js
 ┃ ┃ ┃ ┣ 📜Navbar.js
 ┃ ┃ ┃ ┣ 📜NewsLetter.js
 ┃ ┃ ┃ ┗ 📜Offcanva.js
 ┃ ┃ ┣ 📜Layout.js
 ┃ ┃ ┗ 📜UserLayout.js
 ┃ ┗ 📂userProfile
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜[...nextauth].js
 ┃ ┃ ┗ 📜hello.js
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜signIn.js
 ┃ ┃ ┗ 📜signUp.js
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂allWorks
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂employer-hired-history
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂freelancer-all-works
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂freelancer-hired-history
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂freelancer-proposals
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂freelancer-profile
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂jobDetails
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂jobList
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂profile
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📜_app.js
 ┃ ┗ 📜index.js
 ┣ 📂public
 ┃ ┣ 📂...
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜certification.js
 ┃ ┃ ┣ 📜education.js
 ┃ ┃ ┣ 📜employmentHistory.js
 ┃ ┃ ┣ 📜hiringRequest.js
 ┃ ┃ ┣ 📜item.js
 ┃ ┃ ┣ 📜job.js
 ┃ ┃ ┣ 📜language.js
 ┃ ┃ ┣ 📜product.js
 ┃ ┃ ┗ 📜proposal.js
 ┃ ┗ 📜store.js
 ┣ 📂styles
 ┃ ┣ 📜Home.module.css
 ┃ ┣ 📜Wave.module.css
 ┃ ┗ 📜globals.css
 ┣ 📂utils
 ┃ ┣ 📜citiesList.js
 ┃ ┣ 📜dashboardPages.js
 ┃ ┣ 📜emailValidation.js
 ┃ ┣ 📜fireNotification.js
 ┃ ┣ 📜footerSections.js
 ┃ ┣ 📜hourPerWeek.js
 ┃ ┣ 📜industries.js
 ┃ ┣ 📜jobCategories.js
 ┃ ┣ 📜jobFinishingTimeOptions.js
 ┃ ┣ 📜languageLevels.js
 ┃ ┣ 📜languagesList.js
 ┃ ┣ 📜popularKey.js
 ┃ ┣ 📜salaryRange.js
 ┃ ┗ 📜utils.js
 ┣ 📜.DS_Store
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┗ 📜tailwind.config.js
 ```


## <img src="https://cdn-icons-png.flaticon.com/512/535/535471.png" width="25" height="25" style="padding-right:15px">  Features  

- Authentications , authorizations are all implemented with differents layers.
- Full state management implementation using redux toolkit.
- Implementing google map for employer company location.
- 24 reusable componenets , check components -> general folder  
- Whole project pages is full responsive.
- Two Custom layout 



## 📦 Packages


| Name | Description |
| --- | --- |
| [`@lottiefiles/react-lottie-player`](https://github.com/LottieFiles/lottie-react) | This is a React component for the Lottie Web Player |
| [`@reduxjs/toolkit`](https://www.npmjs.com/package/@reduxjs/toolkit) | Simple. Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more |
| [`next-redux-wrapper`](https://www.npmjs.com/package/next-redux-wrapper) | A HOC that brings Next.js and Redux together |
| [`animate.css`](https://www.npmjs.com/package/animate.css) | Animate.css is a library of ready-to-use, cross-browser animations |
| [`sweetalert2`](https://www.npmjs.com/package/sweetalert2) | A beautiful, responsive, customizable, accessible for JavaScript's popup boxes. |
| [`next-auth`](https://github.com/nextauthjs/next-auth) | is a complete open source authentication solution for Next.js applications. |
| [`react-rating`](https://www.npmjs.com/package/react-rating) | react rating component.  |
| [`google-map-react`](https://www.npmjs.com/package/google-map-react) | is a component written over a small set of the Google Maps API |
| [`tailwindcss`](https://www.npmjs.com/package/tailwindcss) | A utility-first CSS framework for rapidly building custom user interfaces. |


## 📜 License

This software is licensed under the [MIT](https://github.com/Faris-abukhader/we-work/blob/main/license) © [FaRiS](https://github.com/Faris-abukhader).
