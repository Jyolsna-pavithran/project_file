import BlogsCard from "../components/blogsCard/blogsCard";
import style from './blogs.module.scss'

function Blogs() {
    return (

        <div className={style.mainBlog}>
             <div style={{marginLeft:"30px"}}>
                <div className={style.heading}>Testimonials</div>  
                <h2><b> Our customer reviews</b></h2>
            </div>

        <div className={style.offersWrapper}>
            <BlogsCard
                imageSrc="/blog-1.svg" 
                heading="A Food Lover’s Guide to Culinary Hotspots"
                subHeading="June 28, 2018" 
                content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem." 
            />

<BlogsCard
                imageSrc="/blog-2.svg" 
                heading="A Food Lover’s Guide to Culinary Hotspots"
                subHeading="June 28, 2018" 
                content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem." 
            />

<BlogsCard
                imageSrc="/blog-3.svg" 
                heading="A Food Lover’s Guide to Culinary Hotspots"
                subHeading="June 28, 2018" 
                content="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem." 
            />
    
          
        </div>
        </div>

    );
}

export default Blogs;
