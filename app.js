/* =========================================================
   SWINBURNE STUDENT PORTAL — PROFESSIONAL V2
   GLOBAL UI + PAGE SYSTEM
   ========================================================= */

if (!localStorage.auth) {
  location = "login.html";
}


/* =========================================================
   CURRENT PAGE
   ========================================================= */

const page =
  location.pathname.split("/").pop() ||
  "dashboard.html";


/* =========================================================
   ICONS
   ========================================================= */

const icons = {

  dashboard: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  `,

  results: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <path d="M6 3h9l3 3v15H6z"/>
      <path d="M15 3v4h4"/>
      <path d="M9 12h6"/>
      <path d="M9 16h6"/>
    </svg>
  `,

  courses: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/>
      <path d="M4 5.5v15"/>
      <path d="M8 7h8"/>
      <path d="M8 11h8"/>
    </svg>
  `,

  timetable: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="4" width="18" height="17" rx="2"/>
      <path d="M7 2v4"/>
      <path d="M17 2v4"/>
      <path d="M3 9h18"/>
      <path d="M8 13h3"/>
      <path d="M13 13h3"/>
      <path d="M8 17h3"/>
    </svg>
  `,

  graduation: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <path d="m3 9 9-5 9 5-9 5z"/>
      <path d="M7 11v5c2 2 8 2 10 0v-5"/>
      <path d="M21 9v7"/>
    </svg>
  `,

  fees: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 10h18"/>
      <path d="M7 15h4"/>
    </svg>
  `,

  profile: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="8" r="3"/>
      <path d="M5 20c.8-4 3-6 7-6s6.2 2 7 6"/>
    </svg>
  `,

  support: `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="12" r="9"/>
      <path d="M9.5 9a2.7 2.7 0 1 1 4.7 1.8c-1.3 1.2-2.2 1.5-2.2 3.2"/>
      <path d="M12 17h.01"/>
    </svg>
  `
};


/* =========================================================
   NAVIGATION
   ========================================================= */

const nav = [

  [
    "dashboard.html",
    "Dashboard",
    "dashboard"
  ],

  [
    "results.html",
    "Academic Results",
    "results"
  ],

  [
    "courses.html",
    "Courses",
    "courses"
  ],

  [
    "timetable.html",
    "Timetable",
    "timetable"
  ],

  [
    "graduation.html",
    "Graduation",
    "graduation"
  ],

  [
    "fees.html",
    "Fees & Payments",
    "fees"
  ],

  [
    "profile.html",
    "Student Profile",
    "profile"
  ],

  [
    "support.html",
    "Support / Queries",
    "support"
  ]

];


/* =========================================================
   HELPERS
   ========================================================= */

function initials(name) {

  return (name || "NA")
    .split(/\s+/)
    .slice(-2)
    .map(x => x[0])
    .join("")
    .toUpperCase();

}


/* =========================================================
   SIDEBAR
   ========================================================= */

function createSidebar() {

  const old =
    document.querySelector(
      "body.app > aside"
    );

  if (old) {
    old.remove();
  }


  const aside =
    document.createElement("aside");

  aside.className =
    "portal-sidebar";


  aside.innerHTML = `

    <div class="portal-brand">

      <img
        src="./swinburne-sidebar-final.png"
        alt="Swinburne University of Technology"
      >

    </div>


    <div class="portal-section-label">
      Overview
    </div>


    <nav class="portal-nav">

      ${nav
        .slice(0, 1)
        .map(item => createNavLink(item))
        .join("")}

    </nav>


    <div class="portal-section-label">
      Academics
    </div>


    <nav class="portal-nav">

      ${nav
        .slice(1, 5)
        .map(item => createNavLink(item))
        .join("")}

    </nav>


    <div class="portal-section-label">
      Account
    </div>


    <nav class="portal-nav">

      ${nav
        .slice(5)
        .map(item => createNavLink(item))
        .join("")}

    </nav>


    <div class="portal-user">

      <div class="portal-user-name">
        ${S.name}
      </div>

      <div class="portal-user-id">
        ${S.id} · Bachelor of Business
      </div>


      <button
        class="portal-logout"
        onclick="localStorage.clear();location='login.html'"
      >
        Log out
      </button>

    </div>

  `;


  document.body.prepend(aside);

}


/* =========================================================
   NAV LINK
   ========================================================= */

function createNavLink(item) {

  const file =
    item[0];

  const label =
    item[1];

  const icon =
    item[2];


  return `

    <a
      class="${page === file ? "active" : ""}"
      href="${file}"
    >

      ${icons[icon]}

      <span>
        ${label}
      </span>

    </a>

  `;

}


/* =========================================================
   TOP BAR
   ========================================================= */

function createTopbar(
  title,
  subtitle
) {

  const article =
    document.querySelector(
      "body.app > article"
    );

  if (!article) {
    return;
  }


  const old =
    article.querySelector(
      ".portal-topbar"
    );

  if (old) {
    old.remove();
  }


  const bar =
    document.createElement("div");

  bar.className =
    "portal-topbar";


  const today =
    new Date().toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }
    );


  bar.innerHTML = `

    <div>

      <div class="portal-eyebrow">
        SWINBURNE VIETNAM · STUDENT PORTAL
      </div>

      <h1 class="portal-title">
        ${title}
      </h1>

      <p class="portal-subtitle">
        ${subtitle || ""}
      </p>

    </div>


    <div class="portal-top-actions">

      <div class="portal-date">
        ${today}
      </div>

      <div class="portal-avatar">
        ${initials(S.name)}
      </div>

    </div>

  `;


  article.prepend(bar);

}


/* =========================================================
   FOOTER
   ========================================================= */

function createFooter() {

  document
    .querySelectorAll(
      "body footer:not(.portal-footer)"
    )
    .forEach(
      footer => footer.remove()
    );


  if (
    document.querySelector(
      ".portal-footer"
    )
  ) {
    return;
  }


  const footer =
    document.createElement("footer");

  footer.className =
    "portal-footer";


  footer.innerHTML = `

    <div class="portal-footer-inner">


      <div class="portal-footer-top">


        <div class="portal-footer-brand">

          <img
            class="portal-footer-logo"
            src="./swinburne-sidebar-final.png"
            alt="Swinburne University of Technology"
          >

          <h3>
            Swinburne Vietnam
          </h3>

          <p>
            Swinburne University of Technology
            — Vietnam Alliance Program
          </p>

          <p>
            Alliance with FPT Education
          </p>

        </div>


        <div>

          <h4>
            Swinburne Vietnam
          </h4>

          <a
            href="https://swinburne-vn.edu.vn/"
            target="_blank"
            rel="noopener"
          >
            Giới thiệu
          </a>

          <a
            href="https://swinburne-vn.edu.vn/sinh-vien-hien-tai/"
            target="_blank"
            rel="noopener"
          >
            Sinh viên
          </a>

          <a
            href="https://swinburne-vn.edu.vn/"
            target="_blank"
            rel="noopener"
          >
            Nghiên cứu
          </a>

        </div>


        <div>

          <h4>
            Tuyển sinh
          </h4>

          <a
            href="https://swinburne-vn.edu.vn/list-admission/thong-bao-tuyen-sinh/"
            target="_blank"
            rel="noopener"
          >
            Tuyển sinh 2026
          </a>

          <a
            href="https://swinburne-vn.edu.vn/list-admission/thong-bao-tuyen-sinh/"
            target="_blank"
            rel="noopener"
          >
            Thủ tục tuyển sinh
          </a>

          <a
            href="https://swinburne-vn.edu.vn/course/quan-tri-kinh-doanh/"
            target="_blank"
            rel="noopener"
          >
            Chương trình đào tạo
          </a>

        </div>


        <div>

          <h4>
            Sinh viên Swinburne
          </h4>

          <a href="dashboard.html">
            Student Portal
          </a>

          <a href="results.html">
            Academic Results
          </a>

          <a href="graduation.html">
            Graduation
          </a>

        </div>

      </div>


      <div class="portal-footer-campus">

        <div class="portal-footer-campus-title">
          Liên hệ với Swinburne Vietnam Alliance Program
        </div>


        <div class="portal-footer-grid">

          <div>

            <h4>
              Cơ sở Hà Nội
            </h4>

            <p>
              Số 80 Duy Tân,
              Phường Cầu Giấy,
              TP. Hà Nội
            </p>

            <p>
              0939 403 555
            </p>

          </div>


          <div>

            <h4>
              Cơ sở Đà Nẵng
            </h4>

            <p>
              Lô 1+2-A14-16
              Khu Công Viên Bắc đài tưởng niệm,
              đường 2 tháng 9,
              Phường Hòa Cường,
              Đà Nẵng
            </p>

            <p>
              0798 210 555
            </p>

          </div>


          <div>

            <h4>
              Cơ sở HCM
            </h4>

            <p>
              A35 Bạch Đằng,
              Phường Tân Sơn Hòa,
              TP. Hồ Chí Minh
            </p>

            <p>
              0387 148 555
            </p>

          </div>


          <div>

            <h4>
              Cơ sở Cần Thơ
            </h4>

            <p>
              Số 600 Nguyễn Văn Cừ,
              Phường An Bình,
              TP. Cần Thơ
            </p>

            <p>
              0348 766 555
            </p>

          </div>

        </div>

      </div>


      <div class="portal-footer-bottom">

        <span>
          © 2026 Swinburne Vietnam Alliance Program
        </span>

        <span>
          Swinburne University of Technology
        </span>

      </div>


    </div>

  `;


  document.body.appendChild(
    footer
  );

}


/* =========================================================
   KPI CARD
   ========================================================= */

function kpi(
  label,
  value,
  meta,
  sub,
  extraClass = ""
) {

  return `

    <div class="portal-card portal-kpi">

      <div class="portal-kpi-label">
        ${label}
      </div>

      <div class="portal-kpi-value">
        ${value}
      </div>

      <div class="portal-kpi-meta ${extraClass}">
        ${meta} · ${sub}
      </div>

    </div>

  `;

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

  createTopbar(
    "Dashboard",
    `Welcome back, ${S.name}. Here is your current academic overview.`
  );


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-hero">

      <div class="portal-hero-grid">

        <div>

          <h2>
            Academic journey completed
          </h2>

          <p>
            ${S.id}
            · Bachelor of Business
            · Swinburne Vietnam
          </p>

        </div>


        <div class="portal-hero-side">

          <strong>
            ${S.progress}%
          </strong>

          <span>
            PROGRAM COMPLETION
          </span>

        </div>

      </div>

    </section>


    <section class="portal-section portal-grid portal-grid-4">

      ${kpi(
        "Current GPA",
        CALCULATED_GPA.toFixed(2),
        "4.00",
        "Excellent academic standing"
      )}

      ${kpi(
        "Credits completed",
        `${TOTAL_CREDITS} / ${S.totalCredits} CP`,
        "100%",
        "All required credit points"
      )}

      ${kpi(
        "Units completed",
        `${R.length} / ${R.length}`,
        "100%",
        "All programme units"
      )}

      ${kpi(
        "Fee balance",
        "0 ₫",
        "Clear",
        "No outstanding balance",
        "good"
      )}

    </section>


    <section class="portal-section portal-grid portal-grid-2">


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Academic performance
          </h2>

          <span class="portal-badge badge-green">
            Excellent
          </span>

        </div>


        <div
          style="
            font-size:38px;
            font-weight:850;
            letter-spacing:-1.5px;
          "
        >

          ${CALCULATED_GPA.toFixed(2)}

          <span
            style="
              font-size:14px;
              color:var(--muted);
              font-weight:650;
            "
          >
            / 4.00
          </span>

        </div>


        <div
          style="margin-top:20px"
          class="portal-progress"
        >

          <span
            style="
              width:${(CALCULATED_GPA / 4) * 100}%;
            "
          ></span>

        </div>


        <div class="portal-statline">

          <span>
            Academic standing
          </span>

          <strong>
            Excellent
          </strong>

        </div>

      </div>


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Graduation progress
          </h2>

          <a
            class="portal-action"
            href="graduation.html"
          >
            View details
          </a>

        </div>


        <div
          style="
            font-size:25px;
            font-weight:850;
          "
        >

          ${TOTAL_CREDITS}

          <span
            style="
              font-size:13px;
              color:var(--muted);
            "
          >
            / ${S.totalCredits} CP
          </span>

        </div>


        <div
          style="margin-top:17px"
          class="portal-progress"
        >

          <span style="width:100%"></span>

        </div>


        <div class="portal-statline">

          <span>
            ${R.length} of ${R.length} units
          </span>

          <strong>
            Completed
          </strong>

        </div>

      </div>

    </section>


    <section class="portal-section portal-grid portal-grid-2">


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Recent academic results
          </h2>

          <a
            class="portal-action"
            href="results.html"
          >
            View transcript
          </a>

        </div>


        <div class="portal-list">

          ${R
            .slice(-4)
            .reverse()
            .map(
              x => `

                <div class="portal-list-row">

                  <div class="portal-list-main">

                    <div class="portal-code">
                      ${x[0]}
                    </div>

                    <div class="portal-name">
                      ${x[1]}
                    </div>

                  </div>


                  <div class="portal-right">

                    <div class="portal-mark">
                      ${x[2]}
                    </div>

                    <span
                      class="
                        portal-badge
                        ${x[3] === "HD"
                          ? "badge-green"
                          : "badge-blue"}
                      "
                    >
                      ${x[3]}
                    </span>

                  </div>

                </div>

              `
            )
            .join("")}

        </div>

      </div>


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Quick actions
          </h2>

        </div>


        <div class="portal-actions">

          <a
            class="portal-action primary"
            href="results.html"
          >
            View transcript
          </a>

          <a
            class="portal-action"
            href="timetable.html"
          >
            View timetable
          </a>

          <a
            class="portal-action"
            href="fees.html"
          >
            Fees & payments
          </a>

          <a
            class="portal-action"
            href="support.html"
          >
            Contact support
          </a>

        </div>


        <div class="portal-divider"></div>


        <div class="portal-note">

          <strong>
            Student record
          </strong>

          <br>

          All ${R.length} units are recorded as completed.
          Your current GPA is
          ${CALCULATED_GPA.toFixed(2)}.

        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   ACADEMIC RESULTS
   ========================================================= */

function renderResults() {

  createTopbar(
    "Academic Results",
    "Academic record overview and transcript search."
  );


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-grid portal-grid-4">

      ${kpi(
        "Cumulative GPA",
        CALCULATED_GPA.toFixed(2),
        "4.00 scale",
        "24 units"
      )}

      ${kpi(
        "Credit points",
        TOTAL_CREDITS,
        "CP",
        "Completed"
      )}

      ${kpi(
        "High distinctions",
        R.filter(x => x[3] === "HD").length,
        "of 24",
        "HD grades"
      )}

      ${kpi(
        "Academic standing",
        "Excellent",
        "Current",
        "Classification"
      )}

    </section>


    <section class="portal-section portal-card">

      <div class="portal-card-head">

        <h2 class="portal-card-title">
          Academic transcript
        </h2>

        <button
          class="portal-action primary"
          onclick="window.print()"
        >
          Print transcript
        </button>

      </div>


      <div class="portal-searchbar">

        <input
          id="q"
          placeholder="Search unit code or unit name…"
          oninput="draw()"
        >

      </div>


      <div class="portal-table-wrap">

        <table
          class="portal-table"
          id="t"
        ></table>

      </div>

    </section>

  `;


  draw();

}


