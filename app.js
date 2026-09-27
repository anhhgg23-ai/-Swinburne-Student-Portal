/* =========================================================
   SWINBURNE STUDENT PORTAL
   GLOBAL APP SCRIPT
   ========================================================= */


/* =========================================================
   AUTH
   ========================================================= */

if (!localStorage.auth) {
  location = "login.html";
}


/* =========================================================
   ACADEMIC RESULTS
   ========================================================= */

function draw() {

  const q =
    (document.getElementById("q")?.value || "")
      .toLowerCase()
      .trim();

  const table =
    document.getElementById("t");

  if (!table || typeof R === "undefined") {
    return;
  }

  const rows =
    R.filter((row) =>
      (row[0] + " " + row[1])
        .toLowerCase()
        .includes(q)
    );

  table.innerHTML = `
    <tr>
      <th>Code</th>
      <th>Unit</th>
      <th>Mark</th>
      <th>Grade</th>
      <th>GPA</th>
    </tr>
    ${
      rows.map((row) => `
        <tr>
          ${row.map((value) => `<td>${value}</td>`).join("")}
        </tr>
      `).join("")
    }
  `;
}


/* =========================================================
   SUPPORT / QUERIES
   ========================================================= */

function send() {

  const subject =
    document.getElementById("sub");

  const message =
    document.getElementById("msg");

  if (!subject || !message) {
    return;
  }

  if (!subject.value.trim() ||
      !message.value.trim()) {
    return;
  }

  const tickets =
    JSON.parse(
      localStorage.tickets || "[]"
    );

  tickets.unshift({
    s: subject.value.trim(),
    m: message.value.trim(),
    d: new Date().toLocaleString()
  });

  localStorage.tickets =
    JSON.stringify(tickets);

  subject.value = "";
  message.value = "";

  show();
}


function show() {

  const tickets =
    JSON.parse(
      localStorage.tickets || "[]"
    );

  const element =
    document.getElementById("tickets");

  if (!element) {
    return;
  }

  element.innerHTML =
    tickets.map((ticket) => `
      <div class="panel">
        <b>${ticket.s}</b>
        <p>${ticket.m}</p>
        <small>
          ${ticket.d} · Open
        </small>
      </div>
    `).join("");
}


/* =========================================================
   REMOVE OLD FOOTER
   ========================================================= */

function removeOldFooter() {

  document
    .querySelectorAll(
      "body footer:not(.portal-footer)"
    )
    .forEach((footer) => {
      footer.remove();
    });
}


/* =========================================================
   SWINBURNE PORTAL FOOTER
   ========================================================= */

function createPortalFooter() {

  if (!document.body.classList.contains("app")) {
    return;
  }

  /*
   * Remove the old
   * "Academic Project · Not an official university system."
   * footer from existing pages.
   */

  removeOldFooter();

  /*
   * Prevent duplicates.
   */

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


      <!-- =================================================
           TOP FOOTER
           ================================================= -->

      <div class="portal-footer-top">


        <!-- BRAND -->

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


        <!-- SWINBURNE VIETNAM -->

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


        <!-- ADMISSIONS -->

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


        <!-- STUDENT PORTAL -->

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


      <!-- =================================================
           CAMPUS CONTACTS
           ================================================= -->

      <div class="portal-footer-campus">

        <div class="portal-footer-campus-title">
          Liên hệ với Swinburne Vietnam Alliance Program
        </div>


        <div class="portal-footer-campus-grid">


          <!-- HANOI -->

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


          <!-- DA NANG -->

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


          <!-- HO CHI MINH -->

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


          <!-- CAN THO -->

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


      <!-- =================================================
           BOTTOM
           ================================================= -->

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


  document.body.appendChild(footer);
}


/* =========================================================
   INITIALISE
   ========================================================= */

draw();

show();

createPortalFooter();
