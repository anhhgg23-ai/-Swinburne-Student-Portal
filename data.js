const S={
  id:'SWH00779',
  name:'Nguyễn Xuân An',
  gpa:3.71,
  credits:300,
  totalCredits:300,
  progress:100,
  graduationStatus:'Completed',
  award:'Bachelor of Business',
  classification:'Excellent'
};

const R=[
  // CORE UNITS — 8 × 12.5 CP = 100 CP
  ['ECO10005','Economics for Business Decision Making','82','HD','4'],
  ['ACC10007','Financial Information for Decision Making','76','D','3'],
  ['MGT10009','Contemporary Management Principles','81','HD','4'],
  ['MKT10009','Marketing and the Consumer Experience','74','D','3'],
  ['BUS10015','Creative Mindset and Entrepreneurship','84','HD','4'],
  ['INF10024','Business Digitalisation','83','HD','4'],
  ['BUS30031','Sustainable Business Practice','78','D','3'],
  ['BUS30032','Business Consulting Project','86','HD','4'],

  // BUSINESS ADMINISTRATION MAJOR — 8 × 12.5 CP = 100 CP
  ['BUS10014','Business for Sustainability, Social Change and Impact','82','HD','4'],
  ['HRM20017','Managing Workplace Relations','81','HD','4'],
  ['MGT20007','Organisational Behaviour','77','D','3'],
  ['INF20016','Big Data Management','85','HD','4'],
  ['LAW20019','Law of Commerce','80','HD','4'],
  ['INF30015','Knowledge Management and Analytics','84','HD','4'],
  ['MGT30005','Strategic Planning','75','D','3'],
  ['PRM30001','Project Management Essentials','88','HD','4'],

  // ELECTIVES — 8 × 12.5 CP = 100 CP
  ['BUS20013','Business Professional Internship','86','HD','4'],
  ['HRM30012','Digital Management and the Future of Work','82','HD','4'],
  ['INB10002','International Business Operations','79','D','3'],
  ['SCM20003','Global Logistics and Supply Chain Management','83','HD','4'],
  ['MKT20019','Marketing Research and Analytics','85','HD','4'],
  ['STA10003','Foundation of Statistics','76','D','3'],
  ['MDA10012','Communicating with Data','81','HD','4'],
  ['MKT30016','Marketing Strategy and Planning','87','HD','4']
];

const UNIT_CREDIT=12.5;

const TOTAL_CREDITS=R.length*UNIT_CREDIT;

const GRADE_POINTS=R.reduce(
  (sum,row)=>sum+(UNIT_CREDIT*Number(row[4])),
  0
);

const CALCULATED_GPA=GRADE_POINTS/TOTAL_CREDITS;