/* =========================================================
   RESULTS TABLE
   ========================================================= */

function draw() {

  const table =
    document.getElementById("t");


  if (
    !table ||
    typeof R === "undefined"
  ) {
    return;
  }


  const query =
    (
      document.getElementById("q")?.value ||
      ""
    )
      .toLowerCase()
      .trim();


  const rows =
    R.filter(
      row =>
        (
          row[0] +
          " " +
          row[1]
        )
          .toLowerCase()
          .includes(query)
    );


  table.innerHTML = `

    <thead>

      <tr>

        <th>
          Unit code
        </th>

        <th>
          Unit
        </th>

        <th>
          Mark
        </th>

        <th>
          Grade
        </th>

        <th>
          Grade point
        </th>

        <th>
          Credit points
        </th>

      </tr>

    </thead>


    <tbody>

      ${rows
        .map(
          x => `

            <tr>

              <td>
                <strong>
                  ${x[0]}
                </strong>
              </td>

              <td>
                ${x[1]}
              </td>

              <td>
                <strong>
                  ${x[2]}
                </strong>
              </td>

              <td>

                <span
                  class="
                    portal-badge
                    ${
                      x[3] === "HD"
                        ? "badge-green"
                        : x[3] === "D"
                        ? "badge-blue"
                        : "badge-amber"
                    }
                  "
                >
                  ${x[3]}
                </span>

              </td>

              <td>
                ${x[4]}
              </td>

              <td>
                12.5 CP
              </td>

            </tr>

          `
        )
        .join("")}

    </tbody>

  `;

}


