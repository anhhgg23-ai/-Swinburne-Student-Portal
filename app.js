/* =========================================================
   SWINBURNE STUDENT PORTAL
   PROFESSIONAL V2 — FIXED GLOBAL APP
   ========================================================= */

(function () {
  "use strict";

  /* =======================================================
     AUTH
     ======================================================= */

  if (!localStorage.auth) {
    location.href = "login.html";
    return;
  }

  /* =======================================================
     DATA
     ======================================================= */

  const STUDENT = window.S || {
    id: "SWH00779",
    name: "Nguyễn Xuân An",
    gpa: 3.71,
    credits: 300,
    totalCredits: 300,
    progress: 100,
    graduationStatus: "Completed",
    award: "Bachelor of Business",
    classification: "Excellent"
  };

  const RESULTS = Array.isArray(window.R)
    ? window.R
    : [
        ["ECO10005","Economics for Business Decision Making","82","HD","4"],
        ["ACC10007","Financial Information for Decision Making","76","D","3"],
        ["MGT10009","Contemporary Management Principles","81","HD","4"],
        ["MKT10009","Marketing and the Consumer Experience","74","D","3"],
        ["BUS10015","Creative Mindset and Entrepreneurship","84","HD","4"],
        ["INF10024","Business Digitalisation","83","HD","4"],
        ["BUS30031","Sustainable Business Practice","78","D","3"],
        ["BUS30032","Business Consulting Project","86","HD","4"],
        ["BUS10014","Business for Sustainability, Social Change and Impact","82","HD","4"],
        ["HRM20017","Managing Workplace Relations","81","HD","4"],
        ["MGT20007","Organisational Behaviour","77","D","3"],
        ["INF20016","Big Data Management","85","HD","4"],
        ["LAW20019","Law of Commerce","80","HD","4"],
        ["INF30015","Knowledge Management and Analytics","84","HD","4"],
        ["MGT30005","Strategic Planning","75","D","3"],
        ["PRM30001","Project Management Essentials","88","HD","4"],
        ["BUS20013","Business Professional Internship","86","HD","4"],
        ["HRM30012","Digital Management and the Future of Work","82","HD","4"],
        ["INB10002","International Business Operations","79","D","3"],
        ["SCM20003","Global Logistics and Supply Chain Management","83","HD","4"],
        ["MKT20019","Marketing Research and Analytics","85","HD","4"],
        ["STA10003","Foundation of Statistics","76","D","3"],
        ["MDA10012","Communicating with Data","81","HD","4"],
        ["MKT30016","Marketing Strategy and Planning","87","HD","4"]
      ];

  const UNIT_CREDIT = 12.5;
  const TOTAL_CREDITS = RESULTS.length * UNIT_CREDIT;

  const GRADE_POINTS = RESULTS.reduce(
    (sum, row) => sum + UNIT_CREDIT * Number(row[4]),
    0
  );

  const GPA = GRADE_POINTS / TOTAL_CREDITS;

  const page =
    location.pathname.split("/").pop() || "dashboard.html";


  /* =======================================================
     ICONS
     ======================================================= */

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


  /* =======================================================
     NAVIGATION
     ======================================================= */

  const navigation = [
    ["dashboard.html", "Dashboard", "dashboard"],
    ["results.html", "Academic Results", "results"],
    ["courses.html", "Courses", "courses"],
    ["timetable.html", "Timetable", "timetable"],
    ["graduation.html", "Graduation", "graduation"],
    ["fees.html", "Fees & Payments", "fees"],
    ["profile.html", "Student Profile", "profile"],
    ["support.html", "Support / Queries", "support"]
  ];


  /* =======================================================
     HELPERS
     ======================================================= */

  function initials(name) {
    return String(name || "NA")
      .trim()
      .split(/\s+/)
      .slice(-2)
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase();
  }


  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function currentContent() {

    let content =
      document.querySelector(".portal-content");

    if (!content) {

      const main =
        document.querySelector(".portal-main") ||
        document.querySelector("main");

      if (main) {

        content =
          main.querySelector("article") ||
          document.createElement("article");

        content.className =
          "portal-content";

        if (!content.parentElement) {
          main.appendChild(content);
        }

      } else {

        const main =
          document.createElement("main");

        main.className =
          "portal-main";

        content =
          document.createElement("article");

        content.className =
          "portal-content";

        main.appendChild(content);

        document.body.appendChild(main);
      }
    }

    return content;
  }


  /* =======================================================
     NORMALISE PAGE STRUCTURE
     ======================================================= */

  function prepareLayout() {

    document.body.classList.add("app");

    /*
      Remove old sidebar generated by previous versions.
    */

    document
      .querySelectorAll("body > aside")
      .forEach(el => el.remove());

    /*
      Remove old static footer.
    */

    document
      .querySelectorAll(
        "body > footer:not(.portal-footer)"
      )
      .forEach(el => el.remove());

    /*
      Make sure the main content uses V2 structure.
    */

    let main =
      document.querySelector(".portal-main");

    if (!main) {

      const oldMain =
        document.querySelector("main");

      if (oldMain) {

        main = oldMain;

        main.classList.add(
          "portal-main"
        );

      } else {

        main =
          document.createElement("main");

        main.className =
          "portal-main";

        document.body.appendChild(main);
      }
    }

    let content =
      main.querySelector(".portal-content");

    if (!content) {

      const oldArticle =
        main.querySelector("article");

      if (oldArticle) {

        content = oldArticle;

        content.className =
          "portal-content";

      } else {

        content =
          document.createElement("article");

        content.className =
          "portal-content";

        main.appendChild(content);
      }
    }

    /*
      Important:
      clear old static HTML so V2 JS controls the page.
    */

    content.innerHTML = "";

    return content;
  }


  /* =======================================================
     SIDEBAR
     ======================================================= */

  function createSidebar() {

    const aside =
      document.createElement("aside");

    aside.className =
      "portal-sidebar";

    const overview =
      navigation.slice(0, 1);

    const academics =
      navigation.slice(1, 5);

    const account =
      navigation.slice(5);

    function links(items) {

      return items.map(item => {

        const active =
          page === item[0]
            ? "active"
            : "";

        return `
          <a
            class="${active}"
            href="${item[0]}"
          >
            ${icons[item[2]]}
            <span>${item[1]}</span>
          </a>
        `;

      }).join("");
    }


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
        ${links(overview)}
      </nav>


      <div class="portal-section-label">
        Academics
      </div>

      <nav class="portal-nav">
        ${links(academics)}
      </nav>


      <div class="portal-section-label">
        Account
      </div>

      <nav class="portal-nav">
        ${links(account)}
      </nav>


      <div class="portal-user">

        <div class="portal-user-name">
          ${escapeHTML(STUDENT.name)}
        </div>

        <div class="portal-user-id">
          ${escapeHTML(STUDENT.id)}
          · Bachelor of Business
        </div>

        <button
          class="portal-logout"
          type="button"
          id="portalLogout"
        >
          Log out
        </button>

      </div>
    `;


    document.body.prepend(aside);


    const logout =
      document.getElementById(
        "portalLogout"
      );

    if (logout) {

      logout.addEventListener(
        "click",
        function () {

          localStorage.removeItem("auth");

          location.href =
            "login.html";

        }
      );

    }

  }


  /* =======================================================
     TOP BAR
     ======================================================= */

  function createTopbar(
    title,
    subtitle
  ) {

    const content =
      currentContent();

    const today =
      new Date().toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }
      );


    const bar =
      document.createElement("div");

    bar.className =
      "portal-topbar";

    bar.innerHTML = `

      <div>

        <div class="portal-eyebrow">
          SWINBURNE VIETNAM · STUDENT PORTAL
        </div>

        <h1 class="portal-title">
          ${escapeHTML(title)}
        </h1>

        <p class="portal-subtitle">
          ${escapeHTML(subtitle || "")}
        </p>

      </div>


      <div class="portal-top-actions">

        <div class="portal-date">
          ${today}
        </div>

        <div class="portal-avatar">
          ${initials(STUDENT.name)}
        </div>

      </div>
    `;

    content.appendChild(bar);
  }


  /* =======================================================
     FOOTER
     ======================================================= */

  function createFooter() {

    if (
      document.querySelector(
        ".portal-footer"
      )
    ) return;


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
              <h4>Cơ sở Hà Nội</h4>
              <p>
                Số 80 Duy Tân,
                Phường Cầu Giấy,
                TP. Hà Nội
              </p>
              <p>0939 403 555</p>
            </div>


            <div>
              <h4>Cơ sở Đà Nẵng</h4>
              <p>
                Lô 1+2-A14-16
                Khu Công Viên Bắc đài tưởng niệm,
                đường 2 tháng 9,
                Phường Hòa Cường,
                Đà Nẵng
              </p>
              <p>0798 210 555</p>
            </div>


            <div>
              <h4>Cơ sở HCM</h4>
              <p>
                A35 Bạch Đằng,
                Phường Tân Sơn Hòa,
                TP. Hồ Chí Minh
              </p>
              <p>0387 148 555</p>
            </div>


            <div>
              <h4>Cơ sở Cần Thơ</h4>
              <p>
                Số 600 Nguyễn Văn Cừ,
                Phường An Bình,
                TP. Cần Thơ
              </p>
              <p>0348 766 555</p>
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


  /* =======================================================
     COMPONENTS
     ======================================================= */

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


  function cardHead(
    title,
    action = ""
  ) {

    return `

      <div class="portal-card-head">

        <h2 class="portal-card-title">
          ${title}
        </h2>

        ${action}

      </div>
    `;
  }


  /* =======================================================
     DASHBOARD
     ======================================================= */

  function renderDashboard() {

    const content =
      currentContent();

    createTopbar(
      "Dashboard",
      `Welcome back, ${STUDENT.name}. Here is your current academic overview.`
    );


    content.insertAdjacentHTML(
      "beforeend",
      `

      <section class="portal-hero">

        <div class="portal-hero-grid">

          <div>

            <h2>
              Academic journey completed
            </h2>

            <p>
              ${STUDENT.id}
              · Bachelor of Business
              · Swinburne Vietnam
            </p>

          </div>


          <div class="portal-hero-side">

            <strong>
              ${STUDENT.progress}%
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
          GPA.toFixed(2),
          "4.00",
          "Excellent academic standing"
        )}

        ${kpi(
          "Credits completed",
          `${TOTAL_CREDITS} / ${STUDENT.totalCredits} CP`,
          "100%",
          "All required credit points"
        )}

        ${kpi(
          "Units completed",
          `${RESULTS.length} / ${RESULTS.length}`,
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

          ${cardHead(
            "Academic performance",
            `<span class="portal-badge badge-green">Excellent</span>`
          )}

          <div style="
            font-size:38px;
            font-weight:850;
            letter-spacing:-1.5px;
          ">
            ${GPA.toFixed(2)}

            <span style="
              font-size:14px;
              color:var(--muted);
              font-weight:650;
            ">
              / 4.00
            </span>
          </div>

          <div
            class="portal-progress"
            style="margin-top:20px"
          >
            <span
              style="
                width:${Math.min(100, GPA / 4 * 100)}%;
              "
            ></span>
          </div>

          <div class="portal-statline">
            <span>Academic standing</span>
            <strong>Excellent</strong>
          </div>

        </div>


        <div class="portal-card">

          ${cardHead(
            "Graduation progress",
            `<a class="portal-action" href="graduation.html">
              View details
            </a>`
          )}

          <div style="
            font-size:25px;
            font-weight:850;
          ">
            ${TOTAL_CREDITS}

            <span style="
              font-size:13px;
              color:var(--muted);
            ">
              / ${STUDENT.totalCredits} CP
            </span>
          </div>

          <div
            class="portal-progress"
            style="margin-top:17px"
          >
            <span style="width:100%"></span>
          </div>

          <div class="portal-statline">
            <span>${RESULTS.length} of ${RESULTS.length} units</span>
            <strong>Completed</strong>
          </div>

        </div>

      </section>


      <section class="portal-section portal-grid portal-grid-2">

        <div class="portal-card">

          ${cardHead(
            "Recent academic results",
            `<a class="portal-action" href="results.html">
              View transcript
            </a>`
          )}

          <div class="portal-list">

            ${RESULTS
              .slice(-5)
              .reverse()
              .map(row => `

                <div class="portal-list-row">

                  <div class="portal-list-main">

                    <div class="portal-code">
                      ${row[0]}
                    </div>

                    <div class="portal-name">
                      ${row[1]}
                    </div>

                  </div>


                  <div class="portal-right">

                    <div class="portal-mark">
                      ${row[2]}
                    </div>

                    <span class="
                      portal-badge
                      ${row[3] === "HD"
                        ? "badge-green"
                        : "badge-blue"}
                    ">
                      ${row[3]}
                    </span>

                  </div>

                </div>

              `)
              .join("")}

          </div>

        </div>


        <div class="portal-card">

          ${cardHead("Quick actions")}

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

            <strong>Student record</strong>

            <br>

            All ${RESULTS.length} units are recorded as completed.
            Your current GPA is ${GPA.toFixed(2)}.

          </div>

        </div>

      </section>
      `
    );
  }


  /* =======================================================
     RESULTS
     ======================================================= */

  function renderResults() {

    const content =
      currentContent();

    createTopbar(
      "Academic Results",
      "Complete academic transcript and grade history."
    );


    content.insertAdjacentHTML(
      "beforeend",
      `

      <section class="portal-section">

        <div class="portal-card">

          ${cardHead(
            "Academic transcript",
            `<button
              class="portal-action primary"
              id="printResults"
              type="button"
            >
              Print transcript
            </button>`
          )}


          <div class="portal-grid portal-grid-4">

            ${kpi(
              "GPA",
              GPA.toFixed(2),
              "4.00",
              "Scale"
            )}

            ${kpi(
              "Credit points",
              TOTAL_CREDITS,
              "300",
              "Required"
            )}

            ${kpi(
              "Units",
              RESULTS.length,
              RESULTS.length,
              "Completed"
            )}

            ${kpi(
              "Classification",
              "Excellent",
              "Award",
              "Bachelor of Business"
            )}

          </div>


          <div style="
            display:flex;
            gap:12px;
            flex-wrap:wrap;
            margin:28px 0 18px;
          ">

            <input
              id="resultSearch"
              type="search"
              placeholder="Search by unit code or unit name..."
              style="
                flex:1;
                min-width:240px;
                padding:13px 15px;
                border:1px solid var(--border);
                border-radius:10px;
                font:inherit;
                background:#fff;
              "
            >

            <select
              id="gradeFilter"
              style="
                padding:13px 15px;
                border:1px solid var(--border);
                border-radius:10px;
                font:inherit;
                background:#fff;
              "
            >
              <option value="ALL">All grades</option>
              <option value="HD">HD</option>
              <option value="D">D</option>
              <option value="C">C</option>
              <option value="P">P</option>
              <option value="CP">CP</option>
            </select>

          </div>


          <div style="overflow-x:auto">

            <table class="portal-table">

              <thead>

                <tr>
                  <th>Unit code</th>
                  <th>Unit name</th>
                  <th>Mark</th>
                  <th>Grade</th>
                  <th>GPA</th>
                  <th>Credit</th>
                </tr>

              </thead>

              <tbody id="resultsBody"></tbody>

            </table>

          </div>

        </div>

      </section>
      `
    );


    function drawResults() {

      const search =
        (
          document.getElementById(
            "resultSearch"
          )?.value || ""
        )
        .trim()
        .toLowerCase();

      const filter =
        document.getElementById(
          "gradeFilter"
        )?.value || "ALL";


      const rows =
        RESULTS.filter(row => {

          const matchesSearch =
            !search ||
            row[0].toLowerCase().includes(search) ||
            row[1].toLowerCase().includes(search);

          const matchesGrade =
            filter === "ALL" ||
            row[3] === filter;

          return (
            matchesSearch &&
            matchesGrade
          );

        });


      const tbody =
        document.getElementById(
          "resultsBody"
        );

      if (!tbody) return;


      tbody.innerHTML =
        rows.map(row => `

          <tr>

            <td>
              <strong>${row[0]}</strong>
            </td>

            <td>
              ${row[1]}
            </td>

            <td>
              <strong>${row[2]}</strong>
            </td>

            <td>
              <span class="
                portal-badge
                ${row[3] === "HD"
                  ? "badge-green"
                  : "badge-blue"}
              ">
                ${row[3]}
              </span>
            </td>

            <td>
              ${row[4]}
            </td>

            <td>
              ${UNIT_CREDIT} CP
            </td>

          </tr>

        `).join("");


      if (!rows.length) {

        tbody.innerHTML = `

          <tr>
            <td
              colspan="6"
              style="
                text-align:center;
                padding:35px;
                color:var(--muted);
              "
            >
              No results found.
            </td>
          </tr>

        `;

      }

    }


    drawResults();


    document
      .getElementById("resultSearch")
      ?.addEventListener(
        "input",
        drawResults
      );


    document
      .getElementById("gradeFilter")
      ?.addEventListener(
        "change",
        drawResults
      );


    document
      .getElementById("printResults")
      ?.addEventListener(
        "click",
        () => window.print()
      );

  }


  /* =======================================================
     COURSES
     ======================================================= */

  function renderCourses() {

    const content =
      currentContent();

    createTopbar(
      "Courses",
      "Bachelor of Business — Business Administration."
    );


    const core = [
      ["ECO10005","Economics for Business Decision Making"],
      ["ACC10007","Financial Information for Decision Making"],
      ["MGT10009","Contemporary Management Principles"],
      ["MKT10009","Marketing and the Consumer Experience"],
      ["BUS10015","Creative Mindset and Entrepreneurship"],
      ["INF10024","Business Digitalisation"],
      ["BUS30031","Sustainable Business Practice"],
      ["BUS30032","Business Consulting Project"]
    ];

    const major = [
      ["BUS10014","Business for Sustainability, Social Change and Impact"],
      ["HRM20017","Managing Workplace Relations"],
      ["MGT20007","Organisational Behaviour"],
      ["INF20016","Big Data Management"],
      ["LAW20019","Law of Commerce"],
      ["INF30015","Knowledge Management and Analytics"],
      ["MGT30005","Strategic Planning"],
      ["PRM30001","Project Management Essentials"]
    ];

    const electives = [
      ["BUS20013","Business Professional Internship"],
      ["HRM30012","Digital Management and the Future of Work"],
      ["INB10002","International Business Operations"],
      ["SCM20003","Global Logistics and Supply Chain Management"],
      ["MKT20019","Marketing Research and Analytics"],
      ["STA10003","Foundation of Statistics"],
      ["MDA10012","Communicating with Data"],
      ["MKT30016","Marketing Strategy and Planning"]
    ];


    function courseSection(
      title,
      subtitle,
      list
    ) {

      return `

        <section class="portal-section">

          <div class="portal-card">

            ${cardHead(
              title,
              `<span class="portal-badge badge-blue">
                ${list.length} units
              </span>`
            )}

            <p style="
              color:var(--muted);
              margin-top:-6px;
              margin-bottom:20px;
            ">
              ${subtitle}
            </p>


            <div class="portal-list">

              ${list.map((course, index) => `

                <div class="portal-list-row">

                  <div class="portal-list-main">

                    <div class="portal-code">
                      ${course[0]}
                    </div>

                    <div class="portal-name">
                      ${course[1]}
                    </div>

                  </div>

                  <div class="portal-right">

                    <span class="portal-badge badge-green">
                      Completed
                    </span>

                    <span style="
                      color:var(--muted);
                      font-size:13px;
                    ">
                      ${UNIT_CREDIT} CP
                    </span>

                  </div>

                </div>

              `).join("")}

            </div>

          </div>

        </section>
      `;
    }


    content.insertAdjacentHTML(
      "beforeend",
      `

      ${courseSection(
        "Core units",
        "Core units required for the Bachelor of Business.",
        core
      )}

      ${courseSection(
        "Business Administration major",
        "Units forming the Business Administration major.",
        major
      )}

      ${courseSection(
        "Elective units",
        "Selected elective units within the programme.",
        electives
      )}

      `
    );

  }


  /* =======================================================
     TIMETABLE
     ======================================================= */

  function renderTimetable() {

    const content =
      currentContent();

    createTopbar(
      "Timetable",
      "Academic timetable and scheduled learning activities."
    );


    const schedule = [
      ["Monday","08:00 – 10:00","MKT30016","Marketing Strategy and Planning","Room A201"],
      ["Tuesday","10:00 – 12:00","MGT30005","Strategic Planning","Room B204"],
      ["Wednesday","13:00 – 15:00","INF30015","Knowledge Management and Analytics","Room C102"],
      ["Thursday","09:00 – 11:00","PRM30001","Project Management Essentials","Room A305"],
      ["Friday","13:00 – 15:00","BUS30032","Business Consulting Project","Room B101"]
    ];


    content.insertAdjacentHTML(
      "beforeend",
      `

      <section class="portal-section">

        <div class="portal-card">

          ${cardHead(
            "Weekly timetable",
            `<span class="portal-badge badge-green">
              Current semester
            </span>`
          )}

          <div style="overflow-x:auto">

            <table class="portal-table">

              <thead>

                <tr>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Unit</th>
                  <th>Activity</th>
                  <th>Location</th>
                </tr>

              </thead>

              <tbody>

                ${schedule.map(item => `

                  <tr>

                    <td>
                      <strong>${item[0]}</strong>
                    </td>

                    <td>
                      ${item[1]}
                    </td>

                    <td>
                      <strong>${item[2]}</strong>
                    </td>

                    <td>
                      ${item[3]}
                    </td>

                    <td>
                      ${item[4]}
                    </td>

                  </tr>

                `).join("")}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      `
    );

  }


  /* =======================================================
     GRADUATION
     ======================================================= */

  function renderGraduation() {

    const content =
      currentContent();

    createTopbar(
      "Graduation",
      "Track your programme completion and graduation status."
    );


    content.insertAdjacentHTML(
      "beforeend",
      `

      <section class="portal-hero">

        <div class="portal-hero-grid">

          <div>

            <h2>
              Graduation requirements completed
            </h2>

            <p>
              Your academic record shows completion
              of all required programme credit points.
            </p>

          </div>

          <div class="portal-hero-side">

            <strong>100%</strong>

            <span>
              COMPLETE
            </span>

          </div>

        </div>

      </section>


      <section class="portal-section portal-grid portal-grid-2">

        <div class="portal-card">

          ${cardHead(
            "Programme completion",
            `<span class="portal-badge badge-green">
              Completed
            </span>`
          )}

          <div style="
            font-size:42px;
            font-weight:850;
          ">
            ${TOTAL_CREDITS}
            <span style="
              font-size:14px;
              color:var(--muted);
            ">
              / ${STUDENT.totalCredits} CP
            </span>
          </div>

          <div
            class="portal-progress"
            style="margin-top:20px"
          >
            <span style="width:100%"></span>
          </div>

          <div class="portal-statline">
            <span>Credit completion</span>
            <strong>100%</strong>
          </div>

        </div>


        <div class="portal-card">

          ${cardHead(
            "Academic classification"
          )}

          <div style="
            font-size:32px;
            font-weight:850;
          ">
            Excellent
          </div>

          <p style="
            color:var(--muted);
            margin-top:10px;
          ">
            Current calculated GPA:
            <strong>${GPA.toFixed(2)} / 4.00</strong>
          </p>

        </div>

      </section>


      <section class="portal-section">

        <div class="portal-card">

          ${cardHead(
            "Graduation checklist"
          )}

          <div class="portal-checklist">

            <div>
              ✓
              <span>
                All programme units completed
              </span>
            </div>

            <div>
              ✓
              <span>
                ${TOTAL_CREDITS} credit points completed
              </span>
            </div>

            <div>
              ✓
              <span>
                Academic requirements completed
              </span>
            </div>

            <div>
              ✓
              <span>
                Academic classification recorded
              </span>
            </div>

          </div>

        </div>

      </section>

      `
    );

  }


  /* =======================================================
     FEES
     ======================================================= */

  function renderFees() {

    const content =
      currentContent();

    createTopbar(
      "Fees & Payments",
      "View your student account balance and payment status."
    );


    content.insertAdjacentHTML(
      "beforeend",
      `

      <section class="portal-section portal-grid portal-grid-3">

        ${kpi(
          "Account balance",
          "0 ₫",
          "Paid",
          "No outstanding balance",
          "good"
        )}

        ${kpi(
          "Programme status",
          "Completed",
          "300 CP",
          "Credit requirement met"
        )}

        ${kpi(
          "Payment status",
          "Clear",
          "Current",
          "Student account"
        )}

      </section>


      <section class="portal-section">

        <div class="portal-card">

          ${cardHead(
            "Payment history"
          )}

          <div style="overflow-x:auto">

            <table class="portal-table">

              <thead>

                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>2026</td>
                  <td>Tuition and programme fees</td>
                  <td>Paid</td>
                  <td>
                    <span class="portal-badge badge-green">
                      Paid
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>2026</td>
                  <td>Student account</td>
                  <td>0 ₫ outstanding</td>
                  <td>
                    <span class="portal-badge badge-green">
                      Clear
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      `
    );

  }


  /* =======================================================
     PROFILE
     ======================================================= */

  function renderProfile() {

    const content =
      currentContent();

    createTopbar(
      "Student Profile",
      "Personal and academic information."
    );


    content.insertAdjacentHTML(
      "beforeend",
      `

      <section class="portal-section">

        <div class="portal-card portal-profile">

          <div style="
            display:flex;
            align-items:center;
            gap:20px;
            flex-wrap:wrap;
          ">

            <div class="portal-avatar" style="
              width:72px;
              height:72px;
              font-size:22px;
            ">
              ${initials(STUDENT.name)}
            </div>

            <div>

              <h2 style="
                margin:0;
                font-size:27px;
              ">
                ${escapeHTML(STUDENT.name)}
              </h2>

              <p style="
                margin:6px 0 0;
                color:var(--muted);
              ">
                ${STUDENT.id}
                · Bachelor of Business
              </p>

            </div>

          </div>


          <div
            class="portal-grid portal-grid-2"
            style="margin-top:30px"
          >

            <div>

              <div class="portal-statline">
                <span>Student ID</span>
                <strong>${STUDENT.id}</strong>
              </div>

              <div class="portal-statline">
                <span>Name</span>
                <strong>${STUDENT.name}</strong>
              </div>

              <div class="portal-statline">
                <span>Programme</span>
                <strong>Bachelor of Business</strong>
              </div>

            </div>


            <div>

              <div class="portal-statline">
                <span>Major</span>
                <strong>Business Administration</strong>
              </div>

              <div class="portal-statline">
                <span>GPA</span>
                <strong>${GPA.toFixed(2)} / 4.00</strong>
              </div>

              <div class="portal-statline">
                <span>Status</span>
                <strong>Completed</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      `
    );

  }


  /* =======================================================
     SUPPORT
     ======================================================= */

  function renderSupport() {

    const content =
      currentContent();

    createTopbar(
      "Support / Queries",
      "Submit a question or request to student support."
    );


    content.insertAdjacentHTML(
      "beforeend",
      `

      <section class="portal-section portal-grid portal-grid-2">

        <div class="portal-card">

          ${cardHead(
            "Submit a query"
          )}

          <form id="supportForm">

            <label style="
              display:block;
              margin-bottom:7px;
              font-weight:700;
            ">
              Subject
            </label>

            <input
              id="supportSubject"
              required
              type="text"
              placeholder="Enter your subject"
              style="
                width:100%;
                padding:13px 15px;
                border:1px solid var(--border);
                border-radius:10px;
                font:inherit;
                margin-bottom:18px;
              "
            >


            <label style="
              display:block;
              margin-bottom:7px;
              font-weight:700;
            ">
              Message
            </label>

            <textarea
              id="supportMessage"
              required
              rows="7"
              placeholder="Describe your question..."
              style="
                width:100%;
                padding:13px 15px;
                border:1px solid var(--border);
                border-radius:10px;
                font:inherit;
                resize:vertical;
                margin-bottom:18px;
              "
            ></textarea>


            <button
              class="portal-action primary"
              type="submit"
            >
              Submit query
            </button>

          </form>

        </div>


        <div class="portal-card">

          ${cardHead(
            "Student support"
          )}

          <div class="portal-list">

            <div class="portal-list-row">

              <div class="portal-list-main">

                <div class="portal-code">
                  Academic
                </div>

                <div class="portal-name">
                  Questions about results,
                  courses and graduation.
                </div>

              </div>

            </div>


            <div class="portal-list-row">

              <div class="portal-list-main">

                <div class="portal-code">
                  Finance
                </div>

                <div class="portal-name">
                  Questions about fees
                  and student payments.
                </div>

              </div>

            </div>


            <div class="portal-list-row">

              <div class="portal-list-main">

                <div class="portal-code">
                  Student services
                </div>

                <div class="portal-name">
                  General student enquiries
                  and administrative support.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      `
    );


    document
      .getElementById("supportForm")
      ?.addEventListener(
        "submit",
        function (event) {

          event.preventDefault();

          alert(
            "Your query has been submitted successfully."
          );

          this.reset();

        }
      );

  }


  /* =======================================================
     ROUTER
     ======================================================= */

  function renderPage() {

    switch (page) {

      case "dashboard.html":
      case "":
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

      default:
        renderDashboard();
        break;
    }

  }


  /* =======================================================
     INIT
     ======================================================= */

  function init() {

    prepareLayout();

    createSidebar();

    renderPage();

    createFooter();

  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
