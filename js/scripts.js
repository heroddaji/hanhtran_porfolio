document.addEventListener('DOMContentLoaded', function() {
    const viLink = document.getElementById('vi-link');
    const enLink = document.getElementById('en-link');

    const content = {
        vi: {
            name: 'Hanh Tran',
            title: 'Chuyên viên phân tích tài chính cao cấp tại Challenger Ltd, MA<br>Kiến trúc sư giải pháp & Nhà xây dựng mô hình Anaplan<br>Ứng viên CFA cấp II',
            aboutTitle: 'Về tôi',
            aboutText: 'Tôi có kinh nghiệm trong việc xây dựng và kiểm toán các mô hình tài chính và phân tích, thông minh kinh doanh, thẩm định M&A và chiến lược công ty. Tôi là người sử dụng Excel nâng cao, thành thạo Power Query, Power BI, và là Nhà xây dựng mô hình Anaplan được chứng nhận & Kiến trúc sư giải pháp Anaplan được chứng nhận. Một người độc lập có động lực nhưng cũng là một đồng đội tốt, tư duy phê phán cao với thái độ có thể làm và chú ý đến chi tiết là những gì mô tả tốt nhất về tôi.',
            experienceTitle: 'Kinh nghiệm',
            jobTitle1: 'Giảng viên mô hình tài chính',
            jobCompany1: 'EdooSmart · Freelance - Sydney, 2023 - Hiện tại',
            jobDescription1: '<li>Hội thảo về mô hình tài chính</li><li>Khóa học trực tuyến và video về mô hình tài chính</li>',
            teachingCourse: 'Khóa học giảng dạy:'
        },
        en: {
            name: 'Hanh Tran',
            title: 'Senior Financial Analyst at Challenger Ltd, MA<br>Anaplan Certified Solution Architect & Model Builder<br>CFA Level II Candidate',
            aboutTitle: 'About Me',
            aboutText: 'I have been experienced in building and auditing financial models and analysis, business intelligent, M&A due diligence and corporate strategy. I am an advanced Excel user, proficient in Power Query, Power BI, and a Certified Anaplan Model Builder & Certified Anaplan Solution Architect. A motivated independent person yet a good team player, highly critical mind with a can-do attitude and an eye for details are what best to describe me.',
            experienceTitle: 'Experience',
            jobTitle1: 'Financial Modelling Trainer',
            jobCompany1: 'EdooSmart · Freelance - Sydney, 2023 - Present',
            jobDescription1: '<li>Workshops on Financial Modelling</li><li>Financial Modelling online and video course</li>',
            teachingCourse: 'Teaching course:'
        }
    };

    function setLanguage(lang) {
        document.getElementById('name').innerHTML = content[lang].name;
        document.getElementById('title').innerHTML = content[lang].title;
        document.getElementById('about-title').innerHTML = content[lang].aboutTitle;
        document.getElementById('about-text').innerHTML = content[lang].aboutText;
        document.getElementById('experience-title').innerHTML = content[lang].experienceTitle;
        document.getElementById('job-title-1').innerHTML = content[lang].jobTitle1;
        document.getElementById('job-company-1').innerHTML = content[lang].jobCompany1;
        document.getElementById('job-description-1').innerHTML = content[lang].jobDescription1;
        document.getElementById('teaching-course').innerHTML = content[lang].teachingCourse;
    }

    viLink.addEventListener('click', function() {
        setLanguage('vi');
    });

    enLink.addEventListener('click', function() {
        setLanguage('en');
    });

    // Set default language to VI
    setLanguage('vi');
});