/* =========================================================
   COURSES
   ========================================================= */

function renderCourses() {

  createTopbar(
    "Courses",
    "Bachelor of Business · 24 completed units · 300 credit points."
  );


  const groups = [

    [
      "Core units",
      R.slice(0, 8)
    ],

    [
      "Business Administration major",
      R.slice(8, 16)
    ],

    [
      "Elective units",
      R.slice(16)
    ]

  ];


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-card">

      <div class="portal-card-head">

        <h2 class="portal-card-title">
          Programme structure
        </h2>

        <span class="portal-badge badge-green">
          ${R.length} / ${R.length} completed
        </span>

      </div>


      <div class="portal-searchbar">

        <input
          id="courseSearch"
          placeholder="Search course code or name…"
          oninput="renderCourseGroups()"
        >

      </div>


      <div id="courseGroups"></div>

    </section>

  `;


  window.courseGroups =
    groups;


  renderCourseGroups();

}


function renderCourseGroups() {

  const query =
    (
      document.getElementById(
        "courseSearch"
      )?.value || ""
    )
      .toLowerCase();


  const element =
    document.getElementById(
      "courseGroups"
    );


  if (!element) {
    return;
  }


  element.innerHTML =
    courseGroups
      .map(
        group => `

          <div
            style="
              margin:25px 0;
            "
          >

            <div class="portal-card-head">

              <h3 class="portal-card-title">
                ${group[0]}
              </h3>

              <span class="portal-badge badge-green">
                ${group[1].length} units
              </span>

            </div>


            <div class="portal-table-wrap">

              <table class="portal-table">

                <thead>

                  <tr>

                    <th>
                      Code
                    </th>

                    <th>
                      Unit
                    </th>

                    <th>
                      Result
                    </th>

                    <th>
                      Grade
                    </th>

                    <th>
                      CP
                    </th>

                    <th>
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody>

                  ${group[1]
                    .filter(
                      x =>
                        (
                          x[0] +
                          " " +
                          x[1]
                        )
                          .toLowerCase()
                          .includes(query)
                    )
                    .map(
                      x => `

                        <tr>

                          <td>
                            <strong>
                              ${x[0]}
                            </strong>
                          </td>

                          <td>
                            ${x[1]}
                          </td>

                          <td>
                            ${x[2]}
                          </td>

                          <td>

                            <span class="portal-badge badge-green">
                              ${x[3]}
                            </span>

                          </td>

                          <td>
                            12.5
                          </td>

                          <td>

                            <span class="portal-badge badge-green">
                              Completed
                            </span>

                          </td>

                        </tr>

                      `
                    )
                    .join("")}

                </tbody>

              </table>

            </div>

          </div>

        `
      )
      .join("");

}


/* =========================================================
   TIMETABLE
   ========================================================= */

function renderTimetable() {

  createTopbar(
    "Timetable",
    "Weekly class schedule · Current study plan."
  );


  const days = [
    "Time",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];


  const classes = [

    [
      "09:00",
      "MGT10009",
      "Management Principles",
      "Room A203",
      "Monday"
    ],

    [
      "10:00",
      "STA10003",
      "Foundation of Statistics",
      "Lab 2",
      "Tuesday"
    ],

    [
      "09:00",
      "HRM20017",
      "Managing Workplace Relations",
      "Room A104",
      "Wednesday"
    ],

    [
      "13:00",
      "MKT30016",
      "Marketing Strategy and Planning",
      "Room B204",
      "Thursday"
    ],

    [
      "10:00",
      "BUS30032",
      "Business Consulting Project",
      "Room C301",
      "Friday"
    ]

  ];


  const times = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00"
  ];


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-card">

      <div class="portal-card-head">

        <h2 class="portal-card-title">
          Weekly schedule
        </h2>

        <span class="portal-badge badge-blue">
          Semester 2 · 2026
        </span>

      </div>


      <div class="portal-timetable">

        ${days
          .map(
            day =>
              `<div class="day">${day}</div>`
          )
          .join("")}


        ${times
          .map(
            time => `

              <div class="time">
                ${time}
              </div>


              ${[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ]
                .map(
                  day => {

                    const item =
                      classes.find(
                        x =>
                          x[0] === time &&
                          x[4] === day
                      );


                    if (!item) {
                      return "<div></div>";
                    }


                    return `

                      <div>

                        <div class="portal-class">

                          <strong>
                            ${item[1]}
                          </strong>

                          <span>
                            ${item[2]}
                          </span>

                          <span>
                            ${item[3]}
                          </span>

                        </div>

                      </div>

                    `;

                  }
                )
                .join("")}

            `
          )
          .join("")}

      </div>

    </section>

  `;

}


