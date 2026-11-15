document.addEventListener("DOMContentLoaded", function () {
  // Language switcher
  const viLink = document.getElementById("vi-link");
  const enLink = document.getElementById("en-link");

  const content = {
    vi: {
      name: "Hạnh Trần",
      title:
        "Finance Manager tại Văn phòng CFO - Challenger Group Australia<br>Certified Master Anaplanner<br>Microsoft Office Specialist Excel Expert<br>Ứng viên CFA Level II<br>Thạc sĩ Kinh Doanh Quốc Tế",
      aboutTitle: "Về tôi",
      aboutText:
        "<p>Tôi là chuyên gia tài chính với hơn 10 năm kinh nghiệm xây dựng, rà soát và kiểm tra các mô hình tài chính. Công việc của tôi trải rộng từ lập kế hoạch và phân tích tài chính, mô hình định giá bảo hiểm và quản lý quỹ, báo cáo quản trị kinh doanh (Business Intelligence), thẩm định M&A, chiến lược doanh nghiệp đến chuyển đổi quy trình tài chính.</p><p>Tôi đã làm việc với các doanh nghiệp tại Úc, Hàn Quốc và Việt Nam trong các lĩnh vực đầu tư và quản lý quỹ, bảo hiểm, dược phẩm và dịch vụ y tế, phân phối, đại học và giáo dục, cơ sở hạ tầng công cộng và nông nghiệp.</p><p>Là <strong>Certified Master Anaplanner</strong> và <strong>Microsoft Office Specialist Excel Expert</strong>, tôi kết hợp sức mạnh của nền tảng lập kế hoạch kết nối (connected planning) Anaplan với Excel nâng cao, Power Query và Power BI.</p><p>Tôi cũng tổ chức các buổi webinar và giảng dạy các khoá học về Mô hình Tài chính và Excel, đồng thời sử dụng thành thạo tiếng Việt, tiếng Anh, tiếng Hàn và tiếng Trung (Quan Thoại).</p><p>Có thể làm việc độc lập hoặc cùng nhóm, có động lực cao và tinh thần tích cực, với tư duy phản biện và chú ý đến chi tiết là những gì mô tả tốt nhất về tôi.</p>",
      activitiesTitle: "Khoá học và Webinar",
      activitiesFmCourseDescription:
        "<li>1/2023: Webinar về Mô hình Tài chính - Financial Modelling - Kết hợp cùng EdooSmart</li><li>12/2020: Workshop Những mẹo dùng Excel hiệu quả cho nghề tài chính</li><li>7/2020: CPA Australia Webinar - Survey and Dashboard</li><li>6/2020: CPA Australia Webinar - Improving Excel and Power BI for finance professionals</li>",
      activitiesExcelCourseDescription:
        "<li>12/2025: Webinar về tư duy và kỹ năng Excel thiết yếu cho các chuyên viên trong lĩnh vực tài chính</li>",
      // projectTitle: 'Courses and Webinars',
      // projectDescription: '<li>1/2023: Financial Modelling Workshop</li><li>12/2020: How to use Excel like a Pro and Earn a Living</li><li>7/2020: CPA Australia Webinar - Survey and Dashboard</li><li>6/2020: CPA Australia Webinar - Improving Excel and Power BI for finance professionals</li>',
      experienceTitle: "Kinh nghiệm",
      jobTitle1: "Giảng viên Môn Mô hình Tài chính (Financial Modelling)",
      jobCompany1: "EdooSmart · Sydney, Úc, 2023 - nay",
      jobDescription1:
        "<li>Tổ chức các hội thảo về lý thuyết và thực hành Mô hình Tài chính và Kỹ năng Excel</li><li>Giảng dạy các khóa học trực tuyến về bộ môn Mô hình Tài chính và Kỹ năng Excel cho nghề Tài chính</li>",
      jobTitle2: "Finance Manager - Văn phòng CFO Tập đoàn",
      jobCompany2:
        "Tập đoàn Đầu tư Challenger Group Limited · Sydney, Úc, 2021 - nay",
      jobDescription2:
        "<li>Chịu trách nhiệm lập mô hình tài chính và các báo cáo tài chính chi tiết cho Life Company (Công ty con) và Tập đoàn, hỗ trợ CFO (Giám đốc Tài chính) và Ban Lãnh đạo trong việc ra các quyết định chiến lược</li><li>Quản lý các mô hình tài chính của tập đoàn trên nền tảng Anaplan: Life Company, Ngân hàng (Challenger Bank), Công ty Quản lý quỹ (Fund Management & Boutique), Tập đoàn (Group)</li>",
      jobTitle3: "Chuyên viên Cao cấp",
      jobCompany3: "SumProduct · Sydney, Úc, 2019 - 2021",
      jobDescription3:
        "<li>Tư vấn phát triển và kiểm tra các mô hình tài chính: mô hình dự toán, tài chính doanh nghiệp, mô hình định giá; làm việc trực tiếp với các khách hàng doanh nghiệp để đảm bảo chất lượng sản phẩm cao; sử dụng các công cụ Excel nâng cao, Power Pivot, Power Query, Power BI<li>Các dự án mô hình tài chính đã thực hiện: Trang trại nuôi gà và trứng tại bang New South Wales, Đường hầm Sydney, Trường Đại học tại Melbourne, Công ty Giáo dục Quốc tế tại Melbourne, Trung tâm Hỗ trợ Bảo hiểm Quốc gia Úc (NDIS) tại Queensland, Quỹ đầu tư Tư nhân tại Sydney, Ngân hàng địa phương tại bang New South Wales, etc.<li>Đóng góp viết bài cho chuỗi blog Charts and Dashboards, các bài viết chuyên môn về Power BI, Power Pivot trên trang web công ty</li>",
      jobTitle4: "Tư vấn",
      jobCompany4: "Ecovis AFA Viet Nam, 2017 - 2021",
      jobDescription4:
        "<li>Tư vấn các dự án hợp tác chiến lược với đối tác nước ngoài</li>",
      jobTitle5: "Trợ lý Nghiên cứu Tài chính",
      jobCompany5: "RoZetta · Sydney, Úc, 2018 - 2019",
      jobDescription5:
        "<li>Thu thập, sắp xếp và phân tích dữ liệu thị trường chứng khoán</li><li>Tiến hành các nghiên cứu về khía cạnh hành vi của nhà đầu tư trên thị trường chứng khoán</li><li>Thực hành các phân tích giám sát thị trường sử dụng công cụ SMARTS</li> ",
      jobTitle6: "Trợ lý Quản lý - Bộ phận Chiến lược và Kinh doanh Toàn cầu",
      jobCompany6: "Tập đoàn Dong-A Socio Group · Seoul, Hàn Quốc, 2016 - 2017",
      jobDescription6:
        "<li>Tiến hành các phân tích tài chính và kinh doanh đối với các thị trường và công ty mục tiêu</li><li>Tham gia các dự án M&A, định giá đầu tư tại các công ty dược phẩm top đầu tại Việt Nam</li><li>Chuẩn bị các báo cáo nghiên cứu thị trường, kế hoạch tài chính cho các dự án nước ngoài, đóng góp vào sự thành công của dự án phân phối sản phẩm chủ đạo của Tập đoàn vào thị trường Việt Nam</li><li>Khởi động dự án cùng phát triển sản phẩm mới với đối tác nước ngoài</li>",
      jobTitle7:
        "Thực tập sinh Phân tích Chứng khoán - Công ty Chứng khoán Agribank",
      jobCompany7:
        "Ngân hàng Nông nghiệp và Phát triển Nông thôn · Đà Nẵng, Việt Nam, 2012",
      jobDescription7:
        "<li>Chuẩn bị các báo cáo phân tích tài chính của những công ty niêm yết chọn lọc tại thị trường chứng khoán Việt Nam</li>",
      educationTitle: "Học vấn",
      eduTitle1: "Financial Analysis (CFA Level 1)",
      eduSchool1: "CFA Institute, 2019 - 2024",
      eduDescription1:
        "<li>CFA Program Exam Level 1</li><li>Ứng viên chương trình CFA Level II</li>",
      eduTitle2: "Thạc sĩ Kinh doanh Quốc tế Bằng Xuất sắc",
      eduSchool2: "Đại học KyungHee, Seoul, Hàn Quốc, 2014 - 2016",
      eduDescription2:
        "<li>Xếp hạng tốt nghiệp: 4.14/4.3</li><li>Học bổng Lãnh đạo Toàn cầu</li><li>Chủ nhiệm Hội đồng Sinh viên Quốc tế</li>",
      eduTitle3: "Cử nhân Quản trị Kinh doanh (Tài chính) Bằng Giỏi",
      eduSchool3: "Đại học Kinh tế - Đại học Đà Nẵng, Việt Nam, 2009 - 2013",
      eduDescription3:
        "<li>Xếp hạng tốt nghiệp: 3.46/4</li><li>Học bổng Thành tích Xuất sắc</li><li>Thành viên nhóm Đại diện Sinh viên Khoa Quản trị Kinh doanh</li>",
      eduTitle4: "Bằng Tốt nghiệp Trung học Phổ thông (Tiếng Anh)",
      eduSchool4:
        "Trường Trung học Phổ thông Chuyên Lê Quý Đôn, Đà Nẵng, Việt Nam, 2006 - 2009",
      eduDescription4: "",
      contact: "Liên Hệ",
      contactDescription:
        'Vui lòng liên hệ hợp tác với tôi qua email: <a href="mailto:tuyethanh19@gmail.com">tuyethanh19@gmail.com</a>',
      fmCourse: "Khoá học Mô hình Tài chính",
      excelCourse: "Khoá học Excel MasterClass cho Chuyên viên Tài chính",
    },
    en: {
      name: "Hanh Tran",
      title:
        "Finance Manager at CFO Office, Challenger Group Australia<br>Certified Master Anaplanner<br>Microsoft Office Specialist Excel Expert<br>CFA Level II Candidate<br>Master of Arts in International Business",
      aboutTitle: "About Me",
      aboutText:
        "<p>I am a finance professional with more than 10 years of experience building, reviewing and auditing financial models. My work spans financial planning and analysis, actuarial and fund management models, business intelligence, M&A due diligence, corporate strategy and finance process transformation.</p><p>I have worked with companies in Australia, Korea and Vietnam across investment and fund management, insurance, pharmaceuticals and healthcare services, distribution, universities and education, public infrastructure and agriculture.</p><p>As a <strong>Certified Master Anaplanner</strong> and <strong>Microsoft Office Specialist Excel Expert</strong>, I combine the power of Anaplan's connected planning with advanced Excel, Power Query and Power BI.</p><p>I also run webinars and teach courses in financial modelling and Excel, and I am fluent in Vietnamese, English, Korean and Mandarin.</p><p>A motivated independent person yet a good team player, highly critical mind with a can-do attitude and an eye for details are what best to describe me.</p>",
      activitiesTitle: "Courses and Webinars",
      activitiesFmCourseDescription:
        "<li>1/2023: Financial Modelling Workshop</li><li>12/2020: How to use Excel like a Pro and Earn a Living</li><li>7/2020: CPA Australia Webinar - Survey and Dashboard</li><li>6/2020: CPA Australia Webinar - Improving Excel and Power BI for finance professionals</li>",
      activitiesExcelCourseDescription:
        "<li>12/2025: Workshop on Excel Mindset and Essential Skills for Finance Professionals</li>",
      //projectTitle: 'Courses and Webinars',
      //projectDescription: '<li>1/2023: Financial Modelling Workshop</li><li>12/2020: How to use Excel like a Pro and Earn a Living</li><li>7/2020: CPA Australia Webinar - Survey and Dashboard</li><li>6/2020: CPA Australia Webinar - Improving Excel and Power BI for finance professionals</li>',
      experienceTitle: "Experience",
      jobTitle1: "Financial Modelling Trainer",
      jobCompany1: "EdooSmart · Sydney, Australia, 2023 - Present",
      jobDescription1:
        "<li>Workshops on Financial Modelling and Excel for Finance Professionals</li><li>Financial Modelling online courses</li><li>Excel MasterClass for Finance Professionals online course",
      jobTitle2: "Finance Manager - Group CFO Office",
      jobCompany2: "Challenger Limited · Sydney, Australia, 2021 - Present",
      jobDescription2:
        "<li>Responsible for the detailed analysis and financial modelling of the Balance Sheet and P&L of the Life Company, Group and Projects </li><li>Performing and maintaining group financial models on Anaplan platform</li><li>Preparation of investment asset analysis, funding and margin analysis, responses on ad-hoc requests</li>",
      jobTitle3: "Senior Analyst",
      jobCompany3: "SumProduct · Sydney, Australia, 2019 - 2021",
      jobDescription3:
        "<li>Developed and audit financial models (budgeting, corporate finance, valuations); closely liasing with clients to ensure high-quality outputs; using Advanced Excel, Power Pivot, Power Query, Power BI<li>Financial Modelling projects: Pastoral farm in New South Wales, Sydney tunnel, University in Melbourne, International Education company in Melbourne, NDIS Supported Service Centre in Queensland, Private Equity fund in Sydney, Local bank in New South Wales, etc.<li>Hosted the Charts and Dashboards blog series, contributed to the Power BI, Power Pivot blog series</li>",
      jobTitle4: "Advisor",
      jobCompany4: "Ecovis AFA Viet Nam, 2017 - 2021",
      jobDescription4:
        "<li>Project due-diligence, financial model and report review.</li><li>Advisory on external relations and business development strategy with foreign-related parties.",
      jobTitle5: "Finance Research Assistant",
      jobCompany5: "RoZetta - Sydney, Australia, 2018 - 2019",
      jobDescription5:
        "<li>Collected, organised and analysed stock market data</li><li>Conducted research on behavioural aspects of stock market participants</li><li>Practiced market surveillance using SMARTS tool.</li> ",
      jobTitle6: "Assistant Manager - Corporate Strategy & Global Business",
      jobCompany6: "Dong-A Socio Group · Seoul, Korea, 2016 - 2017",
      jobDescription6:
        "<li>Conducted financial analysis in target markets and company</li><li>Took part in M&A, Due diligence projects in Vietnam top pharma companies</li><li>Prepared market research, financial planning for overseas business projects, leading to a successful relaunch of group signature products in Vietnam</li><li>Initiated new product co-development with overseas partners</li>",
      jobTitle7: "Equity Analyst Intern - Agribank Securities",
      jobCompany7:
        "Vietnam Bank for Agriculture and Rural Development · Da Nang, Viet Nam, 2012",
      jobDescription7:
        "<li>Prepared financial analysis of selected listed companies in Viet Nam</li>",
      educationTitle: "Education",
      eduTitle1: "Financial Analysis (CFA Level 1)",
      eduSchool1: "CFA Institute, 2019 - 2024",
      eduDescription1:
        "<li>Passed CFA Program Exam Level 1</li><li>CFA Level II Candidate</li>",
      eduTitle2:
        "Master of Arts (MA) with Dean Award in International Business",
      eduSchool2: "KyungHee University, Seoul, Korea, 2014 - 2016",
      eduDescription2:
        "<li>Graduate Grade: 4.14/4.3</li><li>Global Leadership Scholarship</li><li>President of International Student Council</li>",
      eduTitle3: "Bachelor of Business Administration (Finance)",
      eduSchool3: "University of Economics, Da Nang, Viet Nam, 2009 - 2013",
      eduDescription3:
        "<li>Graduate Grade: 3.46/4</li><li>Academic Excellence Scholarship</li><li>Student Representative of Department of Business Administration</li>",
      eduTitle4: "High School Diploma (English)",
      eduSchool4:
        "Le Quy Don High School for the Gifted, Da Nang, Viet Nam, 2006 - 2009",
      eduDescription4: "",
      contact: "Contact",
      contactDescription:
        'If you would like to get in touch, please reach out via email at <a href="mailto:tuyethanh19@gmail.com">tuyethanh19@gmail.com</a>',
      fmCourse: "Financial Modelling course",
      excelCourse: "Excel MasterClass For Finance Professionals",
    },
  };

  const ui = {
    vi: {
      navAbout: "Về tôi",
      navCourses: "Khoá học & Webinar",
      navResources: "Tài liệu",
      navConsulting: "Dịch vụ Tư vấn",
      navContact: "Liên hệ",
      resourcesTitle: "Tài liệu",
      booksTitle: "Sách",
      templatesTitle: "Mẫu biểu",
      consultingTitle: "Dịch vụ Tư vấn",
      servicesTitle: "Dịch vụ",
      projectsTitle: "Dự án đã thực hiện",
      comingSoon: "Sắp ra mắt.",
      coursesTitle: "Khoá học",
      viewCourse: "Xem khoá học",
      webinarsTitle: "Webinar",
      upcomingTitle: "Sắp diễn ra",
      upcomingText: "Hãy quay lại đây để cập nhật các buổi webinar sắp tới.",
      pastWebinarsTitle: "Webinar đã tổ chức",
      linkedinCta: "Kết nối trên LinkedIn",
    },
    en: {
      navAbout: "About Me",
      navCourses: "Courses & Webinars",
      navResources: "Resources",
      navConsulting: "Consulting Services",
      navContact: "Contact",
      resourcesTitle: "Resources",
      booksTitle: "Books",
      templatesTitle: "Templates",
      consultingTitle: "Consulting Services",
      servicesTitle: "Services",
      projectsTitle: "Past Projects",
      comingSoon: "Coming soon.",
      coursesTitle: "Courses",
      viewCourse: "View course",
      webinarsTitle: "Webinars",
      upcomingTitle: "Coming Soon",
      upcomingText: "Check back this space for coming webinars.",
      pastWebinarsTitle: "Past Webinars",
      linkedinCta: "Connect on LinkedIn",
    },
  };

  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");
  function showTab() {
    const id = location.hash.slice(1);
    const name = document.getElementById("panel-" + id) ? id : "about";
    panels.forEach((p) => p.classList.toggle("active", p.id === "panel-" + name));
    tabs.forEach((t) => {
      const on = t.dataset.tab === name;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
      if (on) t.scrollIntoView({ block: "nearest", inline: "nearest" });
    });
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", showTab);
  showTab();

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = ui[lang][el.dataset.i18n];
    });
    document.getElementById("brand-name").innerHTML = content[lang].name;
    viLink.classList.toggle("active", lang === "vi");
    enLink.classList.toggle("active", lang === "en");
    document.getElementById("name").innerHTML = content[lang].name;
    document.getElementById("title").innerHTML = content[lang].title;
    document.getElementById("about-title").innerHTML = content[lang].aboutTitle;
    document.getElementById("about-text").innerHTML = content[lang].aboutText;
    document.getElementById("past-webinars").innerHTML =
      content[lang].activitiesExcelCourseDescription +
      content[lang].activitiesFmCourseDescription;
    //document.getElementById('project-title').innerHTML = content[lang].projectTitle;
    //document.getElementById('project-description').innerHTML = content[lang].projectDescription;
    document.getElementById("experience-title").innerHTML =
      content[lang].experienceTitle;
    document.getElementById("job-title-1").innerHTML = content[lang].jobTitle1;
    document.getElementById("job-company-1").innerHTML =
      content[lang].jobCompany1;
    document.getElementById("job-description-1").innerHTML =
      content[lang].jobDescription1;
    document.getElementById("job-title-2").innerHTML = content[lang].jobTitle2;
    document.getElementById("job-company-2").innerHTML =
      content[lang].jobCompany2;
    document.getElementById("job-description-2").innerHTML =
      content[lang].jobDescription2;
    document.getElementById("job-title-3").innerHTML = content[lang].jobTitle3;
    document.getElementById("job-company-3").innerHTML =
      content[lang].jobCompany3;
    document.getElementById("job-description-3").innerHTML =
      content[lang].jobDescription3;
    document.getElementById("job-title-4").innerHTML = content[lang].jobTitle4;
    document.getElementById("job-company-4").innerHTML =
      content[lang].jobCompany4;
    document.getElementById("job-description-4").innerHTML =
      content[lang].jobDescription4;
    document.getElementById("job-title-5").innerHTML = content[lang].jobTitle5;
    document.getElementById("job-company-5").innerHTML =
      content[lang].jobCompany5;
    document.getElementById("job-description-5").innerHTML =
      content[lang].jobDescription5;
    document.getElementById("job-title-6").innerHTML = content[lang].jobTitle6;
    document.getElementById("job-company-6").innerHTML =
      content[lang].jobCompany6;
    document.getElementById("job-description-6").innerHTML =
      content[lang].jobDescription6;
    document.getElementById("job-title-7").innerHTML = content[lang].jobTitle7;
    document.getElementById("job-company-7").innerHTML =
      content[lang].jobCompany7;
    document.getElementById("job-description-7").innerHTML =
      content[lang].jobDescription7;
    document.getElementById("education-title").innerHTML =
      content[lang].educationTitle;
    document.getElementById("edu-title-1").innerHTML = content[lang].eduTitle1;
    document.getElementById("edu-school-1").innerHTML =
      content[lang].eduSchool1;
    //document.getElementById('edu-description-1').innerHTML = content[lang].eduDescription1;
    document.getElementById("edu-title-2").innerHTML = content[lang].eduTitle2;
    document.getElementById("edu-school-2").innerHTML =
      content[lang].eduSchool2;
    // document.getElementById('edu-description-2').innerHTML = content[lang].eduDescription2;
    document.getElementById("edu-title-3").innerHTML = content[lang].eduTitle3;
    document.getElementById("edu-school-3").innerHTML =
      content[lang].eduSchool3;
    // document.getElementById('edu-description-3').innerHTML = content[lang].eduDescription3;
    document.getElementById("edu-title-4").innerHTML = content[lang].eduTitle4;
    document.getElementById("edu-school-4").innerHTML =
      content[lang].eduSchool4;
    // document.getElementById('edu-description-4').innerHTML = content[lang].eduDescription4;
    document.getElementById("contact").innerHTML = content[lang].contact;
    document.getElementById("contact-description").innerHTML =
      content[lang].contactDescription;
    document.getElementById("fm-course").innerHTML = content[lang].fmCourse;
    document.getElementById("excel-course").innerHTML =
      content[lang].excelCourse;
  }

  viLink.addEventListener("click", function () {
    setLanguage("vi");
  });

  enLink.addEventListener("click", function () {
    setLanguage("en");
  });

  // Set default language to VI
  setLanguage("en");
});

function toggleExperience() {
  var moreExperience = document.getElementById("more-experience");
  var seeMoreBtn = document.getElementById("see-more-btn");
  if (moreExperience.style.display === "none") {
    moreExperience.style.display = "block";
    seeMoreBtn.textContent = "See Less";
  } else {
    moreExperience.style.display = "none";
    seeMoreBtn.textContent = "See More";
  }
}

const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");

// Open modal on image click
galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking on the background
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
