document.addEventListener('DOMContentLoaded', function() {
    const fonts = [
        "Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Avant Garde", 
        "Bookman", "Brush Script MT", "Calibri", "Cambria", "Candara", 
        "Century Gothic", "Century Schoolbook", "Comic Sans MS", "Consolas", "Courier", 
        "Courier New", "Didot", "Franklin Gothic Medium", "Futura", "Garamond", 
        "Geneva", "Georgia", "Gill Sans", "Helvetica", "Impact", "Lucida Bright", 
        "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "Lucida Handwriting", 
        "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", 
        "Monaco", "Monotype Corsiva", "MS Gothic", "MS PGothic", "MS Sans Serif", 
        "MS Serif", "MT Extra", "MV Boli", "News Gothic MT", "Optima", "Palatino", 
        "Palatino Linotype", "Perpetua", "Rockwell", "Segoe UI", "Tahoma", "Times", 
        "Times New Roman", "Trebuchet MS", "Verdana", "Webdings", "Wingdings", 
        "Wingdings 2", "Wingdings 3", "Abadi MT Condensed Light", "Academy Engraved LET", 
        "Adobe Caslon Pro", "Adobe Garamond Pro", "Algerian", "American Typewriter", 
        "Andale Mono", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", 
        "Apple Symbols", "Arial Unicode MS", "Baskerville", "Bauhaus 93", "Bell MT", 
        "Berlin Sans FB", "Bernard MT Condensed", "Bodoni MT", "Bodoni MT Black", 
        "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bradley Hand", 
        "Britannic Bold", "Broadway", "Brush Script Std", "Calisto MT", "Castellar", 
        "Centaur", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charcoal CY", 
        "Charter", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", 
        "Copperplate Gothic Bold", "Copperplate Gothic Light", "Corbel", "Corsiva Hebrew", 
        "Curlz MT", "DecoType Naskh", "Devanagari MT", "Devanagari Sangam MN", 
        "Didot LT STD", "DIN Alternate", "DIN Condensed", "Ebrima", "Edwardian Script ITC", 
        "Elephant", "Engravers MT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", 
        "Eras Medium ITC", "EucrosiaUPC", "Felix Titling", "Footlight MT Light", 
        "Forte", "Franklin Gothic Book", "Franklin Gothic Demi", "Franklin Gothic Demi Cond", 
        "Franklin Gothic Heavy", "Franklin Gothic Medium Cond", "Freestyle Script", 
        "French Script MT", "Futura Condensed Medium", "Gabriola", "Gadugi", 
        "Garamond Premier Pro", "Gautami", "Georgia Pro", "Gigi", "Gill Sans MT", 
        "Gill Sans MT Condensed", "Gill Sans Ultra Bold", "Gloucester MT Extra Condensed", 
        "Goudy Old Style", "Goudy Stout", "Gujarati MT", "Gujarati Sangam MN", 
        "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harlow Solid Italic", 
        "Harrington", "High Tower Text", "Hoefler Text", "Humanst521 BT", 
        "Imprint MT Shadow", "Informal Roman", "Javanese Text", "Jokerman", 
        "Juice ITC", "Kannada MN", "Kannada Sangam MN", "Kartika", "Kaufmann", 
        "Khmer UI", "Kino MT", "Kokonor", "Kozuka Gothic Pro", "Kozuka Mincho Pro", 
        "Kristen ITC", "Kunstler Script", "Lauren Script", "Leelawadee", 
        "Letter Gothic Std", "LilyUPC", "Lithograph", "Lithograph Light", 
        "Lucida Grande", "Magneto", "Maiandra GD", "Malayalam MN", "Malayalam Sangam MN", 
        "Marlett", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Menlo", 
        "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", 
        "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", 
        "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU-ExtB", 
        "MingLiU_HKSCS-ExtB", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", 
        "Modern No. 20", "Mongolian Baiti", "Monospaced", "Mrs Eaves", "MS Gothic", 
        "MS Mincho", "MS Outlook", "MS Reference Sans Serif", "MS Reference Specialty", 
        "MT Symbol", "Myanmar MN", "Myanmar Sangam MN", "Nadeem", "New Peninim MT", 
        "News Gothic", "Niagara Engraved", "Niagara Solid", "Noteworthy", 
        "OCR A Extended", "Old English Text MT", "Onyx", "Oriya MN", "Oriya Sangam MN", 
        "Osaka", "Papyrus", "Parchment", "Party LET", "Perpetua Titling MT", 
        "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", 
        "Poor Richard", "Pristina", "Rage Italic", "Ravie", "Rockwell Extra Bold", 
        "Rockwell Nova", "Rockwell Nova Cond", "Rockwell Nova Light", "Rod", 
        "Sakkal Majalla", "Script MT Bold", "Segoe Print", "Segoe Script", 
        "Showcard Gothic", "SimHei", "SimSun", "SimSun-ExtB", "Sitka", 
        "Snell Roundhand", "Stencil", "Sylfaen", "Symbol", "Tahoma", "TeX", 
        "Times", "Trattatello", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", 
        "Verdana Pro", "Viner Hand ITC", "Vivaldi", "Vladimir Script", "Webdings", 
        "Wide Latin", "Wingdings", "Wingdings 2", "Wingdings 3", "Yu Gothic", 
        "Yu Gothic UI", "Zapf Chancery", "Zapf Dingbats", "Zapfino"
    ];

    const fontSelect = document.getElementById('font-select');
   
    // Populate the dropdown with fonts
    fonts.forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontSelect.appendChild(option);
    });
    fontSelect.addEventListener('change', function() {
        document.body.style.fontFamily = fontSelect.value;
    });


    // Language switcher

    const viLink = document.getElementById('vi-link');
    const enLink = document.getElementById('en-link');

    const content = {
        vi: {
            name: 'Hạnh Trần',
            title: 'Chuyên viên Tài chính Cao cấp tại Tập đoàn đầu tư Challenger Group Ltd, Australia<br>Anaplan Certified Solution Architect & Model Builder<br>Ứng viên CFA Level II<br>Thạc sĩ Kinh Doanh Quốc Tế',
            aboutTitle: 'Về tôi',
            aboutText: 'Tôi có 10 năm kinh nghiệm trong việc xây dựng và kiểm tra các mô hình tài chính và báo cáo phân tích, báo cáo kinh doanh, thẩm định M&A và chiến lược công ty.<br> Tôi thành thạo Excel nâng cao, Power Query, Power BI, và là Nhà xây dựng mô hình & Kiến trúc sư giải pháp Anaplan được chứng nhận (Anaplan Certified Solution Architect). <br>Có thể làm việc độc lập hoặc cùng nhóm, có động lực cao và tinh thần tích cực, với tư duy phản biện và chú ý đến chi tiết là những gì mô tả tốt nhất về tôi.',
            activitiesTitle: 'Khoá học và Webinar',
            activitiesDescription: '<li>1/2023: Webinar về Mô hình Tài chính - Financial Modelling - Kết hợp cùng EdooSmart</li><li>12/2020: Workshop Những mẹo dùng Excel hiệu quả cho nghề tài chính</li><li>7/2020: CPA Australia Webinar - Survey and Dashboard</li><li>6/2020: CPA Australia Webinar - Improving Excel and Power BI for finance professionals</li>',
            experienceTitle: 'Kinh nghiệm',
            jobTitle1: 'Giảng viên Môn Mô hình Tài chính (Financial Modelling)',
            jobCompany1: 'EdooSmart · Freelance · Sydney, Úc, 2023 - nay',
            jobDescription1: '<li>Tổ chức các hội thảo về lý thuyết và thực hành Mô hình Tài chính</li><li>Giảng dạy các khóa học trực tuyến về bộ môn Mô hình Tài chính</li>',
            jobTitle2: 'Chuyên viên Tài chính Cao Cấp - Văn phòng CFO Tập đoàn',
            jobCompany2: 'Tập đoàn Đầu tư Challenger Group Limited · Sydney, Úc, 2021 - nay',
            jobDescription2: '<li>Chịu trách nhiệm lập mô hình tài chính và các báo cáo tài chính chi tiết cho Life Company (công ty con) và Tập đoàn, hỗ trợ CFO (Giám đốc Tài chính) và Ban Lãnh đạo trong việc ra các quyết định chiến lược</li><li>Quản lý các mô hình tài chính của công ty trên nền tảng Anaplan: Life Company, Ngân hàng (Challenger Bank), Công ty Quản lý quỹ (Fund Management & Boutique), Tập đoàn (Group)</li>',
            jobTitle3: 'Chuyên viên Cao cấp',
            jobCompany3: 'SumProduct · Sydney, Úc, 2019 - 2021',
            jobDescription3: '<li>Tư vấn phát triển và kiểm toán các mô hình tài chính: mô hình dự toán, tài chính doanh nghiệp, mô hình định giá; làm việc trực tiếp với các khách hàng doanh nghiệp để đảm bảo chất lượng sản phẩm cao; sử dụng các công cụ Excel nâng cao, Power Pivot, Power Query, Power BI<li>Đóng góp viết bài cho chuỗi blog Charts and Dashboards, các bài viết chuyên môn về Power BI, Power Pivot trên trang web công ty</li>',
            jobTitle4: 'Tư vấn',
            jobCompany4: 'Ecovis AFA Viet Nam, 2017 - 2021',
            jobDescription4: '<li>Tư vấn các dự án hợp tác chiến lược với đối tác nước ngoài</li>',
            jobTitle5: 'Trợ lý Nghiên cứu Tài chính',
            jobCompany5: 'RoZetta · Sydney, Úc, 2018 - 2019',
            jobDescription5: '<li>Thu thập, sắp xếp và phân tích dữ liệu thị trường chứng khoán</li><li>Tiến hành các nghiên cứu về khía cạnh hành vi của người tham gia thị trường chứng khoán</li><li>Thực hành các phân tích giám sát thị trường sử dụng công cụ SMARTS</li> ',
            jobTitle6: 'Trợ lý Quản lý - Bộ phận Chiến lược và Kinh doanh Toàn cầu',
            jobCompany6: 'Tập đoàn Dong-A Socio Group · Seoul, Hàn Quốc, 2016 - 2017',
            jobDescription6: '<li>Tiến hành các phân tích tài chính và kinh doanh đối với các thị trường và công ty mục tiêu</li><li>Tham gia các dự án M&A, định giá đầu tư tại các công ty dược phẩm top đầu tại Việt Nam</li><li>Chuẩn bị các báo cáo nghiên cứu thị trường, kế hoạch tài chính cho các dự án nước ngoài, đóng góp vào sự thành công của dự án phân phối sản phẩm chủ đạo của Tập đoàn vào thị trường Việt Nam</li><li>Khởi động dự án cùng phát triển sản phẩm mới với đối tác nước ngoài</li>',
            jobTitle7: 'Thực tập sinh Phân tích Chứng khoán - Công ty Chứng khoán Agribank',
            jobCompany7: 'Ngân hàng Nông nghiệp và Phát triển Nông thôn · Đà Nẵng, Việt Nam, 2012',
            jobDescription7: '<li>Chuẩn bị các báo cáo phân tích tài chính của những công ty niêm yết chọn lọc tại thị trường chứng khoán Việt Nam</li>',
            educationTitle: 'Học vấn',
            eduTitle1: 'Financial Analysis',
            eduSchool1: 'CFA Institute, 2019 - 2024',
            eduDescription1: '<li>CFA Program Exam Level 1</li><li>Ứng viên chương trình CFA Level II</li>',
            eduTitle2: 'Thạc sĩ Kinh doanh Quốc tế Bằng Xuất sắc',
            eduSchool2: 'Đại học KyungHee, Seoul, Hàn Quốc, 2014 - 2016',
            eduDescription2: '<li>Xếp hạng tốt nghiệp: 4.14/4.3</li><li>Học bổng Lãnh đạo Toàn cầu</li><li>Chủ nhiệm Hội đồng Sinh viên Quốc tế</li>',
            eduTitle3: 'Cử nhân Quản trị Kinh doanh (Tài chính) Bằng Giỏi',
            eduSchool3: 'Đại học Kinh tế - Đại học Đà Nẵng, Việt Nam, 2009 - 2013',
            eduDescription3: '<li>Xếp hạng tốt nghiệp: 3.46/4</li><li>Học bổng Thành tích Xuất sắc</li><li>Thành viên nhóm Đại diện Sinh viên Khoa Quản trị Kinh doanh</li>',
            eduTitle4: 'Bằng Tốt nghiệp Trung học Phổ thông (Tiếng Anh)',
            eduSchool4: 'Trường Trung học Phổ thông Chuyên Lê Quý Đôn, Đà Nẵng, Việt Nam, 2006 - 2009',
            eduDescription4: '',
            contact: 'Liên Hệ',
            contactDescription: 'Vui lòng liên hệ hợp tác với tôi qua email: tuyethanh19@gmail.com',
        },
        en: {
            name: 'Hanh Tran',
            title: 'Senior Financial Analyst at Challenger Group Ltd<br>Anaplan Certified Solution Architect & Model Builder<br>CFA Level II Candidate<br>Master of Arts in International Business',
            aboutTitle: 'About Me',
            aboutText: 'I have 10-year experience in building and auditing financial models and analysis, business intelligent, M&A due diligence and corporate strategy. <br>I am an advanced Excel user, proficient in Power Query, Power BI, and a Certified Anaplan Model Builder & Certified Anaplan Solution Architect. Beside my daywork, I am passionate in sharing and training in financial modelling and spreadsheet skills, conducting webinars and collaborating in training courses.<br>A motivated independent person yet a good team player, highly critical mind with a can-do attitude and an eye for details are what best to describe me.',
            activitiesTitle: 'Courses and Webinars',
            activitiesDescription: '<li>1/2023: Financial Modelling Workshop</li><li>12/2020: How to use Excel like a Pro and Earn a Living</li><li>7/2020: CPA Australia Webinar - Survey and Dashboard</li><li>6/2020: CPA Australia Webinar - Improving Excel and Power BI for finance professionals</li>',
            experienceTitle: 'Experience',
            jobTitle1: 'Financial Modelling Trainer',
            jobCompany1: 'EdooSmart · Freelance - Sydney, Australia, 2023 - Present',
            jobDescription1: '<li>Workshops on Financial Modelling</li><li>Financial Modelling online courses</li>',
            jobTitle2: 'Senior Financial Analyst - Group CFO Office',
            jobCompany2: 'Challenger Limited · Sydney, Australia, 2021 - Present',
            jobDescription2: '<li>Responsible for the detailed analysis and financial modelling of the Balance Sheet and P&L of the Life Company, Group and Projects </li><li>Performing and maintaining financial models on Anaplan platform</li><li>Preparation of investment asset analysis, funding and margin analysis, responses on ad-hoc requests</li>',
            jobTitle3: 'Senior Analyst',
            jobCompany3: 'SumProduct · Sydney, Australia, 2019 - 2021',
            jobDescription3: '<li>Developed and audit financial models (budgeting, corporate finance, valuations); closely liasing with clients to ensure high-quality outputs; using Advanced Excel, Power Pivot, Power Query, Power BI<li>Hosted the Charts and Dashboards blog series, contributed to the Power BI, Power Pivot blog series</li>',
            jobTitle4: 'Advisor',
            jobCompany4: 'Ecovis AFA Viet Nam, 2017 - 2021',
            jobDescription4: '<li>Project due-diligence, financial model and report review.</li><li>Advisory on external relations and business development strategy with foreign-related parties.',
            jobTitle5: 'Finance Research Assistant',
            jobCompany5: 'RoZetta - Sydney, Australia, 2018 - 2019',
            jobDescription5: '<li>Collected, organised and analysed stock market data</li><li>Conducted research on behavioural aspects of stock market participants</li><li>Practiced market surveillance using SMARTS tool.</li> ',
            jobTitle6: 'Assistant Manager - Corporate Strategy & Global Business',
            jobCompany6: 'Dong-A Socio Group · Seoul, Korea, 2016 - 2017',
            jobDescription6: '<li>Conducted financial analysis in target markets and company</li><li>Took part in M&A, Due diligence projects in Vietnam top pharma companies</li><li>Prepared market research, financial planning for overseas business projects, leading to a successful relaunch of group signature products in Vietnam</li><li>Initiated new product co-development with overseas partners</li>',
            jobTitle7: 'Equity Analyst Intern - Agribank Securities',
            jobCompany7: 'Vietnam Bank for Agriculture and Rural Development · Da Nang, Viet Nam, 2012',
            jobDescription7: '<li>Prepared financial analysis of selected listed companies in Viet Nam</li>',
            educationTitle: 'Education',
            eduTitle1: 'Financial Analysis',
            eduSchool1: 'CFA Institute, 2019 - 2024',
            eduDescription1: '<li>Passed CFA Program Exam Level 1</li><li>CFA Level II Candidate</li>',
            eduTitle2: 'Master of Arts (MA) with Dean Award in International Business',
            eduSchool2: 'KyungHee University, Seoul, Korea, 2014 - 2016',
            eduDescription2: '<li>Graduate Grade: 4.14/4.3</li><li>Global Leadership Scholarship</li><li>President of International Student Council</li>',
            eduTitle3: 'Bachelor of Business Administration (Finance)',
            eduSchool3: 'University of Economics, Da Nang, Viet Nam, 2009 - 2013',
            eduDescription3: '<li>Graduate Grade: 3.46/4</li><li>Academic Excellence Scholarship</li><li>Student Representative of Department of Business Administration</li>',
            eduTitle4: 'High School Diploma (English)',
            eduSchool4: 'Le Quy Don High School for the Gifted, Da Nang, Viet Nam, 2006 - 2009',
            eduDescription4: '',
            contact: 'Contact',
            contactDescription: 'If you would like to get in touch, please reach out via email at tuyethanh19@gmail.com',
            
        }
    };

    function setLanguage(lang) {
        document.getElementById('name').innerHTML = content[lang].name;
        document.getElementById('title').innerHTML = content[lang].title;
        document.getElementById('about-title').innerHTML = content[lang].aboutTitle;
        document.getElementById('about-text').innerHTML = content[lang].aboutText;
        document.getElementById('activities-title').innerHTML = content[lang].activitiesTitle;
        document.getElementById('activities-description').innerHTML = content[lang].activitiesDescription;
        document.getElementById('experience-title').innerHTML = content[lang].experienceTitle;
        document.getElementById('job-title-1').innerHTML = content[lang].jobTitle1;
        document.getElementById('job-company-1').innerHTML = content[lang].jobCompany1;
        document.getElementById('job-description-1').innerHTML = content[lang].jobDescription1;
        document.getElementById('job-title-2').innerHTML = content[lang].jobTitle2;
        document.getElementById('job-company-2').innerHTML = content[lang].jobCompany2;
        document.getElementById('job-description-2').innerHTML = content[lang].jobDescription2;
        document.getElementById('job-title-3').innerHTML = content[lang].jobTitle3;
        document.getElementById('job-company-3').innerHTML = content[lang].jobCompany3;
        document.getElementById('job-description-3').innerHTML = content[lang].jobDescription3;
        document.getElementById('job-title-4').innerHTML = content[lang].jobTitle4;
        document.getElementById('job-company-4').innerHTML = content[lang].jobCompany4;
        document.getElementById('job-description-4').innerHTML = content[lang].jobDescription4;
        document.getElementById('job-title-5').innerHTML = content[lang].jobTitle5;
        document.getElementById('job-company-5').innerHTML = content[lang].jobCompany5;
        document.getElementById('job-description-5').innerHTML = content[lang].jobDescription5;
        document.getElementById('job-title-6').innerHTML = content[lang].jobTitle6;
        document.getElementById('job-company-6').innerHTML = content[lang].jobCompany6;
        document.getElementById('job-description-6').innerHTML = content[lang].jobDescription6;
        document.getElementById('job-title-7').innerHTML = content[lang].jobTitle7;
        document.getElementById('job-company-7').innerHTML = content[lang].jobCompany7;
        document.getElementById('job-description-7').innerHTML = content[lang].jobDescription7;
        document.getElementById('education-title').innerHTML = content[lang].educationTitle;
        document.getElementById('edu-title-1').innerHTML = content[lang].eduTitle1;
        document.getElementById('edu-school-1').innerHTML = content[lang].eduSchool1;
        document.getElementById('edu-description-1').innerHTML = content[lang].eduDescription1;
        document.getElementById('edu-title-2').innerHTML = content[lang].eduTitle2;
        document.getElementById('edu-school-2').innerHTML = content[lang].eduSchool2;
        document.getElementById('edu-description-2').innerHTML = content[lang].eduDescription2;
        document.getElementById('edu-title-3').innerHTML = content[lang].eduTitle3;
        document.getElementById('edu-school-3').innerHTML = content[lang].eduSchool3;
        document.getElementById('edu-description-3').innerHTML = content[lang].eduDescription3;
        document.getElementById('edu-title-4').innerHTML = content[lang].eduTitle4;
        document.getElementById('edu-school-4').innerHTML = content[lang].eduSchool4;
        document.getElementById('edu-description-4').innerHTML = content[lang].eduDescription4;
        document.getElementById('contact').innerHTML = content[lang].contact;
        document.getElementById('contact-description').innerHTML = content[lang].contactDescription;
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