/* =========================================================
   GRADUATION
   ========================================================= */

function renderGraduation() {

  createTopbar(
    "Graduation",
    "Completion status for the Bachelor of Business programme."
  );


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-hero">

      <div class="portal-hero-grid">

        <div>

          <h2>
            Programme completed
          </h2>

          <p>
            Bachelor of Business · ${S.id}
          </p>

        </div>


        <div class="portal-hero-side">

          <strong>
            100%
          </strong>

          <span>
            COMPLETION
          </span>

        </div>

      </div>

    </section>


    <section class="portal-section portal-grid portal-grid-4">

      ${kpi(
        "Credits",
        `${TOTAL_CREDITS}/${S.totalCredits}`,
        "CP",
        "Completed"
      )}

      ${kpi(
        "Units",
        `${R.length}/${R.length}`,
        "Units",
        "Completed"
      )}

      ${kpi(
        "GPA",
        CALCULATED_GPA.toFixed(2),
        "out of 4.00",
        "Current"
      )}

      ${kpi(
        "Classification",
        "Excellent",
        "Award",
        "Bachelor of Business"
      )}

    </section>


    <section class="portal-section portal-grid portal-grid-2">


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Completion checklist
          </h2>

          <span class="portal-badge badge-green">
            Complete
          </span>

        </div>


        <div class="portal-checklist">

          ${[
            "Core units completed",
            "Business Administration major completed",
            "Elective units completed",
            "300 credit points completed",
            "Academic requirements completed"
          ]
            .map(
              item => `

                <div class="portal-check">

                  <div class="portal-check-dot">
                    ✓
                  </div>

                  <div>

                    <strong>
                      ${item}
                    </strong>

                    <span>
                      Requirement satisfied
                    </span>

                  </div>

                </div>

              `
            )
            .join("")}

        </div>

      </div>


      <div class="portal-card">

        <h2 class="portal-card-title">
          Graduation record
        </h2>


        <div class="portal-divider"></div>


        <div class="portal-statline">

          <span>
            Status
          </span>

          <strong>
            Completed
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Award
          </span>

          <strong>
            Bachelor of Business
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Classification
          </span>

          <strong>
            Excellent
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            GPA
          </span>

          <strong>
            ${CALCULATED_GPA.toFixed(2)} / 4.00
          </strong>

        </div>


        <div class="portal-divider"></div>


        <a
          class="portal-action primary"
          href="results.html"
        >
          View academic record
        </a>

      </div>

    </section>

  `;

}


/* =========================================================
   FEES
   ========================================================= */

function renderFees() {

  createTopbar(
    "Fees & Payments",
    "Student account summary and payment history."
  );


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-grid portal-grid-4">

      ${kpi(
        "Outstanding balance",
        "0 ₫",
        "Account",
        "Clear",
        "good"
      )}

      ${kpi(
        "Current status",
        "Paid",
        "Account",
        "In good standing",
        "good"
      )}

      ${kpi(
        "Academic year",
        "2026",
        "Current",
        "Study period"
      )}

      ${kpi(
        "Payment records",
        "1",
        "Transaction",
        "Recorded"
      )}

    </section>


    <section class="portal-section portal-grid portal-grid-2">


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Account status
          </h2>

          <span class="portal-badge badge-green">
            Clear
          </span>

        </div>


        <div
          style="
            font-size:34px;
            font-weight:850;
          "
        >
          0 ₫
        </div>


        <p
          style="
            color:var(--muted);
            font-size:12px;
            line-height:1.6;
          "
        >
          There is currently no outstanding
          amount on this demo student account.
        </p>

      </div>


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Payment summary
          </h2>

        </div>


        <div class="portal-statline">

          <span>
            Tuition recorded
          </span>

          <strong>
            45,000,000 ₫
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Paid
          </span>

          <strong>
            45,000,000 ₫
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Outstanding
          </span>

          <strong>
            0 ₫
          </strong>

        </div>

      </div>

    </section>


    <section class="portal-section portal-card">

      <div class="portal-card-head">

        <h2 class="portal-card-title">
          Payment history
        </h2>

      </div>


      <div class="portal-table-wrap">

        <table class="portal-table">

          <thead>

            <tr>

              <th>
                Date
              </th>

              <th>
                Description
              </th>

              <th>
                Amount
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            <tr>

              <td>
                16 May 2026
              </td>

              <td>
                Summer 2026 tuition
              </td>

              <td>
                45,000,000 ₫
              </td>

              <td>

                <span class="portal-badge badge-green">
                  Paid
                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>

  `;

}


/* =========================================================
   PROFILE
   ========================================================= */

function renderProfile() {

  createTopbar(
    "Student Profile",
    "Personal and academic information associated with your student record."
  );


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-profile">

      <div class="portal-profile-avatar">

        ${initials(S.name)}

      </div>


      <div>

        <h2>
          ${S.name}
        </h2>

        <p>
          ${S.id}
          · Bachelor of Business
          · Swinburne Vietnam
        </p>

      </div>

    </section>


    <section class="portal-section portal-grid portal-grid-2">


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Student information
          </h2>

        </div>


        <div class="portal-statline">

          <span>
            Full name
          </span>

          <strong>
            ${S.name}
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Student ID
          </span>

          <strong>
            ${S.id}
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Programme
          </span>

          <strong>
            Bachelor of Business
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Campus
          </span>

          <strong>
            Swinburne Vietnam
          </strong>

        </div>

      </div>


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Academic information
          </h2>

        </div>


        <div class="portal-statline">

          <span>
            Current GPA
          </span>

          <strong>
            ${CALCULATED_GPA.toFixed(2)} / 4.00
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Credits completed
          </span>

          <strong>
            ${TOTAL_CREDITS} / ${S.totalCredits} CP
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Units completed
          </span>

          <strong>
            ${R.length} / ${R.length}
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Classification
          </span>

          <strong>
            Excellent
          </strong>

        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   SUPPORT
   ========================================================= */

function renderSupport() {

  createTopbar(
    "Support / Queries",
    "Submit an enquiry and review your previous support requests."
  );


  const article =
    document.querySelector(
      "body.app > article"
    );


  article.innerHTML += `

    <section class="portal-section portal-grid portal-grid-2">


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Create a support enquiry
          </h2>

        </div>


        <div class="portal-field">

          <label>
            SUBJECT
          </label>

          <input
            class="portal-input"
            id="sub"
            placeholder="e.g. Graduation documentation"
          >

        </div>


        <div
          class="portal-field"
          style="margin-top:14px"
        >

          <label>
            MESSAGE
          </label>

          <textarea
            class="portal-textarea"
            id="msg"
            placeholder="Describe what you need help with…"
          ></textarea>

        </div>


        <div style="margin-top:14px">

          <button
            class="portal-action primary"
            onclick="send()"
          >
            Submit enquiry
          </button>

        </div>

      </div>


      <div class="portal-card">

        <div class="portal-card-head">

          <h2 class="portal-card-title">
            Support information
          </h2>

        </div>


        <div class="portal-note">

          <strong>
            Student support
          </strong>

          <br>

          For academic, programme or student
          administration enquiries, submit a request
          and keep your reference details for follow-up.

        </div>


        <div class="portal-divider"></div>


        <div class="portal-statline">

          <span>
            Student ID
          </span>

          <strong>
            ${S.id}
          </strong>

        </div>


        <div class="portal-statline">

          <span>
            Account
          </span>

          <strong>
            Active
          </strong>

        </div>

      </div>

    </section>


    <section class="portal-section portal-card">

      <div class="portal-card-head">

        <h2 class="portal-card-title">
          Your enquiries
        </h2>

      </div>


      <div id="tickets"></div>

    </section>

  `;


  show();

}


/* =========================================================
   SUPPORT SEND
   ========================================================= */

function send() {

  const subject =
    document.getElementById("sub");

  const message =
    document.getElementById("msg");


  if (
    !subject ||
    !message ||
    !subject.value.trim() ||
    !message.value.trim()
  ) {
    return;
  }


  const tickets =
    JSON.parse(
      localStorage.tickets || "[]"
    );


  tickets.unshift({

    s: subject.value.trim(),

    m: message.value.trim(),

    d: new Date()
      .toLocaleString()

  });


  localStorage.tickets =
    JSON.stringify(tickets);


  subject.value = "";

  message.value = "";


  show();

}


/* =========================================================
   SUPPORT LIST
   ========================================================= */

function show() {

  const element =
    document.getElementById(
      "tickets"
    );


  if (!element) {
    return;
  }


  const tickets =
    JSON.parse(
      localStorage.tickets || "[]"
    );


  if (!tickets.length) {

    element.innerHTML = `

      <div class="portal-empty">

        No support enquiries yet.

      </div>

    `;

    return;

  }


  element.innerHTML =

    tickets
      .map(
        ticket => `

          <div class="portal-list-row">

            <div class="portal-list-main">

              <div class="portal-code">
                ${ticket.s}
              </div>

              <div class="portal-name">
                ${ticket.m}
              </div>

              <div class="portal-name">
                ${ticket.d}
              </div>

            </div>


            <div class="portal-right">

              <span class="portal-badge badge-blue">
                Open
              </span>

            </div>

          </div>

        `
      )
      .join("");

}


/* =========================================================
   PAGE ROUTER
   ========================================================= */

function renderPage() {

  switch (page) {

    case "dashboard.html":
      renderDashboard();
      break;

    case "results.html":
      renderResults();
      break;

    case "courses.html":
      renderCourses();
      break;

    case "timetable.html":
      renderTimetable();
      break;

    case "graduation.html":
      renderGraduation();
      break;

    case "fees.html":
      renderFees();
      break;

    case "profile.html":
      renderProfile();
      break;

    case "support.html":
      renderSupport();
      break;

  }

}


/* =========================================================
   INITIALISE
   ========================================================= */

createSidebar();

renderPage();

createFooter();
