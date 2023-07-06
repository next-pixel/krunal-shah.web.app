import UnstyledLink from '@/components/atoms/UnstyledLink'
import BlogList from '@/components/organism/BlogList'
import HeroWithPhoto from '@/components/template/HeroWithPhoto'
import Layout from '@/components/template/Layout'
import UnderlineLink from '@/components/mollecules/UnderlineLink'
import { getBlog, ownerName } from '@/helpers'
import { twclsx } from '@/libs/twclsx'

import { ArrowSmRightIcon } from '@heroicons/react/outline'
import type { GetStaticProps, NextPage } from 'next'
import { Blog } from 'next-starter-blog'

interface HomeProps {
  blogs: Array<Blog>
}

const Home: NextPage<HomeProps> = ({ blogs = [] }) => {
  const meta = {
    title: ownerName,
    template: 'A Personal krunal shah`s Blog | Fullstack Developer',
    description: `I am Krunal Shah or you can say kunal shah, i am writing a blogs, i have Over 8 years of experience in web development such as developing dynamic applications with top technologies. Deep knowledge of .NET Core, Angular CLI, Node Js, React, Asp.NET MVC, Sql Server, Oracle, Azure, HTML5, Javascript and CSS3, etc. and a Microsoft Certified: Azure Developer Associate.`,
    openGraph: {
      type: 'website',
        url: 'https://krunal-shah.web.app/',
        title: ownerName,
        description: `I am Krunal Shah or you can say kunal shah, i am writing a blogs, i have Over 8 years of experience in web development such as developing dynamic applications with top technologies. Deep knowledge of .NET Core, Angular CLI, Node Js, React, Asp.NET MVC, Sql Server, Oracle, Azure, HTML5, Javascript and CSS3, etc. and a Microsoft Certified: Azure Developer Associate.`,
        images: [
          {
            url: 'https://krunal-shah.web.app/static/avatar.jpg',
            width: 298,
            height: 298,
            alt: 'krunal shah Image',
          }
        ]
    },
    additionalMetaTags:[{
      name: 'google-site-verification',
      content: '5e06x4xhLxiUVlXqg2b93KekaEyO1Fyo84aTZcBEwqo'
    },
    {
      name: 'keywords',
      content: 'Krunal shah, kunal shah,Knowledge , developer software,development website,developer`s,full stack software developer,developer blog,development website,full stack,web developer blog,aspnet sql server, dynamic aspnet sql, sql server payment, ecommere dynamic aspnet,software engineer, .NET Core, Angular CLI, Node Js, React, Asp.NET MVC, Sql Server, Oracle, Azure, HTML5, Javascript , CSS3'
    }
  ]
  }

  return (
    <Layout as='main' {...meta}>
      <HeroWithPhoto image='/static/avatar.jpg' imageAlt={ownerName} {...meta}>
 


      </HeroWithPhoto>
     
<h1>Featured Post</h1>
      <BlogList blogs={blogs} title=''>
        <UnstyledLink
          href='/blog'
          className={twclsx(
            'group',
            'items-center space-x-1 font-medium',
            'hover:text-primary-3 dark:hover:text-primary-2'
          )}
        >
          <span>See all post</span>
          <ArrowSmRightIcon
            className={twclsx(
              'inline-flex w-4 h-4 transition-all duration-200',
              '-translate-x-4 group-hover:translate-x-0',
              'opacity-0 group-hover:opacity-100'
            )}
          />
        </UnstyledLink>
      </BlogList>
<br></br>
<section >
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Experience</h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl font-bold">Sr. Software Engineer L2</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://www.clariontech.com/'>Clarion Technologies</UnderlineLink></h6>
                <p>Feb 2022 - present</p>
            </div>
            <div className="flex flex-col col-span-4">
                <ul>
                  <li>Najm Insurance WhatsApp backend API</li>
                  <li>Najm Insurance IVR System API</li>
                  <li>Worked on Saudi Arabia based client with backend projects</li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">Sr. Software Engineer</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://www.promptsoftech.com/'>Prompt Softech</UnderlineLink></h6>
                <p>May 2020 - Feb 2022</p>
            </div>
            <div className="flex flex-col col-span-4">
            <ul>
                  <li>TVS Motors Website & Backend API for Mobile</li>
                  <li>US based POB Company that prove HR related service and we have created Custom client specific product</li>
                  <li>Worked on US based Investment organization and Nop commerce related development</li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">Software Engineer</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://www.varologic.co.in/'>Varologic Technologies</UnderlineLink></h6>
                <p>July 2019 - May 2020</p>
            </div>
            <div className="flex flex-col col-span-4">
            <ul>
                  <li>Victorian Plumbing Uk`s Leading E commerce Website in Asp.Net MVC C# With SQL Server 2016 Database</li>
                  <li>Warehouse management system Windows Based Software for inventory in shop and Reports and API Project for Mobile
application</li>
                  <li>Multiple Payment method`s and refund module, shipping module with third party API integration,  Windows service for Sync
Data between two Database</li>
<li>Worked in Asp.net Core API For IVR Callstream Payment Method</li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">Software Engineer</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://www.tmspl.com/'>TM SYSTEMS</UnderlineLink></h6>
                <p>Nov 2017 - July 2019</p>
            </div>
            <div className="flex flex-col col-span-4">
            <ul>
                  <li>Core Banking Software in Asp.Net C# With Oracle 11g Database</li>
                  <li>Online Banking With security & Rich crystal reports Development</li>
                  <li>Console Application for transaction & Working with Rest api</li>
<li>Mobile application web services and api integration</li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">Project Associate</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://www.inflibnet.ac.in/'>INFLIBNET</UnderlineLink></h6>
                <p>Oct 2015 - Nov 2017</p>
            </div>
            <div className="flex flex-col col-span-4">
            <ul>
                  <li>Developing University Grant Commission UGC Website.</li>
                  <li>Maintaining Existing UGC Website and Database of Website and e-SART.</li>
                  <li>NIRF - National Institutional Ranking Framework</li>

                </ul>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">Jr. Programmer</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://whitepearl.biz/'>White Pearl</UnderlineLink></h6>
                <p>Jun 2014 - Oct 2015</p>
            </div>
            <div className="flex flex-col col-span-4">
            <ul>
                  <li>Booksforyou :Ecommere Dynamic Website, Asp.net C# 4.0, MS Sql Server, Payment Gateway</li>
                  <li>albatra.com : Ecommere Dynamic Website, Asp.net C# 4.0, MS Sql Server, Payment Gateway, Stock maintain from multiple
location throw web services</li>
                  <li>Royalcircuits : Online circuit order system and dynamic website, Asp.net C# 4.0, MS Sql Server, Payment Gateway</li>
                  <li>Growmore Insurance : An Application to maintain insurance data with reminder sms, email with dynamic reports, Dynamic
website</li>
                </ul>
            </div>
        </div>
    </section>
    <hr className="border-gray-400 mx-44" />
   
    <section >
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-11 mb-8 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">M.Sc. Information Technologies</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://www.ganpatuniversity.ac.in/'>Ganpat University</UnderlineLink></h6>
                <p>APR 2012 - Mar 2014</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-11 mb-8 md:mb-0">
                <h5 className="text-xl md:text-2xl  font-bold">B.Sc. Computer Application</h5>
                <h6 className="text-lg font-bold"><UnderlineLink href='https://www.ganpatuniversity.ac.in/'>Ganpat University</UnderlineLink></h6>
                <p>APR 2009 - Mar 2012</p>
            </div>
            
        </div>
    </section>
      <br></br>
      <h3>TECHNICAL SKILLS</h3><br></br>
<ul className='space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400 text-justify'>
	<li>Excellent knowledge of C#, VB and creating dynamic Applications in .Net Core, ASP.Net MVC, .Net Framework 4.5 , web forms, ASP.Net MVC API , ASP.Net Core API</li>
	<li>Excellent knowledge of Structured query language (SQL). Working with SQL Server 2008 to 2016, sql maintenance</li>
	<li>plan, clustered and nonclustered indexes in sql, triggers, cursor, Normalization, sp,Functions, jobs</li>
	<li>Excellent knowledge of Oracle Database 10g and 11g. Oracle Procedure,Functions,trigger,indexes, dump file for backup, normalization</li>
	<li>Excellent knowledge on working with Azure services like App service and VM, Cosmos DB, blob storage, service bus, Azure AD, Azure Functions, Notification hub, etc.</li>
	<li>Knowledge of working with Angular JS and Angular CLI 9.</li>
	<li>Knowledge of creating and integration of Web Api and Web services and integration</li>
	<li>Knowledge of working with ADO.NET , Entity Framework 6.0 , Linq and Dapper ORM</li>
	<li>Knowledge of working with Source controls like Microsoft Visual SourceSafe (VSS), git, SVN, and Microsoft TFS with Branching, Merging, Automating Build, Test, And Deployment For .NET Projects and git repository management</li>
	<li>Knowledge of working with SAP Crystal Reports 14 with sub reports</li>
	<li>Knowledge of Payment Gateway Module Integration (PayPal, CCavenue, authorize .net, stripe, IVR Call Stream, Berkeley payment) and external login like Facebook, Google Plus etc. and other tools for eCommerce</li>
	<li>Knowledge of hosting website in Internet Information Server (IIS) web server, SSL Integration</li>
	<li>Knowledge of Website security integration like blind sql injection, Session Fixation, Unrestricted File Upload(Non Executable)</li>
	<li>Knowledge of working with custom controls and External controls like AJAX Controls, telerik control etc.</li>
	<li>Knowledge of SMS Integration and Bulk Email Send.</li>
	<li>Expert knowledge of HTML (4, 5), CSS (2,3) , bootstrap, material design etc.</li>
	<li>JavaScript, jQuery skills implement jQuery plugins (carousels, sliders, Datatable, JQgrid etc.)</li>
	<li>Strong error handling Skill using External tools NLOG, Rapid7 for Error Log Management and Analyses</li>
	<li>Skills in optimizing websites for mobile display responsive, Export to PDF, URL rewriting</li>
	<li>Knowledge of open source cms like Nopcommerce (.NET), Mr CMS (.NET), wordpress(PHP),joomla(PHP)</li>
	<li>Knowledge of social media marketing, SEO, Google Analytics, Google My Business, Google Map</li>
	<li>Knowledge of Lucene.net integration with faceted search and also basic knowledge of NO SQL (Mongo DB)</li>
	<li>Knowledge of Structured data format like Json and XML</li>
</ul>
<br></br>
<section >
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
       
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            
            <a href="#" title='csharp' className="flex justify-center items-center">
            <i className="devicon-csharp-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='dotnetcore' className="flex justify-center items-center">
            <i className="devicon-dotnetcore-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='dot-net' className="flex justify-center items-center">
            <i className="devicon-dot-net-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='microsoftsqlserver' className="flex justify-center items-center">
            <i className="devicon-microsoftsqlserver-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='visualstudio' className="flex justify-center items-center">
            <i className="devicon-visualstudio-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='vscode' className="flex justify-center items-center">
            <i className="devicon-vscode-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='html5' className="flex justify-center items-center">
            <i className="devicon-html5-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='javascript' className="flex justify-center items-center">
            <i className="devicon-javascript-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='jquery' className="flex justify-center items-center">
            <i className="devicon-jquery-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='css3' className="flex justify-center items-center">
            <i className="devicon-css3-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='bootstrap' className="flex justify-center items-center">
            <i className="devicon-bootstrap-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='angularjs' className="flex justify-center items-center">
            <i className="devicon-angularjs-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='nodejs' className="flex justify-center items-center">
            <i className="devicon-nodejs-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='typescript' className="flex justify-center items-center">
            <i className="devicon-typescript-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='nextjs' className="flex justify-center items-center">
            <i className="devicon-nextjs-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='npm' className="flex justify-center items-center">
            <i className="devicon-npm-original-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='mongodb' className="flex justify-center items-center">
            <i className="devicon-mongodb-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='postgresql' className="flex justify-center items-center">
            <i className="devicon-postgresql-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='sqlite' className="flex justify-center items-center">
            <i className="devicon-sqlite-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='react' className="flex justify-center items-center">
            <i className="devicon-react-original-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='azure' className="flex justify-center items-center">
            <i className="devicon-azure-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='bitbucket' className="flex justify-center items-center">
            <i className="devicon-bitbucket-original-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='confluence' className="flex justify-center items-center">
            <i className="devicon-confluence-original-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='docker' className="flex justify-center items-center">
            <i className="devicon-docker-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='filezilla' className="flex justify-center items-center">
            <i className="devicon-filezilla-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='firebase' className="flex justify-center items-center">
            <i className="devicon-firebase-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='git' className="flex justify-center items-center">
            <i className="devicon-git-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
           
            <a href="#" title='graphql' className="flex justify-center items-center">
            <i className="devicon-graphql-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='jenkins' className="flex justify-center items-center">
            <i className="devicon-jenkins-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='jira' className="flex justify-center items-center">
            <i className="devicon-jira-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='kubernetes' className="flex justify-center items-center">
            <i className="devicon-kubernetes-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='materialui' className="flex justify-center items-center">
            <i className="devicon-materialui-plain colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='mysql' className="flex justify-center items-center">
            <i className="devicon-mysql-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='nuget' className="flex justify-center items-center">
            <i className="devicon-nuget-original-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='oracle' className="flex justify-center items-center">
            <i className="devicon-oracle-original colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>
            <a href="#" title='redis' className="flex justify-center items-center">
            <i className="devicon-redis-plain-wordmark colored text-8xl hover:text-gray-900 dark:hover:text-white"></i>                       
            </a>

           


           
        </div>
    </div>
</section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getBlog()

  return {
    props: {
      blogs: blogs.map((b) => ({ ...b.data, slug: b.slug })).filter((b) => b.featured)
    }
  }
}

export default Home
