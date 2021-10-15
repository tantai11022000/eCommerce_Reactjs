import React from 'react';
import HeaderContent from '../Content/HeaderContent';
import HomeBlogItem from './HomeBlogItem';
function HomeBlog(props) {
    return (
        <section className="blog-area section-gap">
            <div className="container">
                <HeaderContent mainContent="Blog mới đăng" infoContent="Những bài blog về thời trang mới nhất"></HeaderContent>
                <div className="row">
                    <HomeBlogItem img="resources/img/b1.jpg" creater="By Admin"
                        amountComment="2 Comments"
                        title="Ford clever bed stops your sleeping partner hogging the whole"
                        description="Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided lightForth"></HomeBlogItem>
                    <HomeBlogItem img="resources/img/b1.jpg" creater="By Admin"
                        amountComment="2 Comments"
                        title="Ford clever bed stops your sleeping partner hogging the whole"
                        description="Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided lightForth"></HomeBlogItem>
                    <HomeBlogItem img="resources/img/b1.jpg" creater="By Admin"
                        amountComment="2 Comments"
                        title="Ford clever bed stops your sleeping partner hogging the whole"
                        description="Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided lightForth"></HomeBlogItem>
                </div>
            </div>
        </section>

    );
}

export default HomeBlog;