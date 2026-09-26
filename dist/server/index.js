// server/seed.json
var seed_default = [
  {
    kind: "projects",
    id: "project_101",
    data: {
      title: "HR Employee Attrition Analysis",
      category: "data-ml",
      lead: "From employee patterns to workforce decisions.",
      description: "Analyzed 1,470 IBM HR records to identify attrition drivers and score employee risk. A logistic regression model achieved 77.7% accuracy and 0.81 ROC-AUC on held-out test data, with risk-scored exports and a Power BI dashboard build guide.",
      tags: "Python, Power BI (DAX), Scikit-learn",
      image: "assets/projects/hr-dashboard.png",
      link: "https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis",
      caseUrl: "case-studies/hr-attrition.html",
      html: '<article class="card project-card featured-project" id="project_101" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/hr-attrition.html"><img loading="lazy" src="assets/projects/hr-dashboard.png" alt="HR Employee Attrition Analysis project output"></a><div class="project-meta"><span>FEATURED \xB7 DATA ANALYTICS</span><span>01 /</span></div>\r\n          <h3>HR Employee Attrition Analysis</h3><p class="project-lead">From employee patterns to workforce decisions.</p><p class="muted">Analyzed 1,470 IBM HR records to identify attrition drivers and score employee risk. A logistic regression model achieved 77.7% accuracy and 0.81 ROC-AUC on held-out test data, with risk-scored exports and a Power BI dashboard build guide.</p>\r\n          <dl class="project-highlights"><div><dt>employee records</dt><dd>1,470</dd></div><div><dt>test ROC-AUC</dt><dd>0.81</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Power BI (DAX)</span><span class="tag">Scikit-learn</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/hr-attrition.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_101" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>',
      caseText: "The problem\n\nExplore where employee attrition is concentrated and turn that analysis into questions HR can investigate.\n\nDataset\n\n1,470 IBM HR sample records covering job roles, overtime, tenure, income and attrition. This is an educational sample, not a live employer dataset.\n\nMy contribution\n\nBuilt the Python exploration, visual analysis, logistic regression workflow, risk-scored exports and Power BI report.\n\nApproach\n\nValidate records and remove constant/ID fields; compare attrition across segments; one-hot encode categories; use a stratified 75/25 split and standardize the training data; fit class-balanced logistic regression.\n\nResults\n\nThe saved project reports 77.7% held-out accuracy and 0.81 ROC-AUC. Existing analyses show higher observed attrition among overtime workers. The screenshot below is the actual Power BI report with Sales selected: its 446 employees are a filtered subset, not the full dataset.\n\nLimitations\n\nAssociations do not establish why people leave. Model scores are not employment decisions. Results need external validation and subgroup evaluation; retention recommendations have not been tested for causal impact."
    },
    position: 0,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_202",
    data: {
      title: "Loan Default & Credit Risk Analysis",
      category: "data-ml",
      lead: "Making risk easier to understand.",
      description: "Analyzed 32,000+ loan applications using Logistic Regression, Random Forest and Gradient Boosting. Achieved 80.6% accuracy and 0.876 ROC-AUC, with model comparisons and a Tableau dashboard.",
      tags: "Python, Logistic Regression, Tableau",
      image: "assets/projects/credit-dashboard.png",
      link: "https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-",
      caseUrl: "case-studies/credit-risk.html",
      html: '<article class="card project-card" id="project_202" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/credit-risk.html"><img loading="lazy" src="assets/projects/credit-dashboard.png" alt="Loan Default &amp; Credit Risk Analysis project output"></a><div class="project-meta"><span>MACHINE LEARNING</span><span>02 /</span></div>\r\n          <h3>Loan Default &amp; Credit Risk Analysis</h3><p class="project-lead">Making risk easier to understand.</p><p class="muted">Analyzed 32,000+ loan applications using Logistic Regression, Random Forest and Gradient Boosting. Achieved 80.6% accuracy and 0.876 ROC-AUC, with model comparisons and a Tableau dashboard.</p>\r\n          <dl class="project-highlights"><div><dt>loan applications</dt><dd>32k+</dd></div><div><dt>ROC-AUC</dt><dd>0.876</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Logistic Regression</span><span class="tag">Tableau</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/credit-risk.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_202" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>',
      caseText: "The problem\n\nExplore loan default patterns and demonstrate how a simulated lender could review risk alongside approval volume.\n\nDataset\n\n32,581 raw credit-risk records; the saved cleaning pipeline produces 32,409 records after duplicates and invalid records are removed. This project is an educational simulation, not a deployed lending service.\n\nMy contribution\n\nBuilt data-quality checks, exploratory analysis, engineered features, logistic regression, risk tiers and decision rules, with a Tableau reporting workflow and challenger-model comparisons.\n\nApproach\n\nClean and impute inputs; engineer loan-to-income and other features; split data 80/20 with stratification; fit a standardized, class-balanced logistic regression baseline. Compare Random Forest and Gradient Boosting separately.\n\nResults\n\nThe saved baseline results report 80.58% accuracy, 78.77% recall and 0.8757 ROC-AUC. These are logistic-regression results, not XGBoost results. The Tableau screenshot shows the saved 32,409-record portfolio and its simulated approval rules.\n\nLimitations\n\nImputation happens before the split in the existing workflow, which can leak distribution information. Reported model performance should be treated as provisional until preprocessing is fit on training data only. Scores and approval thresholds are illustrative; currency formatting in the dashboard does not establish dataset currency."
    },
    position: 1,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_303",
    data: {
      title: "MediVault",
      category: "software-iot",
      lead: "Decentralized medical records.",
      description: "Designed an Ethereum-based medical records system with IPFS storage for tamper-resistant access. Authored an accompanying research paper with a WannaCry-based case study.",
      tags: "Ethereum, IPFS, Blockchain",
      image: "assets/projects/medivault-frontend.svg",
      link: "https://github.com/Saptarshi-Mandal-1234/MediVault-Frontend",
      caseUrl: "",
      html: '<article class="card project-card" id="project_303" data-category="software-iot" data-reveal>\n          <div class="project-meta"><span>SOFTWARE &amp; SECURITY</span><span>03 /</span></div>\n          <a class="project-preview" href="https://github.com/Saptarshi-Mandal-1234/MediVault-Frontend" target="_blank" rel="noopener noreferrer" aria-label="Open the MediVault frontend repository">\n            <img src="assets/projects/medivault-frontend.svg" alt="MediVault frontend landing screen with patient, doctor, and login actions" loading="lazy">\n          </a>\n          <h3>MediVault</h3><p class="project-lead">Decentralized medical records.</p><p class="muted">Designed an Ethereum-based medical records system with IPFS storage for tamper-resistant access. Authored an accompanying research paper with a WannaCry-based case study.</p>\n          <dl class="project-highlights"><div><dt>access framework</dt><dd>Ethereum</dd></div><div><dt>record storage</dt><dd>IPFS</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Ethereum</span><span class="tag">IPFS</span><span class="tag">Blockchain</span></div>\r\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_303" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links project-repositories" aria-label="MediVault repositories"><a href="https://github.com/Saptarshi-Mandal-1234/MediVault-Frontend" target="_blank" rel="noopener noreferrer">Frontend <span aria-hidden="true">\u2197</span></a><a href="https://github.com/Saptarshi-Mandal-1234/MediVault-Backend" target="_blank" rel="noopener noreferrer">Backend <span aria-hidden="true">\u2197</span></a><a href="https://github.com/Saptarshi-Mandal-1234/metamask-auth" target="_blank" rel="noopener noreferrer">MetaMask auth <span aria-hidden="true">\u2197</span></a></div>\n        </article>'
    },
    position: 2,
    hidden: false,
    revision: 1
  },
  {
    kind: "projects",
    id: "project_404",
    data: {
      title: "Automated Irrigation System",
      category: "software-iot",
      lead: "Crop-aware watering. Sensor-driven control.",
      description: "An ESP32 prototype that uses soil moisture and crop-specific thresholds to control a pump, with pH monitoring and a Bluetooth-linked web dashboard. Includes browser simulations; real-hardware validation is pending.",
      tags: "C++ / Arduino, ESP32 / BLE, Web Bluetooth",
      image: "assets/projects/irrigation-circuit.png",
      link: "https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System",
      caseUrl: "case-studies/smart-irrigation.html",
      html: '<article class="card project-card" id="project_404" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/smart-irrigation.html"><img loading="lazy" src="assets/projects/irrigation-circuit.png" alt="Arduino Uno substitute circuit in the irrigation browser simulation"></a>\r\n          <div class="project-meta"><span>CONNECTED SYSTEMS</span><span>04 /</span></div>\r\n          <h3>Automated Irrigation System</h3><p class="project-lead">Crop-aware watering. Sensor-driven control.</p><p class="muted">An ESP32 prototype that uses soil moisture and crop-specific thresholds to control a pump, with pH monitoring and a Bluetooth-linked web dashboard. Includes browser simulations; real-hardware validation is pending.</p>\r\n          <dl class="project-highlights"><div><dt>controller</dt><dd>ESP32 + BLE</dd></div><div><dt>current stage</dt><dd>Prototype</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">C++ / Arduino</span><span class="tag">ESP32 / BLE</span><span class="tag">Web Bluetooth</span></div>\r\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_404" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button><a class="btn" href="case-studies/smart-irrigation.html">Project overview</a></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>',
      caseText: "The problem\n\nFixed watering schedules ignore soil conditions and crop requirements. This academic prototype explores a single-zone controller that responds to moisture feedback instead.\n\nInputs and architecture\n\nAn ESP32 reads soil moisture, soil pH, temperature and humidity. C++ firmware controls a relay or pump driver; an HTML/JavaScript web app exchanges crop configuration, readings and commands over Bluetooth Low Energy.\n\nControl approach\n\nCrop profiles provide a minimum moisture threshold and a target. The pump starts below the minimum and stops at the target, holding its previous state between them to reduce rapid switching. pH is monitored and flagged; the system does not correct pH.\n\nImplementation and evidence\n\nThe supplied materials include ESP32 firmware, a calibration utility, a Web Bluetooth dashboard with Demo Mode, a browser logic simulator, an animated circuit simulation and an Arduino Uno sketch for Tinkercad. Source review confirmed the hysteresis logic and fault/runtime checks; firmware compilation and physical operation were not tested in this portfolio review.\n\nControls and current limitations\n\nThe implementation includes manual pump commands, runtime limits, sensor-fault handling, optional low-water detection and an emergency-stop command. These are prototype controls, not hardware-validated safety guarantees. Sensor calibration constants remain placeholders and the phone-to-ESP32-to-pump path has not been tested end to end.\n\nNext validation steps\n\nCalibrate the sensors, compile and flash the ESP32 firmware, then test crop thresholds, manual mode, disconnects and every fault condition on hardware. Measure water use and manual intervention before claiming efficiency improvements. The current scope is one pump and one zone, with no cloud monitoring or automatic pH correction."
    },
    position: 3,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_505",
    data: {
      title: "Customer Churn Analysis",
      category: "data-ml",
      lead: "From churn patterns to retention actions.",
      description: "Analyzed approximately 7,043 Telco customer records in MySQL Workbench and built a Power BI dashboard with a prescriptive recommendation engine for targeted retention actions.",
      tags: "SQL, MySQL Workbench, Power BI",
      image: "assets/projects/churn-contracts.svg",
      link: "https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis",
      caseUrl: "case-studies/customer-churn.html",
      html: '<article class="card project-card" id="project_505" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/customer-churn.html"><img loading="lazy" src="assets/projects/churn-contracts.svg" alt="Customer Churn Analysis project output"></a><div class="project-meta"><span>DATA ANALYTICS</span><span>05 /</span></div>\r\n          <h3>Customer Churn Analysis</h3><p class="project-lead">From churn patterns to retention actions.</p><p class="muted">Analyzed approximately 7,043 Telco customer records in MySQL Workbench and built a Power BI dashboard with a prescriptive recommendation engine for targeted retention actions.</p>\r\n          <dl class="project-highlights"><div><dt>customer records</dt><dd>7,043</dd></div><div><dt>retention analysis</dt><dd>SQL + BI</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">SQL</span><span class="tag">MySQL Workbench</span><span class="tag">Power BI</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/customer-churn.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_505" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>',
      caseText: "The problem\n\nIdentify customer segments with high observed churn and connect them to practical retention actions.\n\nDataset\n\n7,043 Telco customer records with 1,869 churned customers and 11 blank TotalCharges values, checked directly from the supplied CSV.\n\nMy contribution\n\nBuilt MySQL cleaning and analysis scripts, seven rule-based risk flags, and a recommendation playbook, alongside a local Power BI report.\n\nApproach\n\nImport the CSV into MySQL; standardize fields; build segment views; assign a 0\u20137 rule-based risk score; join matching flags to recommended actions. A reproducible Python summary now supplies sample outputs without requiring MySQL.\n\nResults\n\nRecalculated observed churn: 42.7% for month-to-month contracts, 11.3% for one-year contracts and 2.8% for two-year contracts. The chart below was generated from the actual supplied data. A Power BI file exists locally, but this chart is not a Power BI screenshot.\n\nLimitations\n\nRisk flags are heuristics, not calibrated probabilities or validated future predictions. Segment differences are associations. Revenue estimates may overlap across flags and must not be added as guaranteed savings. MySQL execution and the Power BI report refresh still require local validation."
    },
    position: 4,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_606",
    data: {
      title: "MediAssist AI",
      category: "software-iot",
      lead: "A healthcare assistant built at a hackathon.",
      description: "A healthcare chatbot prototype with four Gemini-powered modes, symptom-reference matching, and MongoDB-backed medication, appointment, mood and health tracking.",
      tags: "Gemini API, MongoDB, Node.js / Express",
      image: "assets/projects/mediassist-workspace.png",
      link: "https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot",
      caseUrl: "case-studies/mediassist.html",
      html: '<article class="card project-card" id="project_606" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/mediassist.html"><img loading="lazy" src="assets/projects/mediassist-workspace.png" alt="MediAssist chatbot interface"></a><div class="project-meta"><span>SOFTWARE &amp; AI</span><span>06 /</span></div>\r\n          <h3>MediAssist AI</h3><p class="project-lead">A healthcare assistant built at a hackathon.</p><p class="muted">A healthcare chatbot prototype with four Gemini-powered modes, symptom-reference matching, and MongoDB-backed medication, appointment, mood and health tracking.</p>\r\n          <dl class="project-highlights"><div><dt>consultation modes</dt><dd>4</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Gemini API</span><span class="tag">MongoDB</span><span class="tag">Node.js / Express</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/mediassist.html">Read project overview \u2192</a><button type="button" class="btn-details" data-project="project_606" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://mediassist-chatbot.onrender.com/" target="_blank" rel="noopener noreferrer">Try live app \u2197</a><a href="https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot" target="_blank" rel="noopener noreferrer">View repository \u2197</a></div>\n        </article>',
      caseText: "What it addresses\n\nBrings health-related conversations and personal tracking tools into one prototype interface, with separate modes for different kinds of questions.\n\nFour modes\n\nSymptoms, medication discussion, mental wellness and lab-report discussion use separate prompts. Symptom matching can supply reference context to the chat workflow.\n\nApplication structure\n\nThe updated source uses Node.js, Express, MongoDB/Mongoose and Gemini. Models cover chat messages, medications, appointments, mood logs, health logs, vitals and disease reference records. The project includes Docker and Compose files.\n\nImplementation details\n\nThe chat route validates mode and input, limits message/history length, applies request timeouts and retries transient failures. API keys are configured on the backend rather than displayed on the portfolio.\n\nEvidence and status\n\nThis page uses the latest MongoDB-based project folder and a real frontend capture. Source and setup files were inspected; Gemini calls, database persistence and deployment were not exercised during this update.\n\nLimitations\n\nMediAssist is an educational prototype, not a clinically validated service or medical device. Its outputs require professional review. Authentication, health-data privacy, generated-content handling and end-to-end tests require further assessment before real-world use."
    },
    position: 5,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_707",
    data: {
      title: "AI HR Workspace",
      category: "software-iot",
      lead: "From HR questions to structured action plans.",
      description: "Built a Gemini-powered workspace for recruiting, onboarding, employee relations, performance, policy, people analytics and learning, with a Node.js backend and a browser interface.",
      tags: "Node.js, JavaScript, Gemini API",
      image: "assets/projects/ai-hr-workspace.png",
      link: "https://github.com/Saptarshi-Mandal-1234/Ai-HR",
      caseUrl: "case-studies/ai-hr.html",
      html: '<article class="card project-card" id="project_707" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/ai-hr.html"><img loading="lazy" src="assets/projects/ai-hr-workspace.png" alt="AI HR workspace interface with HR specialty navigation"></a>\r\n          <div class="project-meta"><span>SOFTWARE &amp; AI</span><span>07 /</span></div>\r\n          <h3>AI HR Workspace</h3><p class="project-lead">From HR questions to structured action plans.</p><p class="muted">Built a Gemini-powered workspace for recruiting, onboarding, employee relations, performance, policy, people analytics and learning, with a Node.js backend and a browser interface.</p>\r\n          <dl class="project-highlights"><div><dt>HR specialty modes</dt><dd>8</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Node.js</span><span class="tag">JavaScript</span><span class="tag">Gemini API</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/ai-hr.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_707" aria-haspopup="dialog">Quick details \u2192</button></div>\n          <div class="project-links"><a href="https://ai-hr-rho-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Try live app \u2197</a><a href="https://github.com/Saptarshi-Mandal-1234/Ai-HR" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div></article>',
      caseText: "The problem\n\nHR work spans many recurring tasks, from interview preparation to onboarding and policy communication. This project brings those workflows into one interface with specialist modes.\n\nWhat I built\n\nA browser workspace and Node.js server integrating Gemini, with eight modes: HR Generalist, Recruiter, Onboarding, Employee Relations, Performance, Policy, People Analytics and Learning.\n\nWorkflow\n\nChoose an HR specialty, supply the relevant context, and request a structured draft. The code also includes organization, records, decision and audit endpoints for supporting workflows.\n\nTechnology\n\nJavaScript, HTML, CSS, Node.js and the Gemini API. The project runs locally with Node 18 or later and a separately configured API key.\n\nCurrent status\n\nThe original project source and interface were inspected. This portfolio shows the real frontend, not a live AI service. No model request was made during this review. The source repository is now linked below.\n\nNext steps and limitations\n\nBefore production use, the project needs stronger authentication, persistent database design, tenancy, tests and privacy controls. Generated HR content is decision support requiring qualified human review, especially for sensitive employee matters."
    },
    position: 6,
    hidden: false,
    revision: 1
  },
  {
    kind: "projects",
    id: "project_808",
    data: {
      title: "MarketPulse AI Foundation",
      category: "data-ml",
      lead: "Market research built to be reproducible.",
      description: "An Indian-equity research pipeline connecting daily price data, exchange-session validation, technical features, PostgreSQL analytics and Power BI reporting. Evaluates forecasts against simple baselines.",
      tags: "Python, PostgreSQL, Power BI, Scikit-learn",
      image: "assets/projects/marketpulse-stock-explorer.png",
      link: "https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai",
      caseUrl: "case-studies/marketpulse-ai.html",
      html: '<article class="card project-card" id="project_808" data-category="data-ml" data-reveal><a class="project-preview" href="case-studies/marketpulse-ai.html"><img loading="lazy" src="assets/projects/marketpulse-stock-explorer.png" alt="MarketPulse Stock Explorer showing adjusted price history and observed trading volume"></a><div class="project-meta"><span>DATA ENGINEERING &amp; ML</span><span>08 /</span></div><h3>MarketPulse AI Foundation</h3><p class="project-lead">Market research built to be reproducible.</p><p class="muted">An Indian-equity research pipeline connecting daily price data, exchange-session validation, technical features, PostgreSQL analytics and Power BI reporting. Evaluates forecasts against simple baselines.</p><dl class="project-highlights"><div><dt>technical features</dt><dd>39</dd></div><div><dt>report pages</dt><dd>7</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">PostgreSQL</span><span class="tag">Power BI</span><span class="tag">Scikit-learn</span></div><div class="card-actions"><a class="btn-details" href="case-studies/marketpulse-ai.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_808" aria-haspopup="dialog">Quick details \u2192</button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai" target="_blank" rel="noopener noreferrer">View repository \u2197</a></div></article>',
      caseText: "The problem\n\nBuild a repeatable way to collect, validate and analyze Indian-equity data while keeping the provenance of research results clear.\n\nUniverse and inputs\n\nThe configured initial universe is NIFTY 50 plus ten liquid large-cap stocks. Daily OHLCV research snapshots come from Yahoo Finance. Exchange-session checks identify gaps without inventing missing prices.\n\nImplementation\n\nThe source includes archive checksums, 39 technical features, PostgreSQL migrations, performance and drawdown analytics, forecasting evaluation, risk bands and prior-only anomaly detection. A report generator assembles seven Power BI pages.\n\nResearch approach\n\nForecasting tasks cover next-session direction, next-session return and five-session return, evaluated chronologically with purging. The project compares machine-learning candidates against simple baselines rather than assuming a complex model is better.\n\nResults and current evidence\n\nThe project documentation reports that the tested ML candidates did not outperform the selected baselines under its predefined criteria. This portfolio review inspected the local source and documentation; it did not rerun database, model or Power BI checks. A supplied Stock Explorer dashboard screenshot is shown above. The underlying data refresh and model evaluation were not rerun for this preview.\n\nOperations and limitations\n\nThe pipeline includes atomic publication, last-good-report preservation, health checks and Windows scheduling helpers. Fresh runs require a configured Python environment, PostgreSQL and data access. It is research software, does not place orders, and makes no claim of a trading edge."
    },
    position: 7,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_909",
    data: {
      title: "AI Procurement Cost-Savings Advisor",
      category: "data-ml",
      lead: "Turn procurement data into evidence-backed action.",
      description: "A three-page Streamlit dashboard that connects purchase orders, supplier records and product benchmarks to reveal delivery risk, cost variance and savings scenarios. Negotiation briefs, a CFO memo and data Q&A work with optional AI or reliable rule-based fallbacks.",
      tags: "Python, Streamlit, Pandas, Plotly, OpenAI API",
      image: "assets/projects/procurement-overview.png",
      link: "https://github.com/Saptarshi-Mandal-1234/ai-procurement-cost-savings-advisor",
      caseUrl: "case-studies/procurement-advisor.html",
      html: '<article class="card project-card" id="project_909" data-category="data-ml" data-reveal><a class="project-preview" href="case-studies/procurement-advisor.html"><img loading="lazy" src="assets/projects/procurement-overview.png" alt="Actual AI Procurement Cost-Savings Advisor executive dashboard screenshot"></a><div class="project-meta"><span>DATA ANALYTICS &amp; AI</span><span>09 /</span></div><h3>AI Procurement Cost-Savings Advisor</h3><p class="project-lead">Turn procurement data into evidence-backed action.</p><p class="muted">A three-page Streamlit dashboard that connects purchase orders, supplier records and product benchmarks to reveal delivery risk, cost variance and savings scenarios. Built-in negotiation briefs and CFO-ready summaries work with optional AI or reliable rule-based fallbacks.</p><dl class="project-highlights"><div><dt>orders analysed</dt><dd>2,000</dd></div><div><dt>suppliers profiled</dt><dd>100</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">Streamlit</span><span class="tag">Pandas</span><span class="tag">Plotly</span></div><div class="card-actions"><button type="button" class="btn-details" data-project="project_909" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/ai-procurement-cost-savings-advisor" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div></article>',
      caseText: "The problem\n\nProcurement teams often review spend after the fact, leaving cost leakage, late deliveries and fragmented supplier spend difficult to act on. This Streamlit dashboard turns order-level data into filterable operational and financial signals.\n\nData and method\n\nThe app joins 2,000 procurement orders with 100 supplier records and 200 product records. It calculates delivery delay, on-time performance, cost variance against product benchmarks and supplier spend concentration.\n\nDecision workflow\n\nThe Executive Overview surfaces spend, delay, on-time delivery, supplier count and potential savings. Vendor & Spend Analysis ranks supplier performance, visualises cost dispersion and compares actual costs to standard benchmarks. The Risk, Savings & AI Advisor scores suppliers from 0 to 6 using delay, on-time rate and spend share; scores of 4 or more are high risk.\n\nVerified signals from the supplied dataset\n\nThe report finds that 1,234 of 2,000 orders (61.7%) arrived late, with an average delay of 1.58 days. It also identifies 21 suppliers with no recorded certification level. Savings views model P25 price renegotiation and consolidation of SKUs sourced from three or more suppliers. These figures support prioritisation; they are not guaranteed financial outcomes.\n\nAI and limitations\n\nSupplier negotiation briefs, CFO memos and data Q&A use computed statistics. OpenAI gpt-4o-mini is optional and receives only summary statistics; when no API key is configured, the app generates rule-based narrative templates. The current dashboard is a decision-support prototype and should be validated against live contracts, qualification criteria and operational data before procurement changes are made."
    },
    position: 8,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-0",
    data: {
      title: "Data analysis & SQL",
      description: "Clean, query and explore data before drawing conclusions.",
      tags: "Python, Pandas, NumPy, SQL joins, CTEs, Window functions, EDA, Data cleaning, Statistical analysis",
      roles: "data business",
      evidence: "Resume: data and analytics toolkit; IBM HR attrition (1,470 records) and Telco customer churn (7,043 records) projects.",
      html: '<article class="card skill-card" data-skill-roles="data business">\n          <span class="skill-number">01 /</span>\n          <h3>Data analysis &amp; SQL</h3>\n          <p class="muted">Clean, query and explore data before drawing conclusions.</p>\n          <div class="tag-list">\n            <span class="tag">Python</span>\n            <span class="tag">Pandas</span>\n            <span class="tag">NumPy</span>\n            <span class="tag">SQL joins</span>\n            <span class="tag">CTEs</span>\n            <span class="tag">Window functions</span>\n            <span class="tag">EDA</span>\n            <span class="tag">Data cleaning</span>\n            <span class="tag">Statistical analysis</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to SQL <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\n              <li><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics with AI <span class="cert-pill-issuer">IBM SkillsBuild \u2197</span></a></li>\n              <li><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics: 1 Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: data and analytics toolkit; IBM HR attrition (1,470 records) and Telco customer churn (7,043 records) projects.</p>\n            <a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View SQL Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 0,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-1",
    data: {
      title: "Dashboards & business intelligence",
      description: "Turn analysis into decisions people can see and use.",
      tags: "Power BI, DAX, Power Query, Tableau, Excel, Pivot tables, VLOOKUP, KPI reporting",
      roles: "data business",
      evidence: "Resume: Power BI and Tableau dashboards for HR attrition risk and loan risk analysis.",
      html: '<article class="card skill-card" data-skill-roles="data business">\n          <span class="skill-number">02 /</span>\n          <h3>Dashboards &amp; business intelligence</h3>\n          <p class="muted">Turn analysis into decisions people can see and use.</p>\n          <div class="tag-list">\n            <span class="tag">Power BI</span>\n            <span class="tag">DAX</span>\n            <span class="tag">Power Query</span>\n            <span class="tag">Tableau</span>\n            <span class="tag">Excel</span>\n            <span class="tag">Pivot tables</span>\n            <span class="tag">VLOOKUP</span>\n            <span class="tag">KPI reporting</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener" class="cert-pill">Power BI Job Simulation <span class="cert-pill-issuer">PwC \xB7 Forage \u2197</span></a></li>\n              <li><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Skills Job Simulation <span class="cert-pill-issuer">JPMorgan Chase \u2197</span></a></li>\n              <li><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Essential Training <span class="cert-pill-issuer">NASBA CPE \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: Power BI and Tableau dashboards for HR attrition risk and loan risk analysis.</p>\n            <a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View Power BI Job Simulation \u2197</a>\n          </details>\n        </article>'
    },
    position: 1,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-2",
    data: {
      title: "Machine learning & AI",
      description: "Explore predictive models and explain what drives their results.",
      tags: "Scikit-learn, Logistic regression, Random Forest, XGBoost, SHAP, K-Means, Generative AI",
      roles: "data software",
      evidence: "Resume: Loan Default risk analysis (32k+ applications, 0.876 ROC-AUC) and HR attrition risk scoring.",
      html: '<article class="card skill-card" data-skill-roles="data software">\n          <span class="skill-number">03 /</span>\n          <h3>Machine learning &amp; AI</h3>\n          <p class="muted">Explore predictive models and explain what drives their results.</p>\n          <div class="tag-list">\n            <span class="tag">Scikit-learn</span>\n            <span class="tag">Logistic regression</span>\n            <span class="tag">Random Forest</span>\n            <span class="tag">XGBoost</span>\n            <span class="tag">SHAP</span>\n            <span class="tag">K-Means</span>\n            <span class="tag">Generative AI</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener" class="cert-pill">GenAI Powered Analytics <span class="cert-pill-issuer">Tata \xB7 Forage \u2197</span></a></li>\n              <li><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener" class="cert-pill">Career Essentials in GenAI <span class="cert-pill-issuer">Microsoft &amp; LinkedIn \u2197</span></a></li>\n              <li><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to Generative AI <span class="cert-pill-issuer">Google Cloud \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: Loan Default risk analysis (32k+ applications, 0.876 ROC-AUC) and HR attrition risk scoring.</p>\n            <a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View Tata GenAI Analytics \u2197</a>\n          </details>\n        </article>'
    },
    position: 2,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-3",
    data: {
      title: "Business analysis",
      description: "Connect a business question to requirements, measures and recommendations.",
      tags: "Requirements gathering, Process analysis, A/B testing, ETL pipelines, Data storytelling, Stakeholder communication",
      roles: "data business",
      evidence: "Resume: business analysis toolkit, KPI frameworks, and prescriptive recommendation engine for customer retention.",
      html: '<article class="card skill-card" data-skill-roles="data business">\n          <span class="skill-number">04 /</span>\n          <h3>Business analysis</h3>\n          <p class="muted">Connect a business question to requirements, measures and recommendations.</p>\n          <div class="tag-list">\n            <span class="tag">Requirements gathering</span>\n            <span class="tag">Process analysis</span>\n            <span class="tag">A/B testing</span>\n            <span class="tag">ETL pipelines</span>\n            <span class="tag">Data storytelling</span>\n            <span class="tag">Stakeholder communication</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener" class="cert-pill">Business Analysis Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener" class="cert-pill">Create a Project Charter <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\n              <li><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener" class="cert-pill">Leadership Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: business analysis toolkit, KPI frameworks, and prescriptive recommendation engine for customer retention.</p>\n            <a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View Business Analysis Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 3,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-4",
    data: {
      title: "Software & connected systems",
      description: "Build around APIs, databases and real-world inputs.",
      tags: "Node.js, Express, MongoDB, Gemini API, Ethereum, IPFS, Arduino, Raspberry Pi, Git / GitHub",
      roles: "software",
      evidence: "Resume projects: MediAssist AI (Gemini + MongoDB), MediVault (Ethereum/IPFS), and Automated Irrigation System.",
      html: '<article class="card skill-card" data-skill-roles="software">\n          <span class="skill-number">05 /</span>\n          <h3>Software &amp; connected systems</h3>\n          <p class="muted">Build around APIs, databases and real-world inputs.</p>\n          <div class="tag-list">\n            <span class="tag">Node.js</span>\n            <span class="tag">Express</span>\n            <span class="tag">MongoDB</span>\n            <span class="tag">Gemini API</span>\n            <span class="tag">Ethereum</span>\n            <span class="tag">IPFS</span>\n            <span class="tag">Arduino</span>\n            <span class="tag">Raspberry Pi</span>\n            <span class="tag">Git / GitHub</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener" class="cert-pill">Software Architecture <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\n              <li><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener" class="cert-pill">AI with GitHub Copilot <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener" class="cert-pill">Electronics: Basic Circuits <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume projects: MediAssist AI (Gemini + MongoDB), MediVault (Ethereum/IPFS), and Automated Irrigation System.</p>\n            <a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View Software Architecture \u2197</a>\n          </details>\n        </article>'
    },
    position: 4,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-5",
    data: {
      title: "Cloud & security foundations",
      description: "Developing foundations in cloud platforms and secure systems.",
      tags: "Google Cloud foundations, Azure Cognitive Services, Network security, Cryptography, Cybersecurity fundamentals, Linux",
      roles: "software",
      evidence: "Course learning: Google Cloud Foundations, Azure computer vision, Applied Cryptography (CU Boulder) and Cisco network security.",
      html: '<article class="card skill-card" data-skill-roles="software">\n          <span class="skill-number">06 /</span>\n          <h3>Cloud &amp; security foundations</h3>\n          <p class="muted">Developing foundations in cloud platforms and secure systems.</p>\n          <div class="tag-list">\n            <span class="tag">Google Cloud foundations</span>\n            <span class="tag">Azure Cognitive Services</span>\n            <span class="tag">Network security</span>\n            <span class="tag">Cryptography</span>\n            <span class="tag">Cybersecurity fundamentals</span>\n            <span class="tag">Linux</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener" class="cert-pill">Google Cloud Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener" class="cert-pill">Vision with Azure Cognitive Services <span class="cert-pill-issuer">Microsoft \u2197</span></a></li>\n              <li><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener" class="cert-pill">Cisco Network Security <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Course learning: Google Cloud Foundations, Azure computer vision, Applied Cryptography (CU Boulder) and Cisco network security.</p>\n            <a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View Google Cloud Foundations \u2197</a>\n          </details>\n        </article>'
    },
    position: 5,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-6",
    data: {
      title: "Design & communication",
      description: "Make technical ideas clear, visual and worth paying attention to.",
      tags: "Adobe Photoshop, Content writing, Content marketing, Public relations, Visual storytelling, Public speaking",
      roles: "business",
      evidence: "Experience: PR Manager at NebulaPioneers, LinkedIn content for Ureckon tech event, design at CollegeTips.in.",
      html: '<article class="card skill-card" data-skill-roles="business">\n          <span class="skill-number">07 /</span>\n          <h3>Design &amp; communication</h3>\n          <p class="muted">Make technical ideas clear, visual and worth paying attention to.</p>\n          <div class="tag-list">\n            <span class="tag">Adobe Photoshop</span>\n            <span class="tag">Content writing</span>\n            <span class="tag">Content marketing</span>\n            <span class="tag">Public relations</span>\n            <span class="tag">Visual storytelling</span>\n            <span class="tag">Public speaking</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener" class="cert-pill">Photoshop: New AI Features <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener" class="cert-pill">Advanced Content Marketing <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\n              <li><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener" class="cert-pill">Design Course Collateral <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Experience: PR Manager at NebulaPioneers, LinkedIn content for Ureckon tech event, design at CollegeTips.in.</p>\n            <a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View Photoshop Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 6,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-7",
    data: {
      title: "Delivery & collaboration",
      description: "Organize work and communicate across a team.",
      tags: "Agile concepts, Leadership, Teamwork, Time management, Problem solving, MATLAB, Microsoft Copilot, MS Office",
      roles: "business software",
      evidence: "Resume tools and core competencies; Agile methodologies, leadership and technical computing coursework.",
      html: '<article class="card skill-card" data-skill-roles="business software">\n          <span class="skill-number">08 /</span>\n          <h3>Delivery &amp; collaboration</h3>\n          <p class="muted">Organize work and communicate across a team.</p>\n          <div class="tag-list">\n            <span class="tag">Agile concepts</span>\n            <span class="tag">Leadership</span>\n            <span class="tag">Teamwork</span>\n            <span class="tag">Time management</span>\n            <span class="tag">Problem solving</span>\n            <span class="tag">MATLAB</span>\n            <span class="tag">Microsoft Copilot</span>\n            <span class="tag">MS Office</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener" class="cert-pill">Agile Project Management <span class="cert-pill-issuer">HP LIFE \u2197</span></a></li>\n              <li><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener" class="cert-pill">Learning MATLAB <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener" class="cert-pill">Efficient Time Management <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume tools and core competencies; Agile methodologies, leadership and technical computing coursework.</p>\n            <a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View Agile Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 7,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-0",
    data: {
      title: "Data Analytics with AI \u2014 Academic Internship",
      issuer: "IBM SkillsBuild \xB7 AICTE \xB7 BharatCares",
      kind: "Academic internship",
      group: "tech",
      category: "data",
      file: "certificates/certificate-18.pdf",
      image: "certificates/certificate-18.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-18.pdf" target="_blank" rel="noopener" aria-label="View Data Analytics with AI \u2014 Academic Internship certificate (PDF, new tab)"><img src="certificates/certificate-18.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Data Analytics with AI \u2014 Academic Internship certificate"></a>\n<div class="cert-body"><span class="cert-kind">Academic internship</span><h3>Data Analytics with AI \u2014 Academic Internship</h3><p class="cert-issuer">IBM SkillsBuild \xB7 AICTE \xB7 BharatCares</p><div class="cert-actions"><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-18.pdf" download="Saptarshi-Mandal-Data-Analytics-with-AI-Academic-Internship-18.pdf">Download \u2193</a></div></div></article>'
    },
    position: 0,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-1",
    data: {
      title: "PwC Switzerland Power BI Job Simulation",
      issuer: "PwC Switzerland \xB7 Forage",
      kind: "Job simulation",
      group: "tech",
      category: "data",
      file: "certificates/certificate-16.pdf",
      image: "certificates/certificate-16.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-16.pdf" target="_blank" rel="noopener" aria-label="View PwC Switzerland Power BI Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-16.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of PwC Switzerland Power BI Job Simulation certificate"></a>\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>PwC Switzerland Power BI Job Simulation</h3><p class="cert-issuer">PwC Switzerland \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-16.pdf" download="Saptarshi-Mandal-PwC-Switzerland-Power-BI-Job-Simulation-16.pdf">Download \u2193</a></div></div></article>'
    },
    position: 1,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-2",
    data: {
      title: "TATA GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata \xB7 Forage",
      kind: "Job simulation",
      group: "tech",
      category: "data",
      file: "certificates/certificate-17.pdf",
      image: "certificates/certificate-17.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-17.pdf" target="_blank" rel="noopener" aria-label="View TATA GenAI Powered Data Analytics Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-17.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of TATA GenAI Powered Data Analytics Job Simulation certificate"></a>\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>TATA GenAI Powered Data Analytics Job Simulation</h3><p class="cert-issuer">Tata \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-17.pdf" download="Saptarshi-Mandal-TATA-GenAI-Powered-Data-Analytics-Job-Simulation-17.pdf">Download \u2193</a></div></div></article>'
    },
    position: 2,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-3",
    data: {
      title: "Introduction to SQL",
      issuer: "Simplilearn SkillUp",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-20.pdf",
      image: "certificates/certificate-20.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-20.pdf" target="_blank" rel="noopener" aria-label="View Introduction to SQL certificate (PDF, new tab)"><img src="certificates/certificate-20.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to SQL certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to SQL</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-20.pdf" download="Saptarshi-Mandal-Introduction-to-SQL-20.pdf">Download \u2193</a></div></div></article>'
    },
    position: 3,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-4",
    data: {
      title: "JPMorgan Chase & Co. Excel Skills Job Simulation",
      issuer: "JPMorgan Chase & Co. \xB7 Forage",
      kind: "Job simulation",
      group: "tech",
      category: "data",
      file: "certificates/certificate-15.pdf",
      image: "certificates/certificate-15.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-15.pdf" target="_blank" rel="noopener" aria-label="View JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-15.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate"></a>\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>JPMorgan Chase &amp; Co. Excel Skills Job Simulation</h3><p class="cert-issuer">JPMorgan Chase &amp; Co. \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-15.pdf" download="Saptarshi-Mandal-JPMorgan-Chase-Co-Excel-Skills-Job-Simulation-15.pdf">Download \u2193</a></div></div></article>'
    },
    position: 4,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-5",
    data: {
      title: "Learning Data Analytics: 1 Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-34.pdf",
      image: "certificates/certificate-34.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-34.pdf" target="_blank" rel="noopener" aria-label="View Learning Data Analytics: 1 Foundations certificate (PDF, new tab)"><img src="certificates/certificate-34.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning Data Analytics: 1 Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning Data Analytics: 1 Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-34.pdf" download="Saptarshi-Mandal-Learning-Data-Analytics-1-Foundations-34.pdf">Download \u2193</a></div></div></article>'
    },
    position: 5,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-6",
    data: {
      title: "Excel Essential Training (Microsoft 365)",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-29.pdf",
      image: "certificates/certificate-29.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-29.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-29.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-29.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-29.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--29.pdf">Download \u2193</a></div></div></article>'
    },
    position: 6,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-7",
    data: {
      title: "Business Analysis Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-23.pdf",
      image: "certificates/certificate-23.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-23.pdf" target="_blank" rel="noopener" aria-label="View Business Analysis Foundations certificate (PDF, new tab)"><img src="certificates/certificate-23.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Business Analysis Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Business Analysis Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-23.pdf" download="Saptarshi-Mandal-Business-Analysis-Foundations-23.pdf">Download \u2193</a></div></div></article>'
    },
    position: 7,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-8",
    data: {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      kind: "Learning path",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-24.pdf",
      image: "certificates/certificate-24.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-24.pdf" target="_blank" rel="noopener" aria-label="View Career Essentials in Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-24.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Career Essentials in Generative AI certificate"></a>\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Career Essentials in Generative AI</h3><p class="cert-issuer">Microsoft &amp; LinkedIn</p><div class="cert-actions"><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-24.pdf" download="Saptarshi-Mandal-Career-Essentials-in-Generative-AI-24.pdf">Download \u2193</a></div></div></article>'
    },
    position: 8,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-9",
    data: {
      title: "Build a computer vision app with Azure Cognitive Services",
      issuer: "Microsoft \xB7 Coursera",
      kind: "Guided project",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-06.pdf",
      image: "certificates/certificate-06.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-06.pdf" target="_blank" rel="noopener" aria-label="View Build a computer vision app with Azure Cognitive Services certificate (PDF, new tab)"><img src="certificates/certificate-06.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Build a computer vision app with Azure Cognitive Services certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Build a computer vision app with Azure Cognitive Services</h3><p class="cert-issuer">Microsoft \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-06.pdf" download="Saptarshi-Mandal-Build-a-computer-vision-app-with-Azure-Cognitive-Services-6.pdf">Download \u2193</a></div></div></article>'
    },
    position: 9,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-10",
    data: {
      title: "Google Cloud Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-30.pdf",
      image: "certificates/certificate-30.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-30.pdf" target="_blank" rel="noopener" aria-label="View Google Cloud Foundations certificate (PDF, new tab)"><img src="certificates/certificate-30.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Cloud Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Google Cloud Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-30.pdf" download="Saptarshi-Mandal-Google-Cloud-Foundations-30.pdf">Download \u2193</a></div></div></article>'
    },
    position: 10,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-11",
    data: {
      title: "Learning AI with GitHub Copilot",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-33.pdf",
      image: "certificates/certificate-33.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-33.pdf" target="_blank" rel="noopener" aria-label="View Learning AI with GitHub Copilot certificate (PDF, new tab)"><img src="certificates/certificate-33.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning AI with GitHub Copilot certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning AI with GitHub Copilot</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-33.pdf" download="Saptarshi-Mandal-Learning-AI-with-GitHub-Copilot-33.pdf">Download \u2193</a></div></div></article>'
    },
    position: 11,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-12",
    data: {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-12.pdf",
      image: "certificates/certificate-12.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-12.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-12.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Generative AI certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Generative AI</h3><p class="cert-issuer">Google Cloud \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-12.pdf" download="Saptarshi-Mandal-Introduction-to-Generative-AI-12.pdf">Download \u2193</a></div></div></article>'
    },
    position: 12,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-13",
    data: {
      title: "Generative AI Essentials: Overview and Impact",
      issuer: "University of Michigan \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-09.pdf",
      image: "certificates/certificate-09.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-09.pdf" target="_blank" rel="noopener" aria-label="View Generative AI Essentials: Overview and Impact certificate (PDF, new tab)"><img src="certificates/certificate-09.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Generative AI Essentials: Overview and Impact certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Generative AI Essentials: Overview and Impact</h3><p class="cert-issuer">University of Michigan \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-09.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-09.pdf" download="Saptarshi-Mandal-Generative-AI-Essentials-Overview-and-Impact-9.pdf">Download \u2193</a></div></div></article>'
    },
    position: 13,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-14",
    data: {
      title: "Introduction to Software Architecture",
      issuer: "Simplilearn SkillUp",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-19.pdf",
      image: "certificates/certificate-19.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-19.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Software Architecture certificate (PDF, new tab)"><img src="certificates/certificate-19.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Software Architecture certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Software Architecture</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-19.pdf" download="Saptarshi-Mandal-Introduction-to-Software-Architecture-19.pdf">Download \u2193</a></div></div></article>'
    },
    position: 14,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-15",
    data: {
      title: "Applied Cryptography",
      issuer: "University of Colorado System \xB7 Coursera",
      kind: "Specialization",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-05.pdf",
      image: "certificates/certificate-05.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-05.pdf" target="_blank" rel="noopener" aria-label="View Applied Cryptography certificate (PDF, new tab)"><img src="certificates/certificate-05.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Applied Cryptography certificate"></a>\n<div class="cert-body"><span class="cert-kind">Specialization</span><h3>Applied Cryptography</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-05.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-05.pdf" download="Saptarshi-Mandal-Applied-Cryptography-5.pdf">Download \u2193</a></div></div></article>'
    },
    position: 15,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-16",
    data: {
      title: "Cisco Network Security: Safeguarding Network Integrity and Data",
      issuer: "LinkedIn Learning",
      kind: "Learning path",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-03.pdf",
      image: "certificates/certificate-03.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-03.pdf" target="_blank" rel="noopener" aria-label="View Cisco Network Security: Safeguarding Network Integrity and Data certificate (PDF, new tab)"><img src="certificates/certificate-03.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cisco Network Security: Safeguarding Network Integrity and Data certificate"></a>\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Cisco Network Security: Safeguarding Network Integrity and Data</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-03.pdf" download="Saptarshi-Mandal-Cisco-Network-Security-Safeguarding-Network-Integrity-and-Data-3.pdf">Download \u2193</a></div></div></article>'
    },
    position: 16,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-17",
    data: {
      title: "Cyber Security Fundamentals",
      issuer: "University of London \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-08.pdf",
      image: "certificates/certificate-08.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-08.pdf" target="_blank" rel="noopener" aria-label="View Cyber Security Fundamentals certificate (PDF, new tab)"><img src="certificates/certificate-08.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cyber Security Fundamentals certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Cyber Security Fundamentals</h3><p class="cert-issuer">University of London \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-08.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-08.pdf" download="Saptarshi-Mandal-Cyber-Security-Fundamentals-8.pdf">Download \u2193</a></div></div></article>'
    },
    position: 17,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-18",
    data: {
      title: "Advanced System Security Topics",
      issuer: "University of Colorado System \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-04.pdf",
      image: "certificates/certificate-04.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-04.pdf" target="_blank" rel="noopener" aria-label="View Advanced System Security Topics certificate (PDF, new tab)"><img src="certificates/certificate-04.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced System Security Topics certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced System Security Topics</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-04.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-04.pdf" download="Saptarshi-Mandal-Advanced-System-Security-Topics-4.pdf">Download \u2193</a></div></div></article>'
    },
    position: 18,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-19",
    data: {
      title: "Information Theory",
      issuer: "The Chinese University of Hong Kong \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-11.pdf",
      image: "certificates/certificate-11.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-11.pdf" target="_blank" rel="noopener" aria-label="View Information Theory certificate (PDF, new tab)"><img src="certificates/certificate-11.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Information Theory certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Information Theory</h3><p class="cert-issuer">The Chinese University of Hong Kong \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-11.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-11.pdf" download="Saptarshi-Mandal-Information-Theory-11.pdf">Download \u2193</a></div></div></article>'
    },
    position: 19,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-20",
    data: {
      title: "AI Product Management Course",
      issuer: "Simplilearn SkillUp",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-02.pdf",
      image: "certificates/certificate-02.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-02.pdf" target="_blank" rel="noopener" aria-label="View AI Product Management Course certificate (PDF, new tab)"><img src="certificates/certificate-02.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of AI Product Management Course certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>AI Product Management Course</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-02.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-02.pdf" download="Saptarshi-Mandal-AI-Product-Management-Course-2.pdf">Download \u2193</a></div></div></article>'
    },
    position: 20,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-21",
    data: {
      title: "Agile Project Management",
      issuer: "HP LIFE",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-01.pdf",
      image: "certificates/certificate-01.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-01.pdf" target="_blank" rel="noopener" aria-label="View Agile Project Management certificate (PDF, new tab)"><img src="certificates/certificate-01.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Agile Project Management certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Agile Project Management</h3><p class="cert-issuer">HP LIFE</p><div class="cert-actions"><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-01.pdf" download="Saptarshi-Mandal-Agile-Project-Management-1.pdf">Download \u2193</a></div></div></article>'
    },
    position: 21,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-22",
    data: {
      title: "Learning MATLAB",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-35.pdf",
      image: "certificates/certificate-35.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-35.pdf" target="_blank" rel="noopener" aria-label="View Learning MATLAB certificate (PDF, new tab)"><img src="certificates/certificate-35.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning MATLAB certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning MATLAB</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-35.pdf" download="Saptarshi-Mandal-Learning-MATLAB-35.pdf">Download \u2193</a></div></div></article>'
    },
    position: 22,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-23",
    data: {
      title: "Leadership Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-32.pdf",
      image: "certificates/certificate-32.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-32.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-32.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-32.pdf" download="Saptarshi-Mandal-Leadership-Foundations-32.pdf">Download \u2193</a></div></div></article>'
    },
    position: 23,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-24",
    data: {
      title: "Skills to Build Stronger Work Relationships",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-38.pdf",
      image: "certificates/certificate-38.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-38.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-38.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-38.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-38.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-38.pdf">Download \u2193</a></div></div></article>'
    },
    position: 24,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-25",
    data: {
      title: "Advanced Content Marketing",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-22.pdf",
      image: "certificates/certificate-22.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-22.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-22.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-22.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-22.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-22.pdf">Download \u2193</a></div></div></article>'
    },
    position: 25,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-26",
    data: {
      title: "Photoshop 2024: New AI Features",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-36.pdf",
      image: "certificates/certificate-36.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-36.pdf" target="_blank" rel="noopener" aria-label="View Photoshop 2024: New AI Features certificate (PDF, new tab)"><img src="certificates/certificate-36.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Photoshop 2024: New AI Features certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Photoshop 2024: New AI Features</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-36.pdf" download="Saptarshi-Mandal-Photoshop-2024-New-AI-Features-36.pdf">Download \u2193</a></div></div></article>'
    },
    position: 26,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-27",
    data: {
      title: "Electronics Foundations: Basic Circuits",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-27.pdf",
      image: "certificates/certificate-27.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-27.pdf" target="_blank" rel="noopener" aria-label="View Electronics Foundations: Basic Circuits certificate (PDF, new tab)"><img src="certificates/certificate-27.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Electronics Foundations: Basic Circuits certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Electronics Foundations: Basic Circuits</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-27.pdf" download="Saptarshi-Mandal-Electronics-Foundations-Basic-Circuits-27.pdf">Download \u2193</a></div></div></article>'
    },
    position: 27,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-28",
    data: {
      title: "Efficient Time Management",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-26.pdf",
      image: "certificates/certificate-26.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-26.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management certificate (PDF, new tab)"><img src="certificates/certificate-26.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Efficient Time Management</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-26.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-26.pdf" download="Saptarshi-Mandal-Efficient-Time-Management-26.pdf">Download \u2193</a></div></div></article>'
    },
    position: 28,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-29",
    data: {
      title: "Create a Project Charter with Google Docs",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "business",
      file: "certificates/certificate-07.pdf",
      image: "certificates/certificate-07.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-07.pdf" target="_blank" rel="noopener" aria-label="View Create a Project Charter with Google Docs certificate (PDF, new tab)"><img src="certificates/certificate-07.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Create a Project Charter with Google Docs certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Create a Project Charter with Google Docs</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-07.pdf" download="Saptarshi-Mandal-Create-a-Project-Charter-with-Google-Docs-7.pdf">Download \u2193</a></div></div></article>'
    },
    position: 29,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-30",
    data: {
      title: "Use Canva to Design Digital Course Collateral",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-14.pdf",
      image: "certificates/certificate-14.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-14.pdf" target="_blank" rel="noopener" aria-label="View Use Canva to Design Digital Course Collateral certificate (PDF, new tab)"><img src="certificates/certificate-14.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Use Canva to Design Digital Course Collateral certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Use Canva to Design Digital Course Collateral</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-14.pdf" download="Saptarshi-Mandal-Use-Canva-to-Design-Digital-Course-Collateral-14.pdf">Download \u2193</a></div></div></article>'
    },
    position: 30,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-31",
    data: {
      title: "Search Engine Optimization (SEO) with Squarespace",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-13.pdf",
      image: "certificates/certificate-13.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-13.pdf" target="_blank" rel="noopener" aria-label="View Search Engine Optimization (SEO) with Squarespace certificate (PDF, new tab)"><img src="certificates/certificate-13.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Search Engine Optimization (SEO) with Squarespace certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Search Engine Optimization (SEO) with Squarespace</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-13.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-13.pdf" download="Saptarshi-Mandal-Search-Engine-Optimization-SEO-with-Squarespace-13.pdf">Download \u2193</a></div></div></article>'
    },
    position: 31,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-32",
    data: {
      title: "Google Ads for Beginners",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-10.pdf",
      image: "certificates/certificate-10.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-10.pdf" target="_blank" rel="noopener" aria-label="View Google Ads for Beginners certificate (PDF, new tab)"><img src="certificates/certificate-10.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Ads for Beginners certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Google Ads for Beginners</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-10.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-10.pdf" download="Saptarshi-Mandal-Google-Ads-for-Beginners-10.pdf">Download \u2193</a></div></div></article>'
    },
    position: 32,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-33",
    data: {
      title: "Excel Essential Training (Microsoft 365)",
      issuer: "LinkedIn Learning",
      kind: "NASBA CPE record",
      group: "tech",
      category: "data",
      file: "certificates/certificate-28.pdf",
      image: "certificates/certificate-28.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-28.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-28.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\n<div class="cert-body"><span class="cert-kind">NASBA CPE record</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-28.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--28.pdf">Download \u2193</a></div></div></article>'
    },
    position: 33,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-34",
    data: {
      title: "Leadership Foundations",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "business",
      file: "certificates/certificate-31.pdf",
      image: "certificates/certificate-31.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-31.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-31.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-31.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-31.pdf" download="Saptarshi-Mandal-Leadership-Foundations-31.pdf">Download \u2193</a></div></div></article>'
    },
    position: 34,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-35",
    data: {
      title: "Skills to Build Stronger Work Relationships",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "business",
      file: "certificates/certificate-37.pdf",
      image: "certificates/certificate-37.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-37.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-37.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-37.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-37.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-37.pdf">Download \u2193</a></div></div></article>'
    },
    position: 35,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-36",
    data: {
      title: "Advanced Content Marketing",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-21.pdf",
      image: "certificates/certificate-21.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-21.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-21.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-21.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-21.pdf">Download \u2193</a></div></div></article>'
    },
    position: 36,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-37",
    data: {
      title: "Efficient Time Management ",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "business",
      file: "certificates/certificate-25.pdf",
      image: "certificates/certificate-25.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-25.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management  certificate (PDF, new tab)"><img src="certificates/certificate-25.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management  certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Efficient Time Management </h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-25.pdf" download="Saptarshi-Mandal-Efficient-Time-Management--25.pdf">Download \u2193</a></div></div></article>'
    },
    position: 37,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-38",
    data: {
      title: "Ecstasia 2025",
      issuer: "UEM Kolkata",
      kind: "Coordinator appreciation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-01.png",
      image: "certificates/uem-01.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-01.png" target="_blank" rel="noopener" aria-label="View Ecstasia 2025 certificate"><img src="certificates/uem-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ecstasia 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ecstasia 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-01.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 38,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-39",
    data: {
      title: "Ureckon 2025",
      issuer: "UEM Kolkata",
      kind: "Coordinator appreciation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-02.png",
      image: "certificates/uem-02.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-02.png" target="_blank" rel="noopener" aria-label="View Ureckon 2025 certificate"><img src="certificates/uem-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ureckon 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ureckon 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-02.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 39,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-40",
    data: {
      title: "Nanotechnology: A Changing Face in Modern Era",
      issuer: "UEM Kolkata",
      kind: "Poster competition participation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-03.png",
      image: "certificates/uem-03.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-03.png" target="_blank" rel="noopener" aria-label="View Nanotechnology: A Changing Face in Modern Era certificate"><img src="certificates/uem-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Nanotechnology: A Changing Face in Modern Era certificate"></a><div class="cert-body"><span class="cert-kind">Poster competition participation</span><h3>Nanotechnology: A Changing Face in Modern Era</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-03.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 40,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-41",
    data: {
      title: "Aperture 2.0",
      issuer: "UEM Kolkata",
      kind: "Photography event organizing",
      group: "uem",
      category: "activities",
      file: "certificates/uem-04.png",
      image: "certificates/uem-04.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-04.png" target="_blank" rel="noopener" aria-label="View Aperture 2.0 certificate"><img src="certificates/uem-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Aperture 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Photography event organizing</span><h3>Aperture 2.0</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-04.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 41,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-42",
    data: {
      title: "Reaching Out NGO community service",
      issuer: "UEM Kolkata",
      kind: "Appreciation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-05.png",
      image: "certificates/uem-05.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-05.png" target="_blank" rel="noopener" aria-label="View Reaching Out NGO community service certificate"><img src="certificates/uem-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Reaching Out NGO community service certificate"></a><div class="cert-body"><span class="cert-kind">Appreciation</span><h3>Reaching Out NGO community service</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-05.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 42,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-43",
    data: {
      title: "Energy and Sustainability: A Social Mission",
      issuer: "UEM Kolkata",
      kind: "Seminar participation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-06.png",
      image: "certificates/uem-06.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-06.png" target="_blank" rel="noopener" aria-label="View Energy and Sustainability: A Social Mission certificate"><img src="certificates/uem-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Energy and Sustainability: A Social Mission certificate"></a><div class="cert-body"><span class="cert-kind">Seminar participation</span><h3>Energy and Sustainability: A Social Mission</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-06.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 43,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-44",
    data: {
      title: "Internet of Things workshop",
      issuer: "UEM Kolkata",
      kind: "Workshop participation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-07.png",
      image: "certificates/uem-07.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-07.png" target="_blank" rel="noopener" aria-label="View Internet of Things workshop certificate"><img src="certificates/uem-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Internet of Things workshop certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>Internet of Things workshop</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-07.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 44,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-45",
    data: {
      title: "GenAI: Common use cases and solutions",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Workshop participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-01.png",
      image: "certificates/iitm-01.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-01.png" target="_blank" rel="noopener" aria-label="View GenAI: Common use cases and solutions certificate"><img src="certificates/iitm-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="GenAI: Common use cases and solutions certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>GenAI: Common use cases and solutions</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-01.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 45,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-46",
    data: {
      title: "Paradox 2024: Student Relations",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Volunteer recognition",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-02.png",
      image: "certificates/iitm-02.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-02.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Student Relations certificate"><img src="certificates/iitm-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Volunteer recognition</span><h3>Paradox 2024: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-02.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 46,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-47",
    data: {
      title: "Paradox 2024: Squid Games",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Event volunteer appreciation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-03.png",
      image: "certificates/iitm-03.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-03.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Games certificate"><img src="certificates/iitm-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Games certificate"></a><div class="cert-body"><span class="cert-kind">Event volunteer appreciation</span><h3>Paradox 2024: Squid Games</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-03.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 47,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-48",
    data: {
      title: "Paradox 2024: Qutopia",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-04.png",
      image: "certificates/iitm-04.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-04.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Qutopia certificate"><img src="certificates/iitm-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Qutopia certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Qutopia</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-04.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 48,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-49",
    data: {
      title: "Paradox 2024: Shutter Safari",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-05.png",
      image: "certificates/iitm-05.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-05.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Shutter Safari certificate"><img src="certificates/iitm-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Shutter Safari certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Shutter Safari</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-05.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 49,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-50",
    data: {
      title: "Paradox 2024: What\u2019s in a Meme",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-06.png",
      image: "certificates/iitm-06.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-06.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: What\u2019s in a Meme certificate"><img src="certificates/iitm-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: What\u2019s in a Meme certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: What\u2019s in a Meme</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-06.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 50,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-51",
    data: {
      title: "Paradox 2024: Fiction Flicks",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-07.png",
      image: "certificates/iitm-07.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-07.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Fiction Flicks certificate"><img src="certificates/iitm-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Fiction Flicks certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Fiction Flicks</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-07.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 51,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-52",
    data: {
      title: "Paradox 2024: Logic Loom 2.0",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-08.png",
      image: "certificates/iitm-08.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-08.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Logic Loom 2.0 certificate"><img src="certificates/iitm-08.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Logic Loom 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Logic Loom 2.0</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-08.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-08.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 52,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-53",
    data: {
      title: "Paradox 2024: Kampus Run",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-09.png",
      image: "certificates/iitm-09.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-09.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Kampus Run certificate"><img src="certificates/iitm-09.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Kampus Run certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Kampus Run</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-09.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-09.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 53,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-54",
    data: {
      title: "Paradox 2024: Squid Game",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-10.png",
      image: "certificates/iitm-10.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-10.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Game certificate"><img src="certificates/iitm-10.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Game certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Squid Game</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-10.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-10.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 54,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-55",
    data: {
      title: "Paradox in Margazhi 2025: Student Relations",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Coordinator recognition",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-11.png",
      image: "certificates/iitm-11.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-11.png" target="_blank" rel="noopener" aria-label="View Paradox in Margazhi 2025: Student Relations certificate"><img src="certificates/iitm-11.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox in Margazhi 2025: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator recognition</span><h3>Paradox in Margazhi 2025: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-11.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-11.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 55,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-56",
    data: {
      title: "ATL Marathon 2021\u201322: Savvys",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team participation",
      group: "atl",
      category: "activities",
      file: "certificates/atl-01.png",
      image: "certificates/atl-01.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-01.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Savvys certificate"><img src="certificates/atl-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Savvys certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2021\u201322: Savvys</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-01.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 56,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-57",
    data: {
      title: "Student Innovator Program SIP 4.0",
      issuer: "AIC-MIT ADT \xB7 Devise Electronics \xB7 Makers Lab",
      kind: "Eight-week program completion",
      group: "atl",
      category: "activities",
      file: "certificates/atl-03.png",
      image: "certificates/atl-03.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-03.png" target="_blank" rel="noopener" aria-label="View Student Innovator Program SIP 4.0 certificate"><img src="certificates/atl-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Student Innovator Program SIP 4.0 certificate"></a><div class="cert-body"><span class="cert-kind">Eight-week program completion</span><h3>Student Innovator Program SIP 4.0</h3><p class="cert-issuer">AIC-MIT ADT \xB7 Devise Electronics \xB7 Makers Lab</p><div class="cert-actions"><a href="certificates/atl-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-03.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 57,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-58",
    data: {
      title: "ATL Marathon 2021\u201322: Top 350 Teams",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team achievement",
      group: "atl",
      category: "activities",
      file: "certificates/atl-04.png",
      image: "certificates/atl-04.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-04.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Top 350 Teams certificate"><img src="certificates/atl-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Top 350 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2021\u201322: Top 350 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-04.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 58,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-59",
    data: {
      title: "ATL Marathon 2020: Team X B",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team participation",
      group: "atl",
      category: "activities",
      file: "certificates/atl-05.png",
      image: "certificates/atl-05.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-05.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Team X B certificate"><img src="certificates/atl-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Team X B certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2020: Team X B</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-05.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 59,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-60",
    data: {
      title: "ATL Marathon 2020: Top 10 in West Bengal",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team achievement",
      group: "atl",
      category: "activities",
      file: "certificates/atl-06.png",
      image: "certificates/atl-06.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-06.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 10 in West Bengal certificate"><img src="certificates/atl-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 10 in West Bengal certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 10 in West Bengal</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-06.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 60,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-61",
    data: {
      title: "ATL Marathon 2020: Top 300 Teams",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team achievement",
      group: "atl",
      category: "activities",
      file: "certificates/atl-07.png",
      image: "certificates/atl-07.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-07.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 300 Teams certificate"><img src="certificates/atl-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 300 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 300 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-07.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 61,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "intro",
    data: {
      title: "intro",
      selector: ".hero-intro",
      text: "I\u2019m Saptarshi, a CST undergrad at IEM Kolkata with an analytical mind and a creative streak. I explore data with Python and SQL, shape stories through design and content, and bring a year of PR experience to how I communicate. Now, I\u2019m looking for an internship where I can put that mix to work.",
      html: "I\u2019m Saptarshi, a CST undergrad at IEM Kolkata with an analytical mind and a creative streak. I explore data with Python and SQL, shape stories through design and content, and bring a year of PR experience to how I communicate. Now, I\u2019m looking for an internship where I can put that mix to work."
    },
    position: 78,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "role",
    data: {
      title: "role",
      selector: ".hero-role",
      text: "DATA ANALYST / BUSINESS ANALYST / SOFTWARE",
      html: "DATA ANALYST / BUSINESS ANALYST / SOFTWARE"
    },
    position: 79,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "about",
    data: {
      title: "about",
      selector: ".about-copy",
      text: "I\u2019m building a career where data science meets clear communication. At IEM Kolkata, I\u2019m deepening my skills in Python, SQL, machine learning and cloud computing. Outside the classroom, I\u2019ve learned how to turn an idea into a story people pay attention to.\n\nA year of taking ownership. As Public Relations Manager at NebulaPioneers, I built external communications, brand narratives and outreach strategy from the ground up. Alongside that, I managed LinkedIn content for Ureckon, UEM Kolkata\u2019s flagship tech event, creating content for student and recruiter communities.\n\nA creative edge, put to work. My experience at CollegeTips.in brought together content writing and graphic design with Adobe Photoshop. It\u2019s a perspective I bring to technical work too: ask better questions, find what matters, and make it easy for someone else to understand.\n\nCuriosity with a track record. Completed Google Cloud Foundations through LinkedIn Learning. ATL Marathon 2020: Top 10 in West Bengal and Top 300 nationally. And still learning \u2014 through hands-on projects and self-driven study.\n\nWhat I\u2019m looking for next: an internship in data science, analytics or cloud computing where I can contribute to real problems, learn from an experienced team, and bring both analytical thinking and visual storytelling to the table.\n\nEDUCATION\nIEM, Kolkata\n\nB.Tech, CST \xB7 2023\u20132027\n\nCGPA: 8.4 through Semester V\n\nROLE INTERESTS\nData & software\n\nAnalytics \xB7 Business insights \xB7 Development",
      html: '\n        <p>I\u2019m building a career where data science meets clear communication. At IEM Kolkata, I\u2019m deepening my skills in Python, SQL, machine learning and cloud computing. Outside the classroom, I\u2019ve learned how to turn an idea into a story people pay attention to.</p>\n        <p class="muted"><strong>A year of taking ownership.</strong> As Public Relations Manager at NebulaPioneers, I built external communications, brand narratives and outreach strategy from the ground up. Alongside that, I managed LinkedIn content for Ureckon, UEM Kolkata\u2019s flagship tech event, creating content for student and recruiter communities.</p>\n        <p class="muted"><strong>A creative edge, put to work.</strong> My experience at CollegeTips.in brought together content writing and graphic design with Adobe Photoshop. It\u2019s a perspective I bring to technical work too: ask better questions, find what matters, and make it easy for someone else to understand.</p>\n        <p class="muted"><strong>Curiosity with a track record.</strong> Completed Google Cloud Foundations through LinkedIn Learning. ATL Marathon 2020: Top 10 in West Bengal and Top 300 nationally. And still learning \u2014 through hands-on projects and self-driven study.</p>\n        <p class="muted"><strong>What I\u2019m looking for next:</strong> an internship in data science, analytics or cloud computing where I can contribute to real problems, learn from an experienced team, and bring both analytical thinking and visual storytelling to the table.</p>\n        <div class="about-facts">\n          <div>\n            <span>EDUCATION</span>\n            <strong>IEM, Kolkata</strong>\n            <p>B.Tech, CST \xB7 2023\u20132027</p><p>CGPA: 8.4 through Semester V</p>\n          </div>\n          <div>\n            <span>ROLE INTERESTS</span>\n            <strong>Data &amp; software</strong>\n            <p>Analytics \xB7 Business insights \xB7 Development</p>\n          </div>\n        </div>\n      '
    },
    position: 80,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "creative",
    data: {
      title: "creative",
      selector: ".beyond-intro",
      text: "Poetry in English and Bengali \u2014 reflections on love, longing and family, in their original visual form.",
      html: "Poetry in English and Bengali \u2014 reflections on love, longing and family, in their original visual form."
    },
    position: 81,
    hidden: false,
    revision: 0
  },
  {
    id: "poem-01",
    kind: "poems",
    position: 0,
    hidden: false,
    revision: 0,
    data: {
      title: "That night was my sunshine",
      language: "en",
      file: "poems/poem-01.mp4",
      image: "poems/poem-01.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-01" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-01.jpg" aria-label="That night was my sunshine"><source src="poems/poem-01.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">That night was my sunshine</h2><a class="text-link" href="poems/poem-01.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-02",
    kind: "poems",
    position: 1,
    hidden: false,
    revision: 0,
    data: {
      title: "What I feel!!!",
      language: "en",
      file: "poems/poem-02.mp4",
      image: "poems/poem-02.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-02" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-02.jpg" aria-label="What I feel!!!"><source src="poems/poem-02.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">What I feel!!!</h2><a class="text-link" href="poems/poem-02.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-03",
    kind: "poems",
    position: 2,
    hidden: false,
    revision: 0,
    data: {
      title: "The sea soothes my soul",
      language: "en",
      file: "poems/poem-03.mp4",
      image: "poems/poem-03.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-03" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-03.jpg" aria-label="The sea soothes my soul"><source src="poems/poem-03.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">The sea soothes my soul</h2><a class="text-link" href="poems/poem-03.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-04",
    kind: "poems",
    position: 3,
    hidden: false,
    revision: 0,
    data: {
      title: "LOVE .. WHAT??",
      language: "en",
      file: "poems/poem-04.mp4",
      image: "poems/poem-04.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-04" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-04.jpg" aria-label="LOVE .. WHAT??"><source src="poems/poem-04.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">LOVE .. WHAT??</h2><a class="text-link" href="poems/poem-04.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-05",
    kind: "poems",
    position: 4,
    hidden: false,
    revision: 0,
    data: {
      title: "Suffering??",
      language: "en",
      file: "poems/poem-05.mp4",
      image: "poems/poem-05.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-05" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-05.jpg" aria-label="Suffering??"><source src="poems/poem-05.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Suffering??</h2><a class="text-link" href="poems/poem-05.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-06",
    kind: "poems",
    position: 5,
    hidden: false,
    revision: 0,
    data: {
      title: "RAIN",
      language: "en",
      file: "poems/poem-06.mp4",
      image: "poems/poem-06.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-06" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-06.jpg" aria-label="RAIN"><source src="poems/poem-06.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">RAIN</h2><a class="text-link" href="poems/poem-06.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-07",
    kind: "poems",
    position: 6,
    hidden: false,
    revision: 0,
    data: {
      title: "BEING LOVESICK",
      language: "en",
      file: "poems/poem-07.mp4",
      image: "poems/poem-07.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-07" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-07.jpg" aria-label="BEING LOVESICK"><source src="poems/poem-07.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">BEING LOVESICK</h2><a class="text-link" href="poems/poem-07.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-08",
    kind: "poems",
    position: 7,
    hidden: false,
    revision: 0,
    data: {
      title: "FLOWERS THAT ONCE BLOOMED",
      language: "en",
      file: "poems/poem-08.mp4",
      image: "poems/poem-08.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-08" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-08.jpg" aria-label="FLOWERS THAT ONCE BLOOMED"><source src="poems/poem-08.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">FLOWERS THAT ONCE BLOOMED</h2><a class="text-link" href="poems/poem-08.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-09",
    kind: "poems",
    position: 8,
    hidden: false,
    revision: 0,
    data: {
      title: "Solitary",
      language: "en",
      file: "poems/poem-09.mp4",
      image: "poems/poem-09.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-09" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-09.jpg" aria-label="Solitary"><source src="poems/poem-09.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Solitary</h2><a class="text-link" href="poems/poem-09.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-10",
    kind: "poems",
    position: 9,
    hidden: false,
    revision: 0,
    data: {
      title: "\u09AC\u09BE\u09AC\u09BE",
      language: "bn",
      file: "poems/poem-10.mp4",
      image: "poems/poem-10.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-10" data-language="bn"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-10.jpg" aria-label="\u09AC\u09BE\u09AC\u09BE"><source src="poems/poem-10.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AC\u09BE\u09AC\u09BE</h2><a class="text-link" href="poems/poem-10.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-11",
    kind: "poems",
    position: 10,
    hidden: false,
    revision: 0,
    data: {
      title: "I am a son",
      language: "en",
      file: "poems/poem-11.mp4",
      image: "poems/poem-11.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-11" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-11.jpg" aria-label="I am a son"><source src="poems/poem-11.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">I am a son</h2><a class="text-link" href="poems/poem-11.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-12",
    kind: "poems",
    position: 11,
    hidden: false,
    revision: 0,
    data: {
      title: "\u09AE\u09BE",
      language: "bn",
      file: "poems/poem-12.mp4",
      image: "poems/poem-12.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-12" data-language="bn"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-12.jpg" aria-label="\u09AE\u09BE"><source src="poems/poem-12.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AE\u09BE</h2><a class="text-link" href="poems/poem-12.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-13",
    kind: "poems",
    position: 12,
    hidden: false,
    revision: 0,
    data: {
      title: "\u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB",
      language: "bn",
      file: "poems/poem-13.png",
      image: "poems/poem-13.png",
      format: "image",
      text: "",
      html: '<article class="poem-card" id="poem-13" data-language="bn"><div class="poem-media"><a href="poems/poem-13.png" target="_blank" rel="noopener"><img src="poems/poem-13.png" alt="Bengali visual poem: \u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB" loading="lazy"></a></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / VISUAL VERSE</span><h2 lang="bn">\u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB</h2><a class="text-link" href="poems/poem-13.png" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "headline",
    kind: "pages",
    position: 100,
    hidden: false,
    revision: 0,
    data: {
      title: "headline",
      selector: ".hero h1",
      text: "Find the signal.\nTell the story.",
      html: "Find the signal.<br>Tell the <em>story.</em>"
    }
  },
  {
    id: "about-heading",
    kind: "pages",
    position: 101,
    hidden: false,
    revision: 0,
    data: {
      title: "about-heading",
      selector: "#about h2",
      text: "An analytical mind.\nA creative streak.",
      html: "An analytical mind.<br>A creative streak."
    }
  },
  {
    id: "projects-heading",
    kind: "pages",
    position: 102,
    hidden: false,
    revision: 0,
    data: {
      title: "projects-heading",
      selector: "#projects h2",
      text: "Ideas put into practice.",
      html: "Ideas put into practice."
    }
  },
  {
    id: "skills-heading",
    kind: "pages",
    position: 103,
    hidden: false,
    revision: 0,
    data: {
      title: "skills-heading",
      selector: "#skills h2",
      text: "What I work with.",
      html: "What I work with."
    }
  },
  {
    id: "certificates-heading",
    kind: "pages",
    position: 104,
    hidden: false,
    revision: 0,
    data: {
      title: "certificates-heading",
      selector: "#certHeading",
      text: "Curiosity, with receipts.",
      html: "Curiosity, with receipts."
    }
  },
  {
    id: "creative-heading",
    kind: "pages",
    position: 105,
    hidden: false,
    revision: 0,
    data: {
      title: "creative-heading",
      selector: "#beyondHeading",
      text: "A little less logic.\nA little more feeling.",
      html: "A little less logic.<br>A little more feeling."
    }
  },
  {
    id: "contact-heading",
    kind: "pages",
    position: 106,
    hidden: false,
    revision: 0,
    data: {
      title: "contact-heading",
      selector: "#contact h2",
      text: "Let\u2019s make\nsomething useful.",
      html: "Let\u2019s make<br>something <em>useful.</em>"
    }
  },
  {
    kind: "projects",
    id: "project_1010",
    data: {
      title: "Selenium E-Commerce Automation",
      category: "software-iot",
      lead: "A purchase flow tested with evidence at every step.",
      description: "A Python and Selenium automation script for a public e-commerce test site. It loads test data from JSON, uses explicit waits, handles popups, verifies the cart and generates a linked HTML execution report with real screenshots.",
      tags: "Python, Selenium, ChromeDriver, webdriver-manager, JSON",
      image: "assets/projects/repo-screenshots/WIPRO_COE_CLASS/search_results_20260923_173739.png",
      link: "https://github.com/Saptarshi-Mandal-1234/WIPRO-Selenium-ecommerce-automation-capstone-project",
      caseUrl: "case-studies/selenium-ecommerce.html",
      html: '<article class="card project-card" id="project_1010" data-category="software-iot" data-reveal><a class="project-preview" href="case-studies/selenium-ecommerce.html"><img loading="lazy" src="assets/projects/repo-screenshots/WIPRO_COE_CLASS/search_results_20260923_173739.png" alt="Selenium capstone search results screenshot from Wipro COE repository"></a><div class="project-meta"><span>QA AUTOMATION</span><span>10 /</span></div><h3>Selenium E-Commerce Automation</h3><p class="project-lead">A purchase flow tested with evidence at every step.</p><p class="muted">A Python and Selenium automation script for a public e-commerce test site. It loads test data from JSON, uses explicit waits, handles popups, verifies the cart and generates a linked HTML execution report with real screenshots.</p><dl class="project-highlights"><div><dt>verified checks</dt><dd>6 pass</dd></div><div><dt>latest run</dt><dd>65.8s</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">Selenium</span><span class="tag">ChromeDriver</span><span class="tag">JSON</span></div><div class="card-actions"><a class="btn-details" href="case-studies/selenium-ecommerce.html">View test evidence \u2192</a><button type="button" class="btn-details" data-project="project_1010" aria-haspopup="dialog">Quick details \u2192</button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/WIPRO-Selenium-ecommerce-automation-capstone-project" target="_blank" rel="noopener noreferrer">View capstone repo <span aria-hidden="true">\u2197</span></a><a href="https://github.com/Saptarshi-Mandal-1234/WIPRO_COE_CLASS" target="_blank" rel="noopener noreferrer">Wipro COE repo \u2197</a></div></article>',
      caseText: "The assignment\n\nAutomate a realistic e-commerce flow while demonstrating browser setup, login handling, product search, cart interaction, test-data loading, popup handling, screenshots and reporting.\n\nImplementation\n\nThe Python script reads configuration from data/test_data.json and uses Selenium WebDriver, webdriver-manager and explicit waits. A TestReport class records each step with a timestamp, status, message and screenshot link, then renders a standalone HTML report.\n\nLatest run\n\nThe saved 22 September 2026 report completed in 65.82 seconds: six PASS checks, zero FAIL checks, one SKIP and three informational entries. Searching \u201CTop\u201D returned 14 results; the script added Blue Top and verified its product, price, quantity and total in the cart.\n\nExpected exceptions\n\nPlaceholder credentials were rejected by the public demo site, so login was recorded as SKIP and the guest checkout flow continued. The cart quantity was not editable after addition on this site, which the script records as INFO rather than a false failure.\n\nEvidence\n\nThe project includes timestamped browser screenshots and the generated execution report. It has not been converted into a multi-test Page Object Model or CI test suite yet."
    },
    position: 9,
    hidden: false,
    revision: 0
  }
];

// server/templates.json
var templates_default = { home: '<!DOCTYPE html>\r\n<html lang="en" data-theme="dark">\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">\r\n  <meta name="theme-color" content="#080808">\n  <meta name="description" content="Meet Saptarshi Mandal: IEM Kolkata CST undergrad combining data science, Python and SQL with experience in PR, content and visual storytelling. Open to internships.">\r\n  <title>Saptarshi Mandal | Data &amp; Software Portfolio</title>\r\n  <link rel="stylesheet" href="styles.css">\r\n  <script src="script.js" defer><\/script>\r\n  <link rel="stylesheet" href="/carousels.css">\r\n  <script type="module" src="/carousels.js"><\/script>\r\n</head>\r\n<body>\r\n<a class="skip-link" href="#main">Skip to content</a>\r\n\r\n<nav id="mainNav" aria-label="Main navigation">\r\n  <div class="wrap nav-inner">\r\n    <a class="brand" id="brandLink" href="#top">\r\n      <span class="monogram">SM<span>.</span></span>\r\n      <span>Saptarshi Mandal</span>\r\n    </a>\r\n    <div class="nav-actions">\r\n      <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="navLinks" hidden>Menu <span aria-hidden="true">\u2630</span></button>\r\n    </div>\r\n    <ul class="nav-links" id="navLinks">\r\n      <li><a href="#about">About</a></li>\r\n      <li><a href="#projects">Projects</a></li>\r\n      <li><a href="#skills">Skills</a></li>\r\n      <li><a href="#certifications">Certificates</a></li>\r\n      <li><a href="#beyond-code">Beyond the Code</a></li>\r\n      <li><a class="nav-contact" href="#contact">Let\u2019s connect <span aria-hidden="true">\u2197</span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<header class="hero" id="top">\r\n  <div class="wrap hero-grid">\r\n    <div data-reveal>\r\n      <h1>Find the signal.<br>Tell the <em>story.</em></h1>\r\n      <p class="hero-intro">I\u2019m Saptarshi, a CST undergrad at IEM Kolkata with an analytical mind and a creative streak. I explore data with Python and SQL, shape stories through design and content, and bring a year of PR experience to how I communicate. Now, I\u2019m looking for an internship where I can put that mix to work.</p>\r\n<div class="hero-socials" aria-label="Professional profiles"><a href="https://www.linkedin.com/in/saptarshi-mandal-cs" target="_blank" rel="noopener noreferrer">Connect on LinkedIn \u2197</a><a href="https://github.com/Saptarshi-Mandal-1234" target="_blank" rel="noopener noreferrer">Explore my GitHub \u2197</a></div>\r\n      <p class="hero-role">DATA ANALYST / BUSINESS ANALYST / SOFTWARE</p>\r\n      <div class="actions">\r\n        <a id="viewProjectsBtn" class="btn btn-primary" href="#projects">Explore my work <span aria-hidden="true">\u2197</span></a>\r\n        <a id="downloadResume" class="text-link" href="resume-live.html" target="_blank" rel="noopener">Generate live resume (PDF) <span aria-hidden="true">\u2193</span></a>\n        <a class="text-link resume-fallback" href="Saptarshi_Mandal_DataAnalyst_Resume.pdf" download>Download saved resume <span aria-hidden="true">\u2193</span></a>\n      </div>\r\n    </div>\r\n    <aside class="focus-panel" aria-label="Areas of focus" data-reveal>\r\n      <div class="panel-label">&gt; human.skills <span aria-hidden="true">_</span></div>\r\n      <div class="focus-row">\r\n        <span>01</span>\r\n        <div>\r\n          <h2>Analyze.</h2>\r\n          <p>Find the story in the data.</p>\r\n        </div>\r\n      </div>\r\n      <div class="focus-row">\r\n        <span>02</span>\r\n        <div>\r\n          <h2>Explain.</h2>\r\n          <p>Make insights useful and clear.</p>\r\n        </div>\r\n      </div>\r\n      <div class="focus-row">\r\n        <span>03</span>\r\n        <div>\r\n          <h2>Build.</h2>\r\n          <p>Connect ideas to working systems.</p>\r\n        </div>\r\n      </div>\r\n      <div class="panel-bottom">DATA \xB7 CODE \xB7 PRACTICAL PROBLEMS</div>\r\n    </aside>\r\n  </div>\r\n  <div class="wrap hero-bottom">\r\n    <span>Python / SQL / Machine Learning</span>\r\n    <a href="#about">Scroll to explore \u2193</a>\r\n  </div>\r\n</header>\r\n\r\n<main id="main">\r\n  <section id="about">\r\n    <div class="wrap about-grid">\r\n      <div data-reveal>\r\n        <div class="eyebrow" data-scramble="01 / A LITTLE ABOUT ME">01 / A LITTLE ABOUT ME</div>\r\n        <h2>An analytical mind.<br>A creative streak.</h2>\r\n        <figure class="about-portrait"><img src="assets/saptarshi-portrait.png" alt="Saptarshi Mandal wearing a blazer" width="1106" height="1422" loading="lazy" decoding="async"><figcaption><span>SAPTARSHI MANDAL</span><span>Data \xB7 Code \xB7 Creative thinking</span></figcaption></figure>\r\n      </div>\r\n      <div class="about-copy" data-reveal>\r\n        <p>I\u2019m building a career where data science meets clear communication. At IEM Kolkata, I\u2019m deepening my skills in Python, SQL, machine learning and cloud computing. Outside the classroom, I\u2019ve learned how to turn an idea into a story people pay attention to.</p>\r\n        <p class="muted"><strong>A year of taking ownership.</strong> As Public Relations Manager at NebulaPioneers, I built external communications, brand narratives and outreach strategy from the ground up. Alongside that, I managed LinkedIn content for Ureckon, UEM Kolkata\u2019s flagship tech event, creating content for student and recruiter communities.</p>\r\n        <p class="muted"><strong>A creative edge, put to work.</strong> My experience at CollegeTips.in brought together content writing and graphic design with Adobe Photoshop. It\u2019s a perspective I bring to technical work too: ask better questions, find what matters, and make it easy for someone else to understand.</p>\r\n        <p class="muted"><strong>Curiosity with a track record.</strong> Completed Google Cloud Foundations through LinkedIn Learning. ATL Marathon 2020: Top 10 in West Bengal and Top 300 nationally. And still learning \u2014 through hands-on projects and self-driven study.</p>\r\n        <p class="muted"><strong>What I\u2019m looking for next:</strong> an internship in data science, analytics or cloud computing where I can contribute to real problems, learn from an experienced team, and bring both analytical thinking and visual storytelling to the table.</p>\r\n        <div class="about-facts">\r\n          <div>\r\n            <span>EDUCATION</span>\r\n            <strong>IEM, Kolkata</strong>\r\n            <p>B.Tech, CST \xB7 2023\u20132027</p><p>CGPA: 8.4 through Semester V</p>\r\n          </div>\r\n          <div>\r\n            <span>ROLE INTERESTS</span>\r\n            <strong>Data &amp; software</strong>\r\n            <p>Analytics \xB7 Business insights \xB7 Development</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id="projects">\r\n    <div class="wrap">\r\n      <div class="section-head" data-reveal>\r\n        <div>\r\n          <div class="eyebrow" data-scramble="02 / SELECTED WORK">02 / SELECTED WORK</div>\r\n          <h2>Ideas put into practice.</h2>\r\n        </div>\r\n        <p>From people analytics to connected systems \u2014 a selection of my academic projects.</p>\r\n      </div>\r\n\r\n      <p id="filterStatus" class="filter-status" role="status" aria-live="polite">Showing all 9 projects</p>\n      <p id="githubSyncStatus" class="github-sync-status" role="status" aria-live="polite">Checking the latest public repositories on GitHub\u2026</p>\n      <div class="project-filters" role="group" aria-label="Filter projects by category" data-reveal>\r\n        <span class="filter-label">Filter projects:</span>\r\n        <div class="filter-btn-group">\r\n          <button type="button" class="filter-btn is-active" data-filter="all" aria-pressed="true">All</button>\r\n          <button type="button" class="filter-btn" data-filter="data-ml" aria-pressed="false">Data &amp; ML</button>\r\n          <button type="button" class="filter-btn" data-filter="software-iot" aria-pressed="false">Software &amp; IoT</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="project-grid">\r\n        <article class="card project-card featured-project" id="project_101" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/hr-attrition.html"><img loading="lazy" src="assets/projects/hr-dashboard.png" alt="HR Employee Attrition Analysis project output"></a><div class="project-meta"><span>FEATURED \xB7 DATA ANALYTICS</span><span>01 /</span></div>\r\n          <h3>HR Employee Attrition Analysis</h3><p class="project-lead">From employee patterns to workforce decisions.</p><p class="muted">Analyzed 1,470 IBM HR records to identify attrition drivers and score employee risk. A logistic regression model achieved 77.7% accuracy and 0.81 ROC-AUC on held-out test data, with risk-scored exports and a Power BI dashboard build guide.</p>\r\n          <dl class="project-highlights"><div><dt>employee records</dt><dd>1,470</dd></div><div><dt>test ROC-AUC</dt><dd>0.81</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Power BI (DAX)</span><span class="tag">Scikit-learn</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/hr-attrition.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_101" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_202" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/credit-risk.html"><img loading="lazy" src="assets/projects/credit-dashboard.png" alt="Loan Default &amp; Credit Risk Analysis project output"></a><div class="project-meta"><span>MACHINE LEARNING</span><span>02 /</span></div>\r\n          <h3>Loan Default &amp; Credit Risk Analysis</h3><p class="project-lead">Making risk easier to understand.</p><p class="muted">Analyzed 32,000+ loan applications using Logistic Regression, Random Forest and Gradient Boosting. Achieved 80.6% accuracy and 0.876 ROC-AUC, with model comparisons and a Tableau dashboard.</p>\r\n          <dl class="project-highlights"><div><dt>loan applications</dt><dd>32k+</dd></div><div><dt>ROC-AUC</dt><dd>0.876</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Logistic Regression</span><span class="tag">Tableau</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/credit-risk.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_202" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_303" data-category="software-iot" data-reveal>\n          <div class="project-meta"><span>SOFTWARE &amp; SECURITY</span><span>03 /</span></div>\n          <a class="project-preview" href="https://github.com/Saptarshi-Mandal-1234/MediVault-Frontend" target="_blank" rel="noopener noreferrer" aria-label="Open the MediVault frontend repository">\n            <img src="assets/projects/medivault-frontend.svg" alt="MediVault frontend landing screen with patient, doctor, and login actions" loading="lazy">\n          </a>\n          <h3>MediVault</h3><p class="project-lead">Decentralized medical records.</p><p class="muted">Designed an Ethereum-based medical records system with IPFS storage for tamper-resistant access. Authored an accompanying research paper with a WannaCry-based case study.</p>\n          <dl class="project-highlights"><div><dt>access framework</dt><dd>Ethereum</dd></div><div><dt>record storage</dt><dd>IPFS</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Ethereum</span><span class="tag">IPFS</span><span class="tag">Blockchain</span></div>\r\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_303" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links project-repositories" aria-label="MediVault repositories"><a href="https://github.com/Saptarshi-Mandal-1234/MediVault-Frontend" target="_blank" rel="noopener noreferrer">Frontend <span aria-hidden="true">\u2197</span></a><a href="https://github.com/Saptarshi-Mandal-1234/MediVault-Backend" target="_blank" rel="noopener noreferrer">Backend <span aria-hidden="true">\u2197</span></a><a href="https://github.com/Saptarshi-Mandal-1234/metamask-auth" target="_blank" rel="noopener noreferrer">MetaMask auth <span aria-hidden="true">\u2197</span></a></div>\n        </article>\n\r\n        <article class="card project-card" id="project_404" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/smart-irrigation.html"><img loading="lazy" src="assets/projects/irrigation-circuit.png" alt="Arduino Uno substitute circuit in the irrigation browser simulation"></a>\r\n          <div class="project-meta"><span>CONNECTED SYSTEMS</span><span>04 /</span></div>\r\n          <h3>Automated Irrigation System</h3><p class="project-lead">Crop-aware watering. Sensor-driven control.</p><p class="muted">An ESP32 prototype that uses soil moisture and crop-specific thresholds to control a pump, with pH monitoring and a Bluetooth-linked web dashboard. Includes browser simulations; real-hardware validation is pending.</p>\r\n          <dl class="project-highlights"><div><dt>controller</dt><dd>ESP32 + BLE</dd></div><div><dt>current stage</dt><dd>Prototype</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">C++ / Arduino</span><span class="tag">ESP32 / BLE</span><span class="tag">Web Bluetooth</span></div>\r\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_404" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button><a class="btn" href="case-studies/smart-irrigation.html">Project overview</a></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_505" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/customer-churn.html"><img loading="lazy" src="assets/projects/churn-contracts.svg" alt="Customer Churn Analysis project output"></a><div class="project-meta"><span>DATA ANALYTICS</span><span>05 /</span></div>\r\n          <h3>Customer Churn Analysis</h3><p class="project-lead">From churn patterns to retention actions.</p><p class="muted">Analyzed approximately 7,043 Telco customer records in MySQL Workbench and built a Power BI dashboard with a prescriptive recommendation engine for targeted retention actions.</p>\r\n          <dl class="project-highlights"><div><dt>customer records</dt><dd>7,043</dd></div><div><dt>retention analysis</dt><dd>SQL + BI</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">SQL</span><span class="tag">MySQL Workbench</span><span class="tag">Power BI</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/customer-churn.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_505" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_606" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/mediassist.html"><img loading="lazy" src="assets/projects/mediassist-workspace.png" alt="MediAssist chatbot interface"></a><div class="project-meta"><span>SOFTWARE &amp; AI</span><span>06 /</span></div>\r\n          <h3>MediAssist AI</h3><p class="project-lead">A healthcare assistant built at a hackathon.</p><p class="muted">A healthcare chatbot prototype with four Gemini-powered modes, symptom-reference matching, and MongoDB-backed medication, appointment, mood and health tracking.</p>\r\n          <dl class="project-highlights"><div><dt>consultation modes</dt><dd>4</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Gemini API</span><span class="tag">MongoDB</span><span class="tag">Node.js / Express</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/mediassist.html">Read project overview \u2192</a><button type="button" class="btn-details" data-project="project_606" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://mediassist-chatbot.onrender.com/" target="_blank" rel="noopener noreferrer">Try live app \u2197</a><a href="https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot" target="_blank" rel="noopener noreferrer">View repository \u2197</a></div>\n        </article>\r\n        <article class="card project-card" id="project_707" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/ai-hr.html"><img loading="lazy" src="assets/projects/ai-hr-workspace.png" alt="AI HR workspace interface with HR specialty navigation"></a>\r\n          <div class="project-meta"><span>SOFTWARE &amp; AI</span><span>07 /</span></div>\r\n          <h3>AI HR Workspace</h3><p class="project-lead">From HR questions to structured action plans.</p><p class="muted">Built a Gemini-powered workspace for recruiting, onboarding, employee relations, performance, policy, people analytics and learning, with a Node.js backend and a browser interface.</p>\r\n          <dl class="project-highlights"><div><dt>HR specialty modes</dt><dd>8</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Node.js</span><span class="tag">JavaScript</span><span class="tag">Gemini API</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/ai-hr.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_707" aria-haspopup="dialog">Quick details \u2192</button></div>\n          <div class="project-links"><a href="https://ai-hr-rho-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Try live app \u2197</a><a href="https://github.com/Saptarshi-Mandal-1234/Ai-HR" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div></article>\n<article class="card project-card" id="project_808" data-category="data-ml" data-reveal><a class="project-preview" href="case-studies/marketpulse-ai.html"><img loading="lazy" src="assets/projects/marketpulse-stock-explorer.png" alt="MarketPulse Stock Explorer showing adjusted price history and observed trading volume"></a><div class="project-meta"><span>DATA ENGINEERING &amp; ML</span><span>08 /</span></div><h3>MarketPulse AI Foundation</h3><p class="project-lead">Market research built to be reproducible.</p><p class="muted">An Indian-equity research pipeline connecting daily price data, exchange-session validation, technical features, PostgreSQL analytics and Power BI reporting. Evaluates forecasts against simple baselines.</p><dl class="project-highlights"><div><dt>technical features</dt><dd>39</dd></div><div><dt>report pages</dt><dd>7</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">PostgreSQL</span><span class="tag">Power BI</span><span class="tag">Scikit-learn</span></div><div class="card-actions"><a class="btn-details" href="case-studies/marketpulse-ai.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_808" aria-haspopup="dialog">Quick details \u2192</button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai" target="_blank" rel="noopener noreferrer">View repository \u2197</a></div></article>\n<article class="card project-card" id="project_909" data-category="data-ml" data-reveal><a class="project-preview" href="case-studies/procurement-advisor.html"><img loading="lazy" src="assets/projects/procurement-overview.png" alt="Actual AI Procurement Cost-Savings Advisor executive dashboard screenshot"></a><div class="project-meta"><span>DATA ANALYTICS &amp; AI</span><span>09 /</span></div><h3>AI Procurement Cost-Savings Advisor</h3><p class="project-lead">Turn procurement data into evidence-backed action.</p><p class="muted">A three-page Streamlit dashboard that connects purchase orders, supplier records and product benchmarks to reveal delivery risk, cost variance and savings scenarios. Built-in negotiation briefs and CFO-ready summaries work with optional AI or reliable rule-based fallbacks.</p><dl class="project-highlights"><div><dt>orders analysed</dt><dd>2,000</dd></div><div><dt>suppliers profiled</dt><dd>100</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">Streamlit</span><span class="tag">Pandas</span><span class="tag">Plotly</span></div><div class="card-actions"><button type="button" class="btn-details" data-project="project_909" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/ai-procurement-cost-savings-advisor" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div></article>\n<article class="card project-card" id="project_1010" data-category="software-iot" data-reveal><a class="project-preview" href="case-studies/selenium-ecommerce.html"><img loading="lazy" src="assets/projects/repo-screenshots/WIPRO_COE_CLASS/search_results_20260923_173739.png" alt="Selenium capstone search results screenshot from Wipro COE repository"></a><div class="project-meta"><span>QA AUTOMATION</span><span>10 /</span></div><h3>Selenium E-Commerce Automation</h3><p class="project-lead">A purchase flow tested with evidence at every step.</p><p class="muted">A Python and Selenium automation script for a public e-commerce test site. It loads test data from JSON, uses explicit waits, handles popups, verifies the cart and generates a linked HTML execution report with real screenshots.</p><dl class="project-highlights"><div><dt>verified checks</dt><dd>6 pass</dd></div><div><dt>latest run</dt><dd>65.8s</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">Selenium</span><span class="tag">ChromeDriver</span><span class="tag">JSON</span></div><div class="card-actions"><a class="btn-details" href="case-studies/selenium-ecommerce.html">View test evidence \u2192</a><button type="button" class="btn-details" data-project="project_1010" aria-haspopup="dialog">Quick details \u2192</button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/WIPRO-Selenium-ecommerce-automation-capstone-project" target="_blank" rel="noopener noreferrer">View capstone repo <span aria-hidden="true">\u2197</span></a><a href="https://github.com/Saptarshi-Mandal-1234/WIPRO_COE_CLASS" target="_blank" rel="noopener noreferrer">Wipro COE repo \u2197</a></div></article>\n\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id="skills">\r\n    <div class="wrap">\r\n      <div class="section-head" data-reveal>\r\n        <div>\r\n          <div class="eyebrow" data-scramble="03 / TOOLKIT">03 / TOOLKIT</div>\r\n          <h2>What I work with.</h2>\r\n        </div>\r\n        <p>Skills from my projects, resume and continued learning. Explore by role, then open a supporting certificate to inspect the course record.</p>\r\n      </div>\r\n      <div id="skillControls" class="skill-controls" role="group" aria-label="Explore skills by role" hidden>\r\n        <button class="skill-filter" type="button" data-skill-filter="all" aria-pressed="true">All skills</button>\r\n        <button class="skill-filter" type="button" data-skill-filter="data" aria-pressed="false">Data analyst</button>\r\n        <button class="skill-filter" type="button" data-skill-filter="software" aria-pressed="false">Software &amp; cloud</button>\r\n        <button class="skill-filter" type="button" data-skill-filter="business" aria-pressed="false">Business &amp; communication</button>\r\n      </div>\r\n      <p id="skillStatus" class="muted" role="status" aria-live="polite">8 skill areas \xB7 Click connected certificates or expand evidence to verify.</p>\n      <aside id="githubSkillSnapshot" class="github-skill-snapshot" aria-live="polite" hidden></aside>\n      <div class="grid" id="skillsGrid">\r\n        <article class="card skill-card" data-skill-roles="data business">\r\n          <span class="skill-number">01 /</span>\r\n          <h3>Data analysis &amp; SQL</h3>\r\n          <p class="muted">Clean, query and explore data before drawing conclusions.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Python</span>\r\n            <span class="tag">Pandas</span>\r\n            <span class="tag">NumPy</span>\r\n            <span class="tag">SQL joins</span>\r\n            <span class="tag">CTEs</span>\r\n            <span class="tag">Window functions</span>\r\n            <span class="tag">EDA</span>\r\n            <span class="tag">Data cleaning</span>\r\n            <span class="tag">Statistical analysis</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to SQL <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics with AI <span class="cert-pill-issuer">IBM SkillsBuild \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics: 1 Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: data and analytics toolkit; IBM HR attrition (1,470 records) and Telco customer churn (7,043 records) projects.</p>\r\n            <a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View SQL Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="data business">\r\n          <span class="skill-number">02 /</span>\r\n          <h3>Dashboards &amp; business intelligence</h3>\r\n          <p class="muted">Turn analysis into decisions people can see and use.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Power BI</span>\r\n            <span class="tag">DAX</span>\r\n            <span class="tag">Power Query</span>\r\n            <span class="tag">Tableau</span>\r\n            <span class="tag">Excel</span>\r\n            <span class="tag">Pivot tables</span>\r\n            <span class="tag">VLOOKUP</span>\r\n            <span class="tag">KPI reporting</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener" class="cert-pill">Power BI Job Simulation <span class="cert-pill-issuer">PwC \xB7 Forage \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Skills Job Simulation <span class="cert-pill-issuer">JPMorgan Chase \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Essential Training <span class="cert-pill-issuer">NASBA CPE \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: Power BI and Tableau dashboards for HR attrition risk and loan risk analysis.</p>\r\n            <a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View Power BI Job Simulation \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="data software">\r\n          <span class="skill-number">03 /</span>\r\n          <h3>Machine learning &amp; AI</h3>\r\n          <p class="muted">Explore predictive models and explain what drives their results.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Scikit-learn</span>\r\n            <span class="tag">Logistic regression</span>\r\n            <span class="tag">Random Forest</span>\r\n            <span class="tag">XGBoost</span>\r\n            <span class="tag">SHAP</span>\r\n            <span class="tag">K-Means</span>\r\n            <span class="tag">Generative AI</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener" class="cert-pill">GenAI Powered Analytics <span class="cert-pill-issuer">Tata \xB7 Forage \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener" class="cert-pill">Career Essentials in GenAI <span class="cert-pill-issuer">Microsoft &amp; LinkedIn \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to Generative AI <span class="cert-pill-issuer">Google Cloud \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: Loan Default risk analysis (32k+ applications, 0.876 ROC-AUC) and HR attrition risk scoring.</p>\r\n            <a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View Tata GenAI Analytics \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="data business">\r\n          <span class="skill-number">04 /</span>\r\n          <h3>Business analysis</h3>\r\n          <p class="muted">Connect a business question to requirements, measures and recommendations.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Requirements gathering</span>\r\n            <span class="tag">Process analysis</span>\r\n            <span class="tag">A/B testing</span>\r\n            <span class="tag">ETL pipelines</span>\r\n            <span class="tag">Data storytelling</span>\r\n            <span class="tag">Stakeholder communication</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener" class="cert-pill">Business Analysis Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener" class="cert-pill">Create a Project Charter <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener" class="cert-pill">Leadership Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: business analysis toolkit, KPI frameworks, and prescriptive recommendation engine for customer retention.</p>\r\n            <a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View Business Analysis Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="software">\r\n          <span class="skill-number">05 /</span>\r\n          <h3>Software &amp; connected systems</h3>\r\n          <p class="muted">Build around APIs, databases and real-world inputs.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Node.js</span>\r\n            <span class="tag">Express</span>\r\n            <span class="tag">MongoDB</span>\r\n            <span class="tag">Gemini API</span>\r\n            <span class="tag">Ethereum</span>\r\n            <span class="tag">IPFS</span>\r\n            <span class="tag">Arduino</span>\r\n            <span class="tag">Raspberry Pi</span>\r\n            <span class="tag">Git / GitHub</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener" class="cert-pill">Software Architecture <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener" class="cert-pill">AI with GitHub Copilot <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener" class="cert-pill">Electronics: Basic Circuits <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume projects: MediAssist AI (Gemini + MongoDB), MediVault (Ethereum/IPFS), and Automated Irrigation System.</p>\r\n            <a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View Software Architecture \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="software">\r\n          <span class="skill-number">06 /</span>\r\n          <h3>Cloud &amp; security foundations</h3>\r\n          <p class="muted">Developing foundations in cloud platforms and secure systems.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Google Cloud foundations</span>\r\n            <span class="tag">Azure Cognitive Services</span>\r\n            <span class="tag">Network security</span>\r\n            <span class="tag">Cryptography</span>\r\n            <span class="tag">Cybersecurity fundamentals</span>\r\n            <span class="tag">Linux</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener" class="cert-pill">Google Cloud Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener" class="cert-pill">Vision with Azure Cognitive Services <span class="cert-pill-issuer">Microsoft \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener" class="cert-pill">Cisco Network Security <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Course learning: Google Cloud Foundations, Azure computer vision, Applied Cryptography (CU Boulder) and Cisco network security.</p>\r\n            <a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View Google Cloud Foundations \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="business">\r\n          <span class="skill-number">07 /</span>\r\n          <h3>Design &amp; communication</h3>\r\n          <p class="muted">Make technical ideas clear, visual and worth paying attention to.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Adobe Photoshop</span>\r\n            <span class="tag">Content writing</span>\r\n            <span class="tag">Content marketing</span>\r\n            <span class="tag">Public relations</span>\r\n            <span class="tag">Visual storytelling</span>\r\n            <span class="tag">Public speaking</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener" class="cert-pill">Photoshop: New AI Features <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener" class="cert-pill">Advanced Content Marketing <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener" class="cert-pill">Design Course Collateral <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Experience: PR Manager at NebulaPioneers, LinkedIn content for Ureckon tech event, design at CollegeTips.in.</p>\r\n            <a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View Photoshop Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="business software">\r\n          <span class="skill-number">08 /</span>\r\n          <h3>Delivery &amp; collaboration</h3>\r\n          <p class="muted">Organize work and communicate across a team.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Agile concepts</span>\r\n            <span class="tag">Leadership</span>\r\n            <span class="tag">Teamwork</span>\r\n            <span class="tag">Time management</span>\r\n            <span class="tag">Problem solving</span>\r\n            <span class="tag">MATLAB</span>\r\n            <span class="tag">Microsoft Copilot</span>\r\n            <span class="tag">MS Office</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener" class="cert-pill">Agile Project Management <span class="cert-pill-issuer">HP LIFE \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener" class="cert-pill">Learning MATLAB <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener" class="cert-pill">Efficient Time Management <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume tools and core competencies; Agile methodologies, leadership and technical computing coursework.</p>\r\n            <a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View Agile Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id="certifications" aria-labelledby="certHeading"><div class="wrap">\r\n<div class="section-head"><div><div class="eyebrow">04 / ALWAYS LEARNING</div><h2 id="certHeading">Curiosity, with receipts.</h2></div><p>Explore technical learning, university activities, event contributions and innovation achievements.</p></div>\r\n<p class="muted">Four collections: Tech, UEM, IITM and ATL. Browse one group at a time, then search its certificates. Team awards and participation records are labeled separately.</p>\r\n<div id="certificateControls" hidden><div class="cert-filters certificate-groups" role="group" aria-label="Certificate collections"><button type="button" class="cert-filter" data-cert-group-filter="tech" aria-pressed="true">Tech <span>(38)</span></button><button type="button" class="cert-filter" data-cert-group-filter="uem" aria-pressed="false">UEM <span>(7)</span></button><button type="button" class="cert-filter" data-cert-group-filter="iitm" aria-pressed="false">IITM <span>(11)</span></button><button type="button" class="cert-filter" data-cert-group-filter="atl" aria-pressed="false">ATL <span>(6)</span></button></div><label class="cert-search-label" for="certificateSearch">Find a certificate</label><input id="certificateSearch" type="search" placeholder="Try Power BI, Google or leadership\u2026" autocomplete="off"><div id="techCertificateFilters" class="cert-filters" role="group" aria-label="Filter Tech certificates"><button type="button" class="cert-filter" data-cert-filter="all" aria-pressed="true">All</button><button type="button" class="cert-filter" data-cert-filter="data" aria-pressed="false">Data &amp; analytics</button><button type="button" class="cert-filter" data-cert-filter="ai" aria-pressed="false">AI &amp; cloud</button><button type="button" class="cert-filter" data-cert-filter="systems" aria-pressed="false">Security &amp; systems</button><button type="button" class="cert-filter" data-cert-filter="creative" aria-pressed="false">Design &amp; content</button><button type="button" class="cert-filter" data-cert-filter="business" aria-pressed="false">Leadership &amp; business</button></div></div>\r\n<p id="certificateStatus" role="status" aria-live="polite">62 certificate documents across four collections</p><div class="certificate-grid"><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-18.pdf" target="_blank" rel="noopener" aria-label="View Data Analytics with AI \u2014 Academic Internship certificate (PDF, new tab)"><img src="certificates/certificate-18.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Data Analytics with AI \u2014 Academic Internship certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Academic internship</span><h3>Data Analytics with AI \u2014 Academic Internship</h3><p class="cert-issuer">IBM SkillsBuild \xB7 AICTE \xB7 BharatCares</p><div class="cert-actions"><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-18.pdf" download="Saptarshi-Mandal-Data-Analytics-with-AI-Academic-Internship-18.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-16.pdf" target="_blank" rel="noopener" aria-label="View PwC Switzerland Power BI Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-16.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of PwC Switzerland Power BI Job Simulation certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>PwC Switzerland Power BI Job Simulation</h3><p class="cert-issuer">PwC Switzerland \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-16.pdf" download="Saptarshi-Mandal-PwC-Switzerland-Power-BI-Job-Simulation-16.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-17.pdf" target="_blank" rel="noopener" aria-label="View TATA GenAI Powered Data Analytics Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-17.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of TATA GenAI Powered Data Analytics Job Simulation certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>TATA GenAI Powered Data Analytics Job Simulation</h3><p class="cert-issuer">Tata \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-17.pdf" download="Saptarshi-Mandal-TATA-GenAI-Powered-Data-Analytics-Job-Simulation-17.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-20.pdf" target="_blank" rel="noopener" aria-label="View Introduction to SQL certificate (PDF, new tab)"><img src="certificates/certificate-20.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to SQL certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to SQL</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-20.pdf" download="Saptarshi-Mandal-Introduction-to-SQL-20.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-15.pdf" target="_blank" rel="noopener" aria-label="View JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-15.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>JPMorgan Chase &amp; Co. Excel Skills Job Simulation</h3><p class="cert-issuer">JPMorgan Chase &amp; Co. \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-15.pdf" download="Saptarshi-Mandal-JPMorgan-Chase-Co-Excel-Skills-Job-Simulation-15.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-34.pdf" target="_blank" rel="noopener" aria-label="View Learning Data Analytics: 1 Foundations certificate (PDF, new tab)"><img src="certificates/certificate-34.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning Data Analytics: 1 Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning Data Analytics: 1 Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-34.pdf" download="Saptarshi-Mandal-Learning-Data-Analytics-1-Foundations-34.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-29.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-29.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-29.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-29.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--29.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-23.pdf" target="_blank" rel="noopener" aria-label="View Business Analysis Foundations certificate (PDF, new tab)"><img src="certificates/certificate-23.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Business Analysis Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Business Analysis Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-23.pdf" download="Saptarshi-Mandal-Business-Analysis-Foundations-23.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-24.pdf" target="_blank" rel="noopener" aria-label="View Career Essentials in Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-24.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Career Essentials in Generative AI certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Career Essentials in Generative AI</h3><p class="cert-issuer">Microsoft &amp; LinkedIn</p><div class="cert-actions"><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-24.pdf" download="Saptarshi-Mandal-Career-Essentials-in-Generative-AI-24.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-06.pdf" target="_blank" rel="noopener" aria-label="View Build a computer vision app with Azure Cognitive Services certificate (PDF, new tab)"><img src="certificates/certificate-06.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Build a computer vision app with Azure Cognitive Services certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Build a computer vision app with Azure Cognitive Services</h3><p class="cert-issuer">Microsoft \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-06.pdf" download="Saptarshi-Mandal-Build-a-computer-vision-app-with-Azure-Cognitive-Services-6.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-30.pdf" target="_blank" rel="noopener" aria-label="View Google Cloud Foundations certificate (PDF, new tab)"><img src="certificates/certificate-30.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Cloud Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Google Cloud Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-30.pdf" download="Saptarshi-Mandal-Google-Cloud-Foundations-30.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-33.pdf" target="_blank" rel="noopener" aria-label="View Learning AI with GitHub Copilot certificate (PDF, new tab)"><img src="certificates/certificate-33.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning AI with GitHub Copilot certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning AI with GitHub Copilot</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-33.pdf" download="Saptarshi-Mandal-Learning-AI-with-GitHub-Copilot-33.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-12.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-12.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Generative AI certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Generative AI</h3><p class="cert-issuer">Google Cloud \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-12.pdf" download="Saptarshi-Mandal-Introduction-to-Generative-AI-12.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-09.pdf" target="_blank" rel="noopener" aria-label="View Generative AI Essentials: Overview and Impact certificate (PDF, new tab)"><img src="certificates/certificate-09.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Generative AI Essentials: Overview and Impact certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Generative AI Essentials: Overview and Impact</h3><p class="cert-issuer">University of Michigan \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-09.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-09.pdf" download="Saptarshi-Mandal-Generative-AI-Essentials-Overview-and-Impact-9.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-19.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Software Architecture certificate (PDF, new tab)"><img src="certificates/certificate-19.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Software Architecture certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Software Architecture</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-19.pdf" download="Saptarshi-Mandal-Introduction-to-Software-Architecture-19.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-05.pdf" target="_blank" rel="noopener" aria-label="View Applied Cryptography certificate (PDF, new tab)"><img src="certificates/certificate-05.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Applied Cryptography certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Specialization</span><h3>Applied Cryptography</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-05.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-05.pdf" download="Saptarshi-Mandal-Applied-Cryptography-5.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-03.pdf" target="_blank" rel="noopener" aria-label="View Cisco Network Security: Safeguarding Network Integrity and Data certificate (PDF, new tab)"><img src="certificates/certificate-03.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cisco Network Security: Safeguarding Network Integrity and Data certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Cisco Network Security: Safeguarding Network Integrity and Data</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-03.pdf" download="Saptarshi-Mandal-Cisco-Network-Security-Safeguarding-Network-Integrity-and-Data-3.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-08.pdf" target="_blank" rel="noopener" aria-label="View Cyber Security Fundamentals certificate (PDF, new tab)"><img src="certificates/certificate-08.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cyber Security Fundamentals certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Cyber Security Fundamentals</h3><p class="cert-issuer">University of London \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-08.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-08.pdf" download="Saptarshi-Mandal-Cyber-Security-Fundamentals-8.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-04.pdf" target="_blank" rel="noopener" aria-label="View Advanced System Security Topics certificate (PDF, new tab)"><img src="certificates/certificate-04.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced System Security Topics certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced System Security Topics</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-04.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-04.pdf" download="Saptarshi-Mandal-Advanced-System-Security-Topics-4.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-11.pdf" target="_blank" rel="noopener" aria-label="View Information Theory certificate (PDF, new tab)"><img src="certificates/certificate-11.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Information Theory certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Information Theory</h3><p class="cert-issuer">The Chinese University of Hong Kong \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-11.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-11.pdf" download="Saptarshi-Mandal-Information-Theory-11.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-02.pdf" target="_blank" rel="noopener" aria-label="View AI Product Management Course certificate (PDF, new tab)"><img src="certificates/certificate-02.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of AI Product Management Course certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>AI Product Management Course</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-02.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-02.pdf" download="Saptarshi-Mandal-AI-Product-Management-Course-2.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-01.pdf" target="_blank" rel="noopener" aria-label="View Agile Project Management certificate (PDF, new tab)"><img src="certificates/certificate-01.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Agile Project Management certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Agile Project Management</h3><p class="cert-issuer">HP LIFE</p><div class="cert-actions"><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-01.pdf" download="Saptarshi-Mandal-Agile-Project-Management-1.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-35.pdf" target="_blank" rel="noopener" aria-label="View Learning MATLAB certificate (PDF, new tab)"><img src="certificates/certificate-35.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning MATLAB certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning MATLAB</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-35.pdf" download="Saptarshi-Mandal-Learning-MATLAB-35.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-32.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-32.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-32.pdf" download="Saptarshi-Mandal-Leadership-Foundations-32.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-38.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-38.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-38.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-38.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-38.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-22.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-22.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-22.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-22.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-22.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-36.pdf" target="_blank" rel="noopener" aria-label="View Photoshop 2024: New AI Features certificate (PDF, new tab)"><img src="certificates/certificate-36.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Photoshop 2024: New AI Features certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Photoshop 2024: New AI Features</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-36.pdf" download="Saptarshi-Mandal-Photoshop-2024-New-AI-Features-36.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-27.pdf" target="_blank" rel="noopener" aria-label="View Electronics Foundations: Basic Circuits certificate (PDF, new tab)"><img src="certificates/certificate-27.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Electronics Foundations: Basic Circuits certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Electronics Foundations: Basic Circuits</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-27.pdf" download="Saptarshi-Mandal-Electronics-Foundations-Basic-Circuits-27.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-26.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management certificate (PDF, new tab)"><img src="certificates/certificate-26.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Efficient Time Management</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-26.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-26.pdf" download="Saptarshi-Mandal-Efficient-Time-Management-26.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-07.pdf" target="_blank" rel="noopener" aria-label="View Create a Project Charter with Google Docs certificate (PDF, new tab)"><img src="certificates/certificate-07.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Create a Project Charter with Google Docs certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Create a Project Charter with Google Docs</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-07.pdf" download="Saptarshi-Mandal-Create-a-Project-Charter-with-Google-Docs-7.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-14.pdf" target="_blank" rel="noopener" aria-label="View Use Canva to Design Digital Course Collateral certificate (PDF, new tab)"><img src="certificates/certificate-14.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Use Canva to Design Digital Course Collateral certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Use Canva to Design Digital Course Collateral</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-14.pdf" download="Saptarshi-Mandal-Use-Canva-to-Design-Digital-Course-Collateral-14.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-13.pdf" target="_blank" rel="noopener" aria-label="View Search Engine Optimization (SEO) with Squarespace certificate (PDF, new tab)"><img src="certificates/certificate-13.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Search Engine Optimization (SEO) with Squarespace certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Search Engine Optimization (SEO) with Squarespace</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-13.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-13.pdf" download="Saptarshi-Mandal-Search-Engine-Optimization-SEO-with-Squarespace-13.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-10.pdf" target="_blank" rel="noopener" aria-label="View Google Ads for Beginners certificate (PDF, new tab)"><img src="certificates/certificate-10.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Ads for Beginners certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Google Ads for Beginners</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-10.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-10.pdf" download="Saptarshi-Mandal-Google-Ads-for-Beginners-10.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-28.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-28.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">NASBA CPE record</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-28.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--28.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-31.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-31.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-31.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-31.pdf" download="Saptarshi-Mandal-Leadership-Foundations-31.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-37.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-37.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-37.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-37.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-37.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-21.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-21.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-21.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-21.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-25.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management  certificate (PDF, new tab)"><img src="certificates/certificate-25.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management  certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Efficient Time Management </h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-25.pdf" download="Saptarshi-Mandal-Efficient-Time-Management--25.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-01.png" target="_blank" rel="noopener" aria-label="View Ecstasia 2025 certificate"><img src="certificates/uem-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ecstasia 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ecstasia 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-01.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-02.png" target="_blank" rel="noopener" aria-label="View Ureckon 2025 certificate"><img src="certificates/uem-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ureckon 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ureckon 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-02.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-03.png" target="_blank" rel="noopener" aria-label="View Nanotechnology: A Changing Face in Modern Era certificate"><img src="certificates/uem-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Nanotechnology: A Changing Face in Modern Era certificate"></a><div class="cert-body"><span class="cert-kind">Poster competition participation</span><h3>Nanotechnology: A Changing Face in Modern Era</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-03.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-04.png" target="_blank" rel="noopener" aria-label="View Aperture 2.0 certificate"><img src="certificates/uem-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Aperture 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Photography event organizing</span><h3>Aperture 2.0</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-04.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-05.png" target="_blank" rel="noopener" aria-label="View Reaching Out NGO community service certificate"><img src="certificates/uem-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Reaching Out NGO community service certificate"></a><div class="cert-body"><span class="cert-kind">Appreciation</span><h3>Reaching Out NGO community service</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-05.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-06.png" target="_blank" rel="noopener" aria-label="View Energy and Sustainability: A Social Mission certificate"><img src="certificates/uem-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Energy and Sustainability: A Social Mission certificate"></a><div class="cert-body"><span class="cert-kind">Seminar participation</span><h3>Energy and Sustainability: A Social Mission</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-06.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-07.png" target="_blank" rel="noopener" aria-label="View Internet of Things workshop certificate"><img src="certificates/uem-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Internet of Things workshop certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>Internet of Things workshop</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-07.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-01.png" target="_blank" rel="noopener" aria-label="View GenAI: Common use cases and solutions certificate"><img src="certificates/iitm-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="GenAI: Common use cases and solutions certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>GenAI: Common use cases and solutions</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-01.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-02.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Student Relations certificate"><img src="certificates/iitm-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Volunteer recognition</span><h3>Paradox 2024: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-02.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-03.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Games certificate"><img src="certificates/iitm-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Games certificate"></a><div class="cert-body"><span class="cert-kind">Event volunteer appreciation</span><h3>Paradox 2024: Squid Games</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-03.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-04.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Qutopia certificate"><img src="certificates/iitm-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Qutopia certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Qutopia</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-04.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-05.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Shutter Safari certificate"><img src="certificates/iitm-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Shutter Safari certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Shutter Safari</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-05.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-06.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: What\u2019s in a Meme certificate"><img src="certificates/iitm-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: What\u2019s in a Meme certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: What\u2019s in a Meme</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-06.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-07.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Fiction Flicks certificate"><img src="certificates/iitm-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Fiction Flicks certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Fiction Flicks</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-07.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-08.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Logic Loom 2.0 certificate"><img src="certificates/iitm-08.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Logic Loom 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Logic Loom 2.0</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-08.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-08.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-09.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Kampus Run certificate"><img src="certificates/iitm-09.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Kampus Run certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Kampus Run</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-09.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-09.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-10.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Game certificate"><img src="certificates/iitm-10.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Game certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Squid Game</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-10.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-10.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-11.png" target="_blank" rel="noopener" aria-label="View Paradox in Margazhi 2025: Student Relations certificate"><img src="certificates/iitm-11.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox in Margazhi 2025: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator recognition</span><h3>Paradox in Margazhi 2025: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-11.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-11.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-01.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Savvys certificate"><img src="certificates/atl-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Savvys certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2021\u201322: Savvys</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-01.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-03.png" target="_blank" rel="noopener" aria-label="View Student Innovator Program SIP 4.0 certificate"><img src="certificates/atl-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Student Innovator Program SIP 4.0 certificate"></a><div class="cert-body"><span class="cert-kind">Eight-week program completion</span><h3>Student Innovator Program SIP 4.0</h3><p class="cert-issuer">AIC-MIT ADT \xB7 Devise Electronics \xB7 Makers Lab</p><div class="cert-actions"><a href="certificates/atl-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-03.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-04.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Top 350 Teams certificate"><img src="certificates/atl-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Top 350 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2021\u201322: Top 350 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-04.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-05.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Team X B certificate"><img src="certificates/atl-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Team X B certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2020: Team X B</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-05.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-06.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 10 in West Bengal certificate"><img src="certificates/atl-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 10 in West Bengal certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 10 in West Bengal</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-06.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-07.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 300 Teams certificate"><img src="certificates/atl-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 300 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 300 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-07.png" download>Download \u2193</a></div></div></article></div><p id="certificateEmpty" hidden>No certificates match. Try another keyword or category.</p><button class="btn" id="certificateMore" type="button" hidden>Show more certificates</button></div></section>\r\n\r\n<section id="beyond-code" aria-labelledby="beyondHeading"><div class="wrap">\n<div class="beyond-grid">\n<div><p class="eyebrow">05 / BEYOND THE CODE</p><h2 id="beyondHeading">A little less logic.<br>A little more feeling.</h2><p class="beyond-intro">Creative work beyond the technical \u2014 poetry in English and Bengali today, with photography joining the collection next.</p><a class="btn btn-primary" href="poetry.html">Explore my poetry <span aria-hidden="true">\u2197</span></a><div class="poem-features" aria-label="Featured poems"><a href="poetry.html#poem-06">RAIN</a><a href="poetry.html#poem-12" lang="bn">\u09AE\u09BE</a><a href="poetry.html#poem-08">Flowers That Once Bloomed</a></div></div>\n<a class="poetry-cover" href="poetry.html" aria-label="Explore Saptarshi\u2019s poetry collection"><span class="poetry-cover-top">WORDS / SAPTARSHI MANDAL</span><span class="poetry-cover-title">Between<br>the lines<span aria-hidden="true">.</span></span><span class="poetry-cover-bottom">13 poems \xB7 English &amp; \u09AC\u09BE\u0982\u09B2\u09BE <span aria-hidden="true">\u2197</span></span></a>\n</div>\n<div class="photography-section" aria-labelledby="photographyHeading" data-reveal>\n  <div class="photography-head"><div><p class="eyebrow">PHOTOGRAPHY / COMING INTO FOCUS</p><h3 id="photographyHeading">The world, one frame at a time.</h3></div><p>A future collection of places, details and passing moments that made me stop and look twice.</p></div>\n  <div class="photography-grid" aria-live="polite">\n    <div class="photo-placeholder photo-placeholder-main"><span class="viewfinder" aria-hidden="true"></span><strong>Frames arriving soon</strong><small>Light \xB7 streets \xB7 stories</small></div>\n    <div class="photo-placeholder" aria-hidden="true"><span>01</span></div>\n    <div class="photo-placeholder" aria-hidden="true"><span>02</span></div>\n  </div>\n</div>\n</div></section>\n\r\n<section id="contact">\r\n    <div class="wrap contact-grid">\r\n      <div data-reveal>\r\n        <div class="eyebrow" data-scramble="06 / WHAT\u2019S NEXT?">06 / WHAT\u2019S NEXT?</div>\r\n        <h2>Let\u2019s make<br>something <em>useful.</em></h2>\r\n        <p>Looking for an intern who can explore the data and explain the story?<br>Let\u2019s talk about what we could build together.</p>\r\n        <div class="email-actions"><button id="copyEmail" class="btn" type="button" hidden>Copy email address</button><span id="copyStatus" role="status" aria-live="polite"></span></div>\r\n        <a class="email-link contact-link" href="mailto:saptarshi2005.kgp@gmail.com">saptarshi2005.kgp@gmail.com \u2197</a>\r\n      </div>\r\n      <div class="contact-links" data-reveal>\r\n        <a class="contact-link" href="https://www.linkedin.com/in/saptarshi-mandal-cs" target="_blank" rel="noopener noreferrer">LinkedIn <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://github.com/Saptarshi-Mandal-1234" target="_blank" rel="noopener noreferrer">GitHub <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://www.instagram.com/just_gogol/" target="_blank" rel="noopener noreferrer">Instagram <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://www.facebook.com/saptarshi.mandal.503/" target="_blank" rel="noopener noreferrer">Facebook <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://zajajabor.space/team/693ab352e76ad1b1813fae6d" target="_blank" rel="noopener noreferrer">Za Jajabor <span>\u2197</span></a>\r\n        <a href="#top">Back to top <span>\u2191</span></a>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n<dialog id="projectDialog" class="project-dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">\r\n  <div class="dialog-card">\r\n    <div class="dialog-header">\r\n      <span class="dialog-meta" id="dialogCategory">DATA ANALYTICS</span>\r\n      <button type="button" id="dialogCloseBtn" class="dialog-close-btn" aria-label="Close project details">\u2715</button>\r\n    </div>\r\n    <h2 id="dialogTitle" class="dialog-title">Project Title</h2>\r\n    <p id="dialogLead" class="dialog-lead">Project lead summary</p>\r\n    <p id="dialogDesc" class="dialog-desc">Project factual description</p>\r\n    <div class="dialog-tags-container">\r\n      <span class="dialog-tags-label">Technologies &amp; Skills:</span>\r\n      <div id="dialogTags" class="tag-list"></div>\r\n    </div>\r\n    <div class="dialog-footer">\r\n      <a id="dialogLink" class="btn btn-primary" href="https://github.com/Saptarshi-Mandal-1234" target="_blank" rel="noopener noreferrer">Explore GitHub profile <span aria-hidden="true">\u2197</span></a>\r\n      <button type="button" id="dialogCloseFooterBtn" class="btn btn-outline">Close</button>\r\n    </div>\r\n  </div>\r\n</dialog>\r\n\r\n<footer>\r\n  <div class="wrap">\r\n    <span>\xA9 2026 Saptarshi Mandal</span>\r\n    <span>Built with curiosity. And a little code. <a href="/admin">Admin</a></span>\r\n  </div>\r\n</footer>\r\n</body>\r\n</html>\n', poetry: '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Beyond the Code: a poetry space by Saptarshi Mandal. Visual poems in English and Bengali."><title>Poetry \xB7 Beyond the Code | Saptarshi Mandal</title><link rel="stylesheet" href="styles.css"><script src="poetry.js" defer><\/script></head><body class="poetry-page"><a class="skip-link" href="#poetryMain">Skip to content</a><header class="poetry-top wrap"><a class="text-link" href="index.html#beyond-code">\u2190 Back to portfolio</a><button class="cert-filter" id="readingTheme" type="button" aria-pressed="false">Light reading mode</button></header><main id="poetryMain" class="wrap poetry-main"><p class="eyebrow">BEYOND THE CODE / POETRY</p><h1>Between<br>the lines<span class="poetry-dot">.</span></h1><p class="poetry-deck">A space for words, pauses, and a different side of me.</p><div class="poetry-rule" aria-hidden="true"></div><section class="poetry-collection" aria-label="Poetry collection"><p class="poetry-deck">13 visual poems in English and Bengali. Open any poem full size to read its original design. Visible videos loop silently. Hover to pause; move away to resume. Reduced-motion preferences are respected.</p><div id="poemControls" class="cert-filters" role="group" aria-label="Poetry language" hidden><button class="cert-filter" type="button" data-language-filter="all" aria-pressed="true">All poems</button><button class="cert-filter" type="button" data-language-filter="en" aria-pressed="false">English</button><button class="cert-filter" type="button" data-language-filter="bn" aria-pressed="false">\u09AC\u09BE\u0982\u09B2\u09BE</button></div><p id="poemStatus" role="status" aria-live="polite">13 poems</p><div class="poem-grid"><article class="poem-card" id="poem-01" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-01.jpg" aria-label="That night was my sunshine"><source src="poems/poem-01.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">That night was my sunshine</h2><a class="text-link" href="poems/poem-01.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-02" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-02.jpg" aria-label="What I feel!!!"><source src="poems/poem-02.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">What I feel!!!</h2><a class="text-link" href="poems/poem-02.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-03" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-03.jpg" aria-label="The sea soothes my soul"><source src="poems/poem-03.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">The sea soothes my soul</h2><a class="text-link" href="poems/poem-03.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-04" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-04.jpg" aria-label="LOVE .. WHAT??"><source src="poems/poem-04.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">LOVE .. WHAT??</h2><a class="text-link" href="poems/poem-04.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-05" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-05.jpg" aria-label="Suffering??"><source src="poems/poem-05.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Suffering??</h2><a class="text-link" href="poems/poem-05.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-06" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-06.jpg" aria-label="RAIN"><source src="poems/poem-06.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">RAIN</h2><a class="text-link" href="poems/poem-06.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-07" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-07.jpg" aria-label="BEING LOVESICK"><source src="poems/poem-07.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">BEING LOVESICK</h2><a class="text-link" href="poems/poem-07.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-08" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-08.jpg" aria-label="FLOWERS THAT ONCE BLOOMED"><source src="poems/poem-08.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">FLOWERS THAT ONCE BLOOMED</h2><a class="text-link" href="poems/poem-08.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-09" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-09.jpg" aria-label="Solitary"><source src="poems/poem-09.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Solitary</h2><a class="text-link" href="poems/poem-09.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-10" data-language="bn"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-10.jpg" aria-label="\u09AC\u09BE\u09AC\u09BE"><source src="poems/poem-10.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AC\u09BE\u09AC\u09BE</h2><a class="text-link" href="poems/poem-10.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-11" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-11.jpg" aria-label="I am a son"><source src="poems/poem-11.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">I am a son</h2><a class="text-link" href="poems/poem-11.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-12" data-language="bn"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-12.jpg" aria-label="\u09AE\u09BE"><source src="poems/poem-12.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AE\u09BE</h2><a class="text-link" href="poems/poem-12.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-13" data-language="bn"><div class="poem-media"><a href="poems/poem-13.png" target="_blank" rel="noopener"><img src="poems/poem-13.png" alt="Bengali visual poem: \u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB" loading="lazy"></a></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / VISUAL VERSE</span><h2 lang="bn">\u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB</h2><a class="text-link" href="poems/poem-13.png" target="_blank" rel="noopener">Open original \u2197</a></div></article></div></section></main><footer><div class="wrap"><span>\xA9 2026 Saptarshi Mandal</span><a href="index.html#contact">Get in touch \u2197</a></div></footer></body></html>', admin: '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Portfolio Admin | Saptarshi Mandal</title><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/admin.css"><script src="/admin.js" defer><\/script></head><body><header class="admin-top"><div><span class="eyebrow">OWNER WORKSPACE</span><h1>Manage your portfolio</h1></div><a class="btn" href="/" target="_blank" rel="noopener">View website \u2197</a></header><main class="admin-main"><p id="adminStatus" role="status" aria-live="polite">Loading your content\u2026</p><div id="adminApp" hidden><div class="admin-toolbar"><label>Collection<select id="collection"><option value="projects">Projects</option><option value="certificates">Certificates</option><option value="poems">Poems</option><option value="photography">Photography</option><option value="skills">Skills</option><option value="pages">Page text</option></select></label><label>Find an item<input id="find" type="search" placeholder="Search titles"></label><button class="btn btn-primary" id="add" type="button">Add new</button><button class="btn" id="backup" type="button">Download content backup</button></div><div class="admin-layout"><aside><p>Choose an item to edit. Hidden items stay here so you can restore them.</p><div id="items"></div></aside><section class="admin-editor"><form id="editor" hidden><h2 id="editorTitle">Edit item</h2><div id="fields"></div><div class="admin-row"><label>Display order<input type="number" id="position" min="0" max="100000" required><small>Smaller numbers appear first.</small></label><label class="admin-check"><input type="checkbox" id="hiddenItem"> Hide from website</label></div><p class="muted">Save publishes this item immediately. Hide removes it from the website while keeping a restorable copy.</p><div class="admin-row"><button class="btn btn-primary" id="save" type="submit">Save changes</button><button class="btn" id="cancel" type="button">Discard changes</button></div></form><p id="editorEmpty">Select an item or add something new.</p></section></div></div><div id="signin" hidden><p>This area is only for the portfolio owner.</p><a class="btn" href="/signin-with-chatgpt?return_to=%2Fadmin" target="_top">Sign in with ChatGPT</a></div></main></body></html>\n', cases: { "/case-studies/ai-hr.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI HR Workspace | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">SOFTWARE &amp; AI / LIVE DEMO</p><h1>AI HR Workspace</h1><p class="case-intro">A focused workspace for turning HR questions into structured drafts and action plans.</p><figure class="case-figure"><a href="../assets/projects/ai-hr-workspace.png" target="_blank" rel="noopener"><img src="../assets/projects/ai-hr-workspace.png" alt="Actual AI HR browser interface"></a><figcaption>Actual local frontend preview. Backend services and Gemini responses were not connected for this capture.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>HR work spans many recurring tasks, from interview preparation to onboarding and policy communication. This project brings those workflows into one interface with specialist modes.</p></section><section><h2>What I built</h2><p>A browser workspace and Node.js server integrating Gemini, with eight modes: HR Generalist, Recruiter, Onboarding, Employee Relations, Performance, Policy, People Analytics and Learning.</p></section><section><h2>Workflow</h2><p>Choose an HR specialty, supply the relevant context, and request a structured draft. The code also includes organization, records, decision and audit endpoints for supporting workflows.</p></section><section><h2>Technology</h2><p>JavaScript, HTML, CSS, Node.js and the Gemini API. The project runs locally with Node 18 or later and a separately configured API key.</p></section><section><h2>Current status</h2><p>The original project source and interface were inspected. The project now has a hosted demo and a GitHub repository. This portfolio review has not independently validated model requests or production readiness.</p></section><section><h2>Next steps and limitations</h2><p>Before production use, the project needs stronger authentication, persistent database design, tenancy, tests and privacy controls. Generated HR content is decision support requiring qualified human review, especially for sensitive employee matters.</p></section></div><a class="btn" href="https://ai-hr-rho-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Try live app \u2197</a> <a class="btn" href="https://github.com/Saptarshi-Mandal-1234/Ai-HR" target="_blank" rel="noopener noreferrer">View repository \u2197</a></main></body></html>', "/case-studies/credit-risk.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Loan Default & Credit Risk Analysis | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">PROJECT CASE STUDY</p><h1>Loan Default & Credit Risk Analysis</h1><p class="case-intro">Problem, process, evidence and what I would improve next.</p><figure class="case-figure"><a href="../assets/projects/credit-dashboard.png" target="_blank" rel="noopener"><img src="../assets/projects/credit-dashboard.png" alt="Actual Tableau screenshot \xB7 Saved educational portfolio analysis."></a><figcaption>Actual Tableau screenshot \xB7 Saved educational portfolio analysis. Open image for full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Explore loan default patterns and demonstrate how a simulated lender could review risk alongside approval volume.</p></section><section><h2>Dataset</h2><p>32,581 raw credit-risk records; the saved cleaning pipeline produces 32,409 records after duplicates and invalid records are removed. This project is an educational simulation, not a deployed lending service.</p></section><section><h2>My contribution</h2><p>Built data-quality checks, exploratory analysis, engineered features, logistic regression, risk tiers and decision rules, with a Tableau reporting workflow and challenger-model comparisons.</p></section><section><h2>Approach</h2><p>Clean and impute inputs; engineer loan-to-income and other features; split data 80/20 with stratification; fit a standardized, class-balanced logistic regression baseline. Compare Random Forest and Gradient Boosting separately.</p></section><section><h2>Results</h2><p>The saved baseline results report 80.58% accuracy, 78.77% recall and 0.8757 ROC-AUC. These are logistic-regression results, not XGBoost results. The Tableau screenshot shows the saved 32,409-record portfolio and its simulated approval rules.</p></section><section><h2>Limitations</h2><p>Imputation happens before the split in the existing workflow, which can leak distribution information. Reported model performance should be treated as provisional until preprocessing is fit on training data only. Scores and approval thresholds are illustrative; currency formatting in the dashboard does not establish dataset currency.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-" target="_blank" rel="noopener">Explore source and setup \u2197</a></main></body></html>', "/case-studies/customer-churn.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Customer Churn Analysis | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">PROJECT CASE STUDY</p><h1>Customer Churn Analysis</h1><p class="case-intro">Problem, process, evidence and what I would improve next.</p><figure class="case-figure"><a href="../assets/projects/churn-contracts.svg" target="_blank" rel="noopener"><img src="../assets/projects/churn-contracts.svg" alt="Recomputed from the supplied CSV \xB7 Analysis chart, not a dashboard screenshot."></a><figcaption>Recomputed from the supplied CSV \xB7 Analysis chart, not a dashboard screenshot. Open image for full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Identify customer segments with high observed churn and connect them to practical retention actions.</p></section><section><h2>Dataset</h2><p>7,043 Telco customer records with 1,869 churned customers and 11 blank TotalCharges values, checked directly from the supplied CSV.</p></section><section><h2>My contribution</h2><p>Built MySQL cleaning and analysis scripts, seven rule-based risk flags, and a recommendation playbook, alongside a local Power BI report.</p></section><section><h2>Approach</h2><p>Import the CSV into MySQL; standardize fields; build segment views; assign a 0\u20137 rule-based risk score; join matching flags to recommended actions. A reproducible Python summary now supplies sample outputs without requiring MySQL.</p></section><section><h2>Results</h2><p>Recalculated observed churn: 42.7% for month-to-month contracts, 11.3% for one-year contracts and 2.8% for two-year contracts. The chart below was generated from the actual supplied data. A Power BI file exists locally, but this chart is not a Power BI screenshot.</p></section><section><h2>Limitations</h2><p>Risk flags are heuristics, not calibrated probabilities or validated future predictions. Segment differences are associations. Revenue estimates may overlap across flags and must not be added as guaranteed savings. MySQL execution and the Power BI report refresh still require local validation.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis" target="_blank" rel="noopener">Explore source and setup \u2197</a></main></body></html>', "/case-studies/hr-attrition.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HR Employee Attrition Analysis | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">PROJECT CASE STUDY</p><h1>HR Employee Attrition Analysis</h1><p class="case-intro">Problem, process, evidence and what I would improve next.</p><figure class="case-figure"><a href="../assets/projects/hr-dashboard.png" target="_blank" rel="noopener"><img src="../assets/projects/hr-dashboard.png" alt="Actual Power BI screenshot \xB7 Sales department filter selected."></a><figcaption>Actual Power BI screenshot \xB7 Sales department filter selected. Open image for full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Explore where employee attrition is concentrated and turn that analysis into questions HR can investigate.</p></section><section><h2>Dataset</h2><p>1,470 IBM HR sample records covering job roles, overtime, tenure, income and attrition. This is an educational sample, not a live employer dataset.</p></section><section><h2>My contribution</h2><p>Built the Python exploration, visual analysis, logistic regression workflow, risk-scored exports and Power BI report.</p></section><section><h2>Approach</h2><p>Validate records and remove constant/ID fields; compare attrition across segments; one-hot encode categories; use a stratified 75/25 split and standardize the training data; fit class-balanced logistic regression.</p></section><section><h2>Results</h2><p>The saved project reports 77.7% held-out accuracy and 0.81 ROC-AUC. Existing analyses show higher observed attrition among overtime workers. The screenshot below is the actual Power BI report with Sales selected: its 446 employees are a filtered subset, not the full dataset.</p></section><section><h2>Limitations</h2><p>Associations do not establish why people leave. Model scores are not employment decisions. Results need external validation and subgroup evaluation; retention recommendations have not been tested for causal impact.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis" target="_blank" rel="noopener">Explore source and setup \u2197</a></main></body></html>', "/case-studies/marketpulse-ai.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MarketPulse AI Foundation | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">DATA ENGINEERING / RESEARCH</p><h1>MarketPulse AI Foundation</h1><p class="case-intro">From market snapshots to traceable analytics and honest model evaluation.</p><p>Python \xB7 PostgreSQL \xB7 Power BI \xB7 Scikit-learn</p><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai" target="_blank" rel="noopener noreferrer">View repository \u2197</a><figure class="case-figure"><a href="../assets/projects/marketpulse-stock-explorer.png" target="_blank" rel="noopener"><img loading="lazy" src="../assets/projects/marketpulse-stock-explorer.png" alt="MarketPulse AI Stock Explorer dashboard with instrument filters, adjusted price history and observed volume" width="1154" height="812"></a><figcaption>Project dashboard screenshot supplied by Saptarshi: Stock Explorer with instrument filters, adjusted price history and observed volume. This is a static preview; select it to view full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Build a repeatable way to collect, validate and analyze Indian-equity data while keeping the provenance of research results clear.</p></section><section><h2>Universe and inputs</h2><p>The configured initial universe is NIFTY 50 plus ten liquid large-cap stocks. Daily OHLCV research snapshots come from Yahoo Finance. Exchange-session checks identify gaps without inventing missing prices.</p></section><section><h2>Implementation</h2><p>The source includes archive checksums, 39 technical features, PostgreSQL migrations, performance and drawdown analytics, forecasting evaluation, risk bands and prior-only anomaly detection. A report generator assembles seven Power BI pages.</p></section><section><h2>Research approach</h2><p>Forecasting tasks cover next-session direction, next-session return and five-session return, evaluated chronologically with purging. The project compares machine-learning candidates against simple baselines rather than assuming a complex model is better.</p></section><section><h2>Results and current evidence</h2><p>The project documentation reports that the tested ML candidates did not outperform the selected baselines under its predefined criteria. This portfolio review inspected the local source and documentation; it did not rerun database, model or Power BI checks. A supplied Stock Explorer dashboard screenshot is shown above. The underlying data refresh and model evaluation were not rerun for this preview.</p></section><section><h2>Operations and limitations</h2><p>The pipeline includes atomic publication, last-good-report preservation, health checks and Windows scheduling helpers. Fresh runs require a configured Python environment, PostgreSQL and data access. It is research software, does not place orders, and makes no claim of a trading edge.</p></section></div></main></body></html>', "/case-studies/mediassist.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MediAssist AI | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">SOFTWARE &amp; AI / PROTOTYPE</p><h1>MediAssist AI</h1><p class="case-intro">Health conversations and tracking in one workspace.</p><figure class="case-figure"><a href="../assets/projects/mediassist-workspace.png" target="_blank" rel="noopener"><img src="../assets/projects/mediassist-workspace.png" alt="Actual MediAssist frontend preview"></a><figcaption>Actual local frontend preview; backend and AI responses were not connected for this capture. The existing UI still labels its provider as Claude; the inspected backend uses Gemini.</figcaption></figure><div class="case-sections"><section><h2>What it addresses</h2><p>Brings health-related conversations and personal tracking tools into one prototype interface, with separate modes for different kinds of questions.</p></section><section><h2>Four modes</h2><p>Symptoms, medication discussion, mental wellness and lab-report discussion use separate prompts. Symptom matching can supply reference context to the chat workflow.</p></section><section><h2>Application structure</h2><p>The updated source uses Node.js, Express, MongoDB/Mongoose and Gemini. Models cover chat messages, medications, appointments, mood logs, health logs, vitals and disease reference records. The project includes Docker and Compose files.</p></section><section><h2>Implementation details</h2><p>The chat route validates mode and input, limits message/history length, applies request timeouts and retries transient failures. API keys are configured on the backend rather than displayed on the portfolio.</p></section><section><h2>Evidence and status</h2><p>This page uses the latest MongoDB-based project folder and a real frontend capture. Source and setup files were inspected. A hosted demo is now available; Gemini calls and database persistence have not been independently validated in this portfolio review.</p></section><section><h2>Limitations</h2><p>MediAssist is an educational prototype, not a clinically validated service or medical device. Its outputs require professional review. Authentication, health-data privacy, generated-content handling and end-to-end tests require further assessment before real-world use.</p></section></div><a class="btn" href="https://mediassist-chatbot.onrender.com/" target="_blank" rel="noopener noreferrer">Try live app \u2197</a> <a class="btn" href="https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot" target="_blank" rel="noopener">View repository \u2197</a></main></body></html>', "/case-studies/procurement-advisor.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI Procurement Cost-Savings Advisor | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">DATA ANALYTICS &amp; AI</p><h1>AI Procurement Cost-Savings Advisor</h1><p class="case-intro">A Streamlit dashboard that turns purchase orders into supplier and savings decisions.</p><div class="case-gallery"><figure class="case-figure"><a href="../assets/projects/procurement-overview.png" target="_blank" rel="noopener"><img src="../assets/projects/procurement-overview.png" alt="Executive Overview page with purchase order KPIs and spend charts"></a><figcaption>Executive Overview from the project folder: spend, delivery performance and category breakdown.</figcaption></figure><figure class="case-figure"><a href="../assets/projects/procurement-vendor-spend.png" target="_blank" rel="noopener"><img src="../assets/projects/procurement-vendor-spend.png" alt="Vendor and Spend Analysis page showing supplier and cost comparisons"></a><figcaption>Vendor &amp; Spend Analysis compares supplier performance and unit costs.</figcaption></figure><figure class="case-figure"><a href="../assets/projects/procurement-risk-advisor.png" target="_blank" rel="noopener"><img src="../assets/projects/procurement-risk-advisor.png" alt="Risk, Savings and AI Advisor page with supplier risk and savings views"></a><figcaption>Risk, Savings &amp; AI Advisor ranks supplier risk and models cost opportunities.</figcaption></figure></div><div class="case-sections"><section><h2>Project scope</h2><p>The app joins 2,000 purchase orders with 100 supplier records and 200 product records. It calculates delivery delay, on-time rate, price variance and supplier spend concentration.</p></section><section><h2>Evidence and limitations</h2><p>The supplied project report finds 1,234 late orders, an average delay of 1.58 days, and 21 suppliers without a recorded certification level. Renegotiation and consolidation savings are modelled opportunities, not guaranteed financial returns. OpenAI narratives are optional; rule-based summaries work without an API key.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/ai-procurement-cost-savings-advisor" target="_blank" rel="noopener">View repository \u2197</a></main></body></html>\n', "/case-studies/selenium-ecommerce.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Selenium E-Commerce Automation | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">QA AUTOMATION / CAPSTONE</p><h1>Selenium E-Commerce Automation</h1><p class="case-intro">A data-driven purchase flow with screenshots and a self-contained execution report.</p><div id="repoEvidence" class="repo-evidence" aria-live="polite"></div><script src="../repo-gallery.js" defer><\/script><div class="case-sections"><section><h2>What it tests</h2><p>The script automates a purchase-style journey on AutomationExercise: launch Chrome, load JSON test data, attempt login, search products, add the first result to cart, attempt a quantity update, verify cart details, handle popups or alerts, capture screenshots and create an HTML report.</p></section><section><h2>Implementation</h2><p>Python Selenium WebDriver drives Google Chrome with webdriver-manager for compatible driver setup. Explicit WebDriverWait conditions replace fixed delays. A TestReport class records timestamped step outcomes and links every relevant screenshot in the generated HTML report.</p></section><section><h2>Recorded execution evidence</h2><p>The 22 September 2026 run took 65.82 seconds and recorded six passing checks, zero failures, one explained login skip and three informational events. The guest cart flow continued after the test site rejected placeholder credentials, showing that each major step is isolated rather than allowing one failure to stop reporting.</p></section><section><h2>Practical limitation</h2><p>AutomationExercise requires a registered account for a successful login. The current test data uses placeholder credentials, so login is deliberately reported as a skip. The cart\u2019s quantity field was also not editable after adding the item on this demo site; that is logged as information rather than misrepresented as a failure.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/WIPRO-Selenium-ecommerce-automation-capstone-project" target="_blank" rel="noopener">View capstone repository \u2197</a> <a class="btn" href="https://github.com/Saptarshi-Mandal-1234/WIPRO_COE_CLASS" target="_blank" rel="noopener noreferrer">Wipro COE work \u2197</a></main></body></html>\n', "/case-studies/smart-irrigation.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Smart Irrigation | Saptarshi Mandal</title><meta name="description" content="ESP32 smart irrigation prototype with crop-aware control, BLE monitoring and browser simulations."><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">EMBEDDED SYSTEMS / IOT</p><h1>Automated Irrigation System</h1><p class="case-intro">Crop-aware watering. Sensor-driven control.</p><p>C++ \xB7 ESP32 \xB7 Bluetooth Low Energy \xB7 HTML / JavaScript</p><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System" target="_blank" rel="noopener noreferrer">View repository \u2197</a><figure class="case-figure"><a href="../assets/projects/irrigation-circuit.png" target="_blank" rel="noopener"><img loading="lazy" src="../assets/projects/irrigation-circuit.png" alt="Irrigation circuit browser simulation with Arduino Uno and substitute sensors" width="1360"></a><figcaption>Actual browser circuit simulation from the project folder. This view uses the Arduino Uno / Tinkercad substitute circuit; the target hardware firmware uses ESP32. Displayed readings are simulated. Select the image to view it full size.</figcaption></figure><figure class="case-figure"><a href="../assets/projects/irrigation-logic.png" target="_blank" rel="noopener"><img loading="lazy" src="../assets/projects/irrigation-logic.png" alt="Smart irrigation logic simulator and crop controls" width="1360"></a><figcaption>Actual browser logic simulator from the project folder. These are simulated sensor values, not measurements from physical hardware. Select the image to view it full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Fixed watering schedules ignore soil conditions and crop requirements. This academic prototype explores a single-zone controller that responds to moisture feedback instead.</p></section><section><h2>Inputs and architecture</h2><p>An ESP32 reads soil moisture, soil pH, temperature and humidity. C++ firmware controls a relay or pump driver; an HTML/JavaScript web app exchanges crop configuration, readings and commands over Bluetooth Low Energy.</p></section><section><h2>Control approach</h2><p>Crop profiles provide a minimum moisture threshold and a target. The pump starts below the minimum and stops at the target, holding its previous state between them to reduce rapid switching. pH is monitored and flagged; the system does not correct pH.</p></section><section><h2>Implementation and evidence</h2><p>The supplied materials include ESP32 firmware, a calibration utility, a Web Bluetooth dashboard with Demo Mode, a browser logic simulator, an animated circuit simulation and an Arduino Uno sketch for Tinkercad. Source review confirmed the hysteresis logic and fault/runtime checks; firmware compilation and physical operation were not tested in this portfolio review.</p></section><section><h2>Controls and current limitations</h2><p>The implementation includes manual pump commands, runtime limits, sensor-fault handling, optional low-water detection and an emergency-stop command. These are prototype controls, not hardware-validated safety guarantees. Sensor calibration constants remain placeholders and the phone-to-ESP32-to-pump path has not been tested end to end.</p></section><section><h2>Next validation steps</h2><p>Calibrate the sensors, compile and flash the ESP32 firmware, then test crop thresholds, manual mode, disconnects and every fault condition on hardware. Measure water use and manual intervention before claiming efficiency improvements. The current scope is one pump and one zone, with no cloud monitoring or automatic pH correction.</p></section></div></main></body></html>' } };

// node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var strictDecoder = new TextDecoder("utf-8", { fatal: true });
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0), buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers)
    buf.set(buffer, i), i += buffer.length;
  return buf;
}
var NON_ASCII = /[^\x00-\x7f]/;
function encode(string) {
  if (typeof string == "string" && string.length >= 128) {
    if (NON_ASCII.test(string))
      throw new TypeError("non-ASCII string encountered in encode()");
    return encoder.encode(string);
  }
  const bytes = new Uint8Array(string.length);
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code > 127)
      throw new TypeError("non-ASCII string encountered in encode()");
    bytes[i] = code;
  }
  return bytes;
}
function decodeBase64(encoded, url2 = false) {
  if (Uint8Array.fromBase64)
    return Uint8Array.fromBase64(encoded, { alphabet: url2 ? "base64url" : "base64" });
  if (url2) {
    if (encoded.includes("+") || encoded.includes("/"))
      throw new TypeError("Invalid base64url");
    encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  }
  const binary = atob(encoded), bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++)
    bytes[i] = binary.charCodeAt(i);
  return bytes;
}

// node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(message2, options) {
    super(message2, options), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
  }
};
var JWTClaimValidationFailed = class extends JOSEError {
  static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } }), this.claim = claim, this.reason = reason, this.payload = payload;
  }
};
var JWTExpired = class extends JOSEError {
  static code = "ERR_JWT_EXPIRED";
  code = "ERR_JWT_EXPIRED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } }), this.claim = claim, this.reason = reason, this.payload = payload;
  }
};
var JOSEAlgNotAllowed = class extends JOSEError {
  static code = "ERR_JOSE_ALG_NOT_ALLOWED";
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
};
var JOSENotSupported = class extends JOSEError {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
};
var JWSInvalid = class extends JOSEError {
  static code = "ERR_JWS_INVALID";
  code = "ERR_JWS_INVALID";
};
var JWTInvalid = class extends JOSEError {
  static code = "ERR_JWT_INVALID";
  code = "ERR_JWT_INVALID";
};
var JWKSInvalid = class extends JOSEError {
  static code = "ERR_JWKS_INVALID";
  code = "ERR_JWKS_INVALID";
};
var JWKSNoMatchingKey = class extends JOSEError {
  static code = "ERR_JWKS_NO_MATCHING_KEY";
  code = "ERR_JWKS_NO_MATCHING_KEY";
  constructor(message2 = "no applicable key found in the JSON Web Key Set", options) {
    super(message2, options);
  }
};
var JWKSMultipleMatchingKeys = class extends JOSEError {
  [Symbol.asyncIterator] = async function* () {
  };
  static code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  constructor(message2 = "multiple matching keys found in the JSON Web Key Set", options) {
    super(message2, options);
  }
};
var JWKSTimeout = class extends JOSEError {
  static code = "ERR_JWKS_TIMEOUT";
  code = "ERR_JWKS_TIMEOUT";
  constructor(message2 = "request timed out", options) {
    super(message2, options);
  }
};
var JWSSignatureVerificationFailed = class extends JOSEError {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(message2 = "signature verification failed", options) {
    super(message2, options);
  }
};

// node_modules/jose/dist/webapi/util/base64url.js
var invalid = "The input to be decoded is not correctly encoded.";
function decode(input) {
  try {
    return decodeBase64(typeof input == "string" ? input : decoder.decode(input), true);
  } catch (cause) {
    throw new TypeError(invalid, { cause });
  }
}

// node_modules/jose/dist/webapi/lib/validate.js
function isObject(input) {
  if (typeof input != "object" || input === null || Object.prototype.toString.call(input) !== "[object Object]")
    return false;
  const prototype = Object.getPrototypeOf(input);
  return prototype === null || Object.getPrototypeOf(prototype) === null;
}
function isJwkSet(input) {
  return isObject(input) && Array.isArray(input.keys) && Array.from(input.keys).every(isObject);
}
function isDisjoint(...headers) {
  const parameters = /* @__PURE__ */ new Set();
  for (const header of headers)
    if (header)
      for (const parameter of Object.keys(header)) {
        if (parameters.has(parameter))
          return false;
        parameters.add(parameter);
      }
  return true;
}
function decodeBase64url(value, label, ErrorClass) {
  try {
    return decode(value);
  } catch {
    throw new ErrorClass(`Failed to base64url decode the ${label}`);
  }
}
function encodeBase64url(value, label, ErrorClass) {
  try {
    return encode(value);
  } catch {
    throw new ErrorClass(`The ${label} is not a valid base64url string`);
  }
}
function parseJoseHeader(b64, ErrorClass, message2) {
  let parsed;
  try {
    parsed = JSON.parse(strictDecoder.decode(decode(b64)));
  } catch {
    throw new ErrorClass(message2);
  }
  if (!isObject(parsed))
    throw new ErrorClass(message2);
  return parsed;
}
var JWS_RECOGNIZED = { __proto__: null, b64: true };
function validateAlgorithms(option, algorithms) {
  if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s != "string")))
    throw new TypeError(`"${option}" option must be an array of strings`);
  return algorithms === void 0 ? void 0 : new Set(algorithms);
}
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0)
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  if (!protectedHeader || protectedHeader.crit === void 0)
    return [];
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input != "string" || input.length === 0))
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  const recognized = recognizedOption === void 0 ? recognizedDefault : { __proto__: null, ...recognizedOption, ...recognizedDefault };
  for (const parameter of protectedHeader.crit) {
    if (!(parameter in recognized))
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    if (!Object.hasOwn(joseHeader, parameter) || joseHeader[parameter] === void 0)
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    if (recognized[parameter] && (!Object.hasOwn(protectedHeader, parameter) || protectedHeader[parameter] === void 0))
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
  }
  return protectedHeader.crit;
}
function validateB64(protectedHeader, extensions) {
  if (extensions.includes("b64")) {
    const b64 = protectedHeader.b64;
    if (typeof b64 != "boolean")
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    return b64;
  }
  return true;
}

// node_modules/jose/dist/webapi/lib/key.js
var tag = (key) => key[Symbol.toStringTag];
var jwkMatchesOp = (entry, key, usage) => {
  const { alg } = entry;
  if (key.use !== void 0) {
    const expected = usage === "sign" || usage === "verify" ? "sig" : "enc";
    if (key.use !== expected)
      throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
  }
  if (key.alg !== void 0 && key.alg !== alg)
    throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
  if (Array.isArray(key.key_ops)) {
    const expectedKeyOp = usage === "encrypt" || usage === "decrypt" ? entry.ops?.[usage === "encrypt" ? 0 : 1] : usage;
    if (expectedKeyOp && !key.key_ops.includes(expectedKeyOp))
      throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
  }
};
async function prepareKey(entry, key, usage) {
  const { alg, secret } = entry, privateKey = usage === "decrypt" || usage === "sign";
  if (secret && key instanceof Uint8Array)
    return key;
  let normalized, keyObject;
  if (isObject(key)) {
    if (normalized = normalizeJwk(key), typeof normalized.kty != "string")
      throw invalidKeyType(alg, key, secret);
    if (!(secret ? normalized.kty === "oct" && typeof normalized.k == "string" : normalized.kty !== "oct" && (privateKey ? normalized.kty === "AKP" && typeof normalized.priv == "string" || typeof normalized.d == "string" : normalized.d === void 0 && normalized.priv === void 0)))
      throw new TypeError(secret ? 'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present' : `JSON Web Key for this operation must be a ${privateKey ? "private" : "public"} JWK`);
    if (jwkMatchesOp(entry, normalized, usage), normalized.kty === "oct")
      return decode(normalized.k);
    if (!Object.isFrozen(key)) {
      const { key_ops } = key;
      Array.isArray(key_ops) && Object.freeze(key_ops), Object.freeze(key);
    }
  } else {
    if (!isKeyLike(key))
      throw invalidKeyType(alg, key, secret);
    const expectedType = secret ? "secret" : privateKey ? "private" : "public";
    if (key.type !== expectedType && (secret || ["secret", "public", "private"].includes(key.type)))
      throw new TypeError(`${tag(key)} instances must be of type "${expectedType}" for the ${alg} algorithm`);
    if (isCryptoKey(key))
      return key;
    if (keyObject = key, keyObject.type === "secret")
      return keyObject.export();
  }
  cache ||= /* @__PURE__ */ new WeakMap();
  const cacheKey = key;
  let cached = cache.get(cacheKey);
  if (cached?.[alg])
    return cached[alg];
  if (cached || cache.set(cacheKey, cached = {}), keyObject && typeof keyObject.toCryptoKey == "function") {
    const isPublic = keyObject.type === "public", crv = nist[keyObject.asymmetricKeyDetails?.namedCurve], params = entry.resolve?.({ crv, asymmetricKeyType: keyObject.asymmetricKeyType }) ?? entry.subtle;
    return cached[alg] = keyObject.toCryptoKey(params, isPublic, entry.usages[isPublic ? 0 : 1]);
  }
  return normalized ??= keyObject.export({ format: "jwk" }), normalized.alg = alg, cached[alg] = await jwkToKey(entry, normalized);
}
var cache;
var nist = {
  __proto__: null,
  prime256v1: "P-256",
  secp384r1: "P-384",
  secp521r1: "P-521"
};
var isCryptoKey = (key) => {
  if (key?.[Symbol.toStringTag] === "CryptoKey")
    return true;
  try {
    return key instanceof CryptoKey;
  } catch {
    return false;
  }
};
var isKeyObject = (key) => key?.[Symbol.toStringTag] === "KeyObject";
var isKeyLike = (key) => isCryptoKey(key) || isKeyObject(key);
function message(msg, actual, ...types) {
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else types.length === 2 ? msg += `one of type ${types[0]} or ${types[1]}.` : msg += `of type ${types[0]}.`;
  return actual == null ? msg += ` Received ${actual}` : typeof actual == "function" && actual.name ? msg += ` Received function ${actual.name}` : typeof actual == "object" && actual != null && actual.constructor?.name && (msg += ` Received an instance of ${actual.constructor.name}`), msg;
}
function invalidKeyType(alg, actual, secret) {
  const types = ["CryptoKey", "KeyObject", "JSON Web Key"];
  return secret && types.push("Uint8Array"), new TypeError(message(`Key for the ${alg} algorithm must be `, actual, ...types));
}
var unusable = (name, prop = "algorithm.name") => new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
function checkUsage(key, usage) {
  if (usage && !key.usages.includes(usage))
    throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
}
function checkModulusLength(alg, key) {
  const { modulusLength } = key.algorithm;
  if (typeof modulusLength != "number" || modulusLength < 2048)
    throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
}
function checkCryptoKey(key, expected, usage) {
  const algorithm = key.algorithm;
  if (algorithm.name !== expected.name)
    throw unusable(expected.name);
  if (expected.hash && algorithm.hash?.name !== expected.hash)
    throw unusable(expected.hash, "algorithm.hash");
  if (expected.namedCurve && algorithm.namedCurve !== expected.namedCurve)
    throw unusable(expected.namedCurve, "algorithm.namedCurve");
  if (expected.length !== void 0 && algorithm.length !== expected.length)
    throw unusable(expected.length, "algorithm.length");
  checkUsage(key, usage);
}
function snapshotJwk(jwk) {
  return { __proto__: null, ...jwk };
}
function normalizeJwk(jwk) {
  const normalized = snapshotJwk(jwk);
  if (normalized.ext !== void 0 && typeof normalized.ext != "boolean")
    throw new TypeError('"ext" (Extractable) Parameter must be a boolean');
  if (normalized.key_ops !== void 0) {
    const value = normalized.key_ops, keyOps = Array.isArray(value) ? [...value] : void 0;
    if (!keyOps || keyOps.some((operation) => typeof operation != "string") || new Set(keyOps).size !== keyOps.length)
      throw new TypeError('"key_ops" (Key Operations) Parameter must be an array of unique strings');
    normalized.key_ops = keyOps;
  }
  return normalized;
}
async function jwkToKey(entry, jwk, extractable) {
  if (!entry.kty.includes(jwk.kty))
    throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  const algorithm = entry.resolve?.({ kty: jwk.kty, crv: jwk.crv }) ?? entry.subtle, isPrivate = !!(jwk.d || jwk.priv), keyData = { ...jwk, ext: extractable ?? jwk.ext };
  return keyData.kty !== "AKP" && delete keyData.alg, delete keyData.use, crypto.subtle.importKey("jwk", keyData, algorithm, keyData.ext ?? !isPrivate, jwk.key_ops ?? entry.usages[isPrivate ? 1 : 0]);
}
async function rawKey(key, expected, usage, extractable = false) {
  return key instanceof Uint8Array && (key = await crypto.subtle.importKey("raw", key, expected, extractable, [usage])), checkCryptoKey(key, expected, usage), key;
}

// node_modules/jose/dist/webapi/lib/key_descriptor.js
function table(entries) {
  const out = { __proto__: null };
  for (const alg in entries)
    out[alg] = { ...entries[alg], alg };
  return out;
}

// node_modules/jose/dist/webapi/lib/jws_algorithms.js
var sig = [["verify"], ["sign"]];
function hmac(bits) {
  const subtle = { name: "HMAC", hash: `SHA-${bits}` };
  return { kty: ["oct"], secret: true, subtle, signing: subtle, usages: sig };
}
function rsa(bits, saltLength) {
  const subtle = { name: saltLength ? "RSA-PSS" : "RSASSA-PKCS1-v1_5", hash: `SHA-${bits}` };
  return {
    kty: ["RSA"],
    subtle,
    signing: saltLength ? { ...subtle, saltLength } : subtle,
    usages: sig,
    minRsaBits: 2048
  };
}
function ecdsa(crv, bits) {
  return {
    kty: ["EC"],
    crv,
    subtle: { name: "ECDSA", namedCurve: crv },
    signing: { name: "ECDSA", hash: `SHA-${bits}` },
    usages: sig
  };
}
function eddsa() {
  const subtle = { name: "Ed25519" };
  return {
    kty: ["OKP"],
    crv: "Ed25519",
    subtle,
    signing: subtle,
    usages: sig
  };
}
function mldsa(bits) {
  const subtle = { name: `ML-DSA-${bits}` };
  return {
    kty: ["AKP"],
    subtle,
    signing: subtle,
    usages: sig
  };
}
var JWS = table({
  HS256: hmac(256),
  HS384: hmac(384),
  HS512: hmac(512),
  RS256: rsa(256),
  RS384: rsa(384),
  RS512: rsa(512),
  PS256: rsa(256, 32),
  PS384: rsa(384, 48),
  PS512: rsa(512, 64),
  ES256: ecdsa("P-256", 256),
  ES384: ecdsa("P-384", 384),
  ES512: ecdsa("P-521", 512),
  EdDSA: eddsa(),
  Ed25519: eddsa(),
  "ML-DSA-44": mldsa(44),
  "ML-DSA-65": mldsa(65),
  "ML-DSA-87": mldsa(87)
});
function jwsAlgorithm(alg) {
  const entry = typeof alg == "string" ? JWS[alg] : void 0;
  if (!entry)
    throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  return entry;
}

// node_modules/jose/dist/webapi/lib/jws_verify.js
function prepareVerify(options) {
  return [options && validateAlgorithms("algorithms", options.algorithms), options?.crit];
}
function parseProtectedHeader(encodedProtected) {
  return encodedProtected === void 0 ? {} : parseJoseHeader(encodedProtected, JWSInvalid, "JWS Protected Header is invalid");
}
function encodeCompactUnencodedPayload(payload) {
  try {
    return encode(payload);
  } catch {
    throw new JWSInvalid("JWS Compact Serialization payload must use only ASCII characters");
  }
}
async function verifySignature(jws, shared, key, encodeUnencodedPayload, parsedProtected) {
  const { protected: encodedProtected, header, payload: inputPayload } = jws, parsedProt = parsedProtected ?? parseProtectedHeader(encodedProtected);
  if (!isDisjoint(parsedProt, header))
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  const joseHeader = { ...parsedProt, ...header }, b64 = validateB64(parsedProt, validateCrit(JWSInvalid, JWS_RECOGNIZED, shared[1], parsedProt, joseHeader)), { alg } = joseHeader;
  if (typeof alg != "string" || !alg)
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  if (shared[0] && !shared[0].has(alg))
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  if (b64) {
    if (typeof inputPayload != "string")
      throw new JWSInvalid("JWS Payload must be a string");
  } else if (typeof inputPayload != "string" && !(inputPayload instanceof Uint8Array))
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  const signingPayload = b64 || typeof inputPayload != "string" ? inputPayload : encodeUnencodedPayload(inputPayload);
  let resolvedKey = false;
  typeof key == "function" && (key = await key(parsedProt, jws), resolvedKey = true);
  const entry = jwsAlgorithm(alg), data = concat(encodedProtected !== void 0 ? encode(encodedProtected) : new Uint8Array(), encode("."), typeof signingPayload == "string" ? shared[2] ??= encodeBase64url(signingPayload, "payload", JWSInvalid) : signingPayload), signature = decodeBase64url(jws.signature, "signature", JWSInvalid), k = await prepareKey(entry, key, "verify"), cryptoKey = await rawKey(k, entry.subtle, "verify");
  entry.minRsaBits && checkModulusLength(entry.alg, cryptoKey);
  let verified = false;
  try {
    verified = await crypto.subtle.verify(entry.signing, cryptoKey, signature, data);
  } catch {
  }
  if (!verified)
    throw new JWSSignatureVerificationFailed();
  const result = { payload: typeof signingPayload == "string" ? decodeBase64url(signingPayload, "payload", JWSInvalid) : signingPayload };
  return encodedProtected !== void 0 && (result.protectedHeader = parsedProt), header !== void 0 && (result.unprotectedHeader = header), resolvedKey ? [{ ...result, key: k }, b64] : [result, b64];
}
async function verifyCompact(jws, shared, key) {
  if (jws instanceof Uint8Array && (jws = decoder.decode(jws)), typeof jws != "string")
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3)
    throw new JWSInvalid("Invalid Compact JWS");
  return verifySignature({ payload, protected: protectedHeader, signature }, shared, key, encodeCompactUnencodedPayload);
}

// node_modules/jose/dist/webapi/lib/jwt_claims_set.js
var epoch = (date) => Math.floor(date.getTime() / 1e3);
var multipliers = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
  w: 604800,
  y: 31557600
};
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var checkFailed = "check_failed";
function invalidDuration() {
  throw new TypeError("Invalid time period format");
}
function secs(str) {
  typeof str != "string" && invalidDuration();
  const matched = REGEX.exec(str);
  (!matched || matched[4] && matched[1]) && invalidDuration();
  const value = parseFloat(matched[2]), numericDate2 = Math.round(value * multipliers[matched[3][0].toLowerCase()]);
  return Number.isFinite(numericDate2) || invalidDuration(), matched[1] === "-" || matched[4] === "ago" ? -numericDate2 : numericDate2;
}
function validateInput(label, input) {
  if (!Number.isFinite(input))
    throw new TypeError(`Invalid ${label} input`);
  return input;
}
var normalizeTyp = (value) => {
  const normalized = value.toLowerCase();
  return value.includes("/") ? normalized : `application/${normalized}`;
};
var checkAudiencePresence = (audPayload, audOption) => typeof audPayload == "string" ? audOption.includes(audPayload) : Array.isArray(audPayload) ? audOption.some((aud) => audPayload.includes(aud)) : false;
function validateNumericDate(payload, claim, required = false) {
  const value = payload[claim];
  if (!(value === void 0 && !required)) {
    if (typeof value != "number")
      throw new JWTClaimValidationFailed(`"${claim}" claim must be a number`, payload, claim, "invalid");
    return value;
  }
}
function unexpectedClaim(payload, claim) {
  throw new JWTClaimValidationFailed(`unexpected "${claim}" claim value`, payload, claim, checkFailed);
}
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
  let payload;
  try {
    payload = JSON.parse(strictDecoder.decode(encodedPayload));
  } catch {
  }
  if (!isObject(payload))
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  const { typ } = options;
  if (typ !== void 0 && (typeof protectedHeader.typ != "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ)))
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", checkFailed);
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options, presenceCheck = [...requiredClaims];
  maxTokenAge !== void 0 && presenceCheck.push("iat"), audience !== void 0 && presenceCheck.push("aud"), subject !== void 0 && presenceCheck.push("sub"), issuer !== void 0 && presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse()))
    if (!Object.hasOwn(payload, claim))
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
  issuer !== void 0 && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss) && unexpectedClaim(payload, "iss"), subject !== void 0 && payload.sub !== subject && unexpectedClaim(payload, "sub"), audience !== void 0 && !checkAudiencePresence(payload.aud, typeof audience == "string" ? [audience] : audience) && unexpectedClaim(payload, "aud");
  const { clockTolerance } = options;
  let tolerance = 0;
  if (typeof clockTolerance == "string")
    tolerance = secs(clockTolerance);
  else if (clockTolerance !== void 0) {
    if (typeof clockTolerance != "number")
      throw new TypeError("Invalid clockTolerance option type");
    tolerance = clockTolerance;
  }
  validateInput("clockTolerance option", tolerance);
  const { currentDate } = options, now = validateInput("currentDate option", epoch(currentDate === void 0 ? /* @__PURE__ */ new Date() : currentDate)), iat = validateNumericDate(payload, "iat", maxTokenAge !== void 0), nbf = validateNumericDate(payload, "nbf");
  if (nbf !== void 0 && nbf > now + tolerance)
    throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", checkFailed);
  const exp = validateNumericDate(payload, "exp");
  if (exp !== void 0 && exp <= now - tolerance)
    throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", checkFailed);
  if (maxTokenAge !== void 0) {
    const age = now - iat, max = validateInput("maxTokenAge option", typeof maxTokenAge == "number" ? maxTokenAge : secs(maxTokenAge));
    if (age - tolerance > max)
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", checkFailed);
    if (age < -tolerance)
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", checkFailed);
  }
  return payload;
}

// node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const [verified, b64] = await verifyCompact(jwt, prepareVerify(options), key);
  if (!b64)
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  const payload = validateClaimsSet(verified.protectedHeader, verified.payload, options);
  return { ...verified, payload };
}

// node_modules/jose/dist/webapi/jwks/local.js
function isUsableJWK(jwk, entry, alg, kid) {
  const { kty, key_ops: keyOps, ext, kid: jwkKid, alg: jwkAlg, use, crv } = jwk;
  return (ext === void 0 || typeof ext == "boolean") && (keyOps === void 0 || Array.isArray(keyOps) && keyOps.every((operation, index) => typeof operation == "string" && keyOps.indexOf(operation) === index) && keyOps.includes("verify")) && entry.kty.includes(kty) && (kid === void 0 || typeof kid == "string" && kid === jwkKid) && (jwkAlg === void 0 ? kty !== "AKP" : alg === jwkAlg) && (use === void 0 || use === "sig") && (!entry.crv || crv === entry.crv);
}
async function importWithAlgCache(cache2, jwk, entry) {
  const cached = cache2.get(jwk) || cache2.set(jwk, {}).get(jwk), { alg } = entry;
  if (cached[alg] === void 0) {
    const pending = jwkToKey(entry, jwk, true).then((key) => {
      if (key.type !== "public")
        throw new JWKSInvalid("JSON Web Key Set members must be public keys");
      return cached[alg] = key, key;
    }).catch((error) => {
      throw cached[alg] === pending && delete cached[alg], error;
    });
    cached[alg] = pending;
  }
  return cached[alg];
}
function createLocalJWKSet(jwks) {
  let snapshot;
  try {
    snapshot = structuredClone(jwks);
  } catch {
  }
  if (!isJwkSet(snapshot))
    throw new JWKSInvalid("JSON Web Key Set malformed");
  const metadata = snapshot.keys.map((jwk) => {
    const normalized = snapshotJwk(jwk);
    return Array.isArray(normalized.key_ops) && (normalized.key_ops = [...normalized.key_ops]), normalized;
  }), cached = /* @__PURE__ */ new WeakMap();
  return Object.defineProperty(async (protectedHeader, token) => {
    const { alg, kid } = { ...protectedHeader, ...token?.header }, entry = typeof alg == "string" ? JWS[alg] : void 0;
    if (!entry || entry.secret)
      throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
    const candidates = snapshot.keys.filter((_, index) => isUsableJWK(metadata[index], entry, alg, kid)), { 0: jwk, length } = candidates;
    if (!length)
      throw new JWKSNoMatchingKey();
    if (length !== 1) {
      const error = new JWKSMultipleMatchingKeys();
      throw error[Symbol.asyncIterator] = async function* () {
        for (const jwk2 of candidates)
          try {
            yield await importWithAlgCache(cached, jwk2, entry);
          } catch {
          }
      }, error;
    }
    return importWithAlgCache(cached, jwk, entry);
  }, "jwks", {
    value: () => structuredClone(snapshot)
  });
}

// node_modules/jose/dist/webapi/jwks/remote.js
function isCloudflareWorkers() {
  return typeof WebSocketPair < "u" || typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime < "u" && EdgeRuntime === "vercel";
}
var USER_AGENT;
(typeof navigator > "u" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) && (USER_AGENT = "jose/v6.2.12");
var customFetch = /* @__PURE__ */ Symbol();
async function fetchJwks(url2, headers, signal, fetchImpl = fetch) {
  const response = await fetchImpl(url2, {
    method: "GET",
    signal,
    redirect: "manual",
    headers
  }).catch((err) => {
    throw err.name === "TimeoutError" ? new JWKSTimeout() : err;
  });
  if (response.status !== 200)
    throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
  try {
    return await response.json();
  } catch {
    throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
  }
}
var jwksCache = /* @__PURE__ */ Symbol();
function isFreshFor(timestamp, duration) {
  return Number.isFinite(timestamp) && Date.now() < timestamp + duration;
}
function validateDuration(value, fallback, option) {
  if (Number.isNaN(value))
    throw new TypeError(`"${option}" option must not be NaN`);
  return typeof value == "number" ? value : fallback;
}
function createRemoteJWKSet(url2, options) {
  if (!(url2 instanceof URL))
    throw new TypeError("url must be an instance of URL");
  const href = new URL(url2.href).href, opts = options ?? {}, timeoutOption = opts.timeoutDuration;
  if (typeof timeoutOption == "number" && (!Number.isInteger(timeoutOption) || timeoutOption < 0))
    throw new TypeError('"timeoutDuration" option must be a non-negative integer');
  const timeoutDuration = typeof timeoutOption == "number" ? timeoutOption : 5e3, cooldownDuration = validateDuration(opts.cooldownDuration, 3e4, "cooldownDuration"), cacheMaxAge = validateDuration(opts.cacheMaxAge, 6e5, "cacheMaxAge"), headers = new Headers(opts.headers);
  USER_AGENT && !headers.has("User-Agent") && headers.set("User-Agent", USER_AGENT), headers.has("accept") || headers.set("accept", "application/json, application/jwk-set+json");
  const fetchImpl = opts[customFetch], cache2 = opts[jwksCache];
  let jwksTimestamp, pendingFetch, reloadSequence = 0, appliedSequence = 0, local;
  if (cache2 && typeof cache2 == "object") {
    const { uat, jwks } = cache2;
    isFreshFor(uat, cacheMaxAge) && isJwkSet(jwks) && (jwksTimestamp = uat, local = createLocalJWKSet(jwks));
  }
  const reload = async () => {
    if (pendingFetch && isCloudflareWorkers() && (pendingFetch = void 0), !pendingFetch) {
      const sequence = ++reloadSequence, current = pendingFetch = fetchJwks(href, headers, AbortSignal.timeout(timeoutDuration), fetchImpl).then((json2) => {
        const next = createLocalJWKSet(json2);
        if (sequence <= appliedSequence)
          return;
        local = next;
        const updatedAt = Date.now();
        cache2 && (cache2.uat = updatedAt, cache2.jwks = json2), jwksTimestamp = updatedAt, appliedSequence = sequence;
      }).finally(() => {
        pendingFetch === current && (pendingFetch = void 0);
      });
    }
    await pendingFetch;
  };
  return Object.defineProperties(async (protectedHeader, token) => {
    (!local || !isFreshFor(jwksTimestamp, cacheMaxAge)) && await reload();
    try {
      return await local(protectedHeader, token);
    } catch (err) {
      if (err instanceof JWKSNoMatchingKey && !isFreshFor(jwksTimestamp, cooldownDuration))
        return await reload(), local(protectedHeader, token);
      throw err;
    }
  }, {
    coolingDown: {
      get: () => isFreshFor(jwksTimestamp, cooldownDuration),
      enumerable: true
    },
    fresh: {
      get: () => isFreshFor(jwksTimestamp, cacheMaxAge),
      enumerable: true
    },
    reload: {
      value: reload,
      enumerable: true
    },
    reloading: {
      get: () => !!pendingFetch,
      enumerable: true
    },
    jwks: {
      value: () => local?.jwks(),
      enumerable: true
    }
  });
}

// server/worker.js
var htmlResponse = (html) => new Response(html, { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "no-store" } });
var OWNER_EMAIL = "saptarshi2005.kgp@gmail.com";
var kinds = ["projects", "certificates", "poems", "photography", "skills", "pages"];
var fields = { projects: ["title", "category", "lead", "description", "tags", "image", "link", "demo", "caseText"], certificates: ["title", "issuer", "kind", "group", "category", "file", "image"], poems: ["title", "language", "format", "file", "image", "text"], photography: ["title", "description", "image"], skills: ["title", "description", "tags", "roles", "evidence"], pages: ["title", "text"] };
var esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
var json = (d, status = 200) => new Response(JSON.stringify(d), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
function url(s) {
  if (!s) return "";
  if (/^https:\/\/[a-z0-9.-]+(?::443)?(?:[/?#]|$)/i.test(s)) return s;
  if (/^(?:assets|certificates|poems|case-studies)\/[a-zA-Z0-9_./%-]+$/.test(s) && !s.includes("..")) return "/" + s;
  if (/^\/media\/[a-zA-Z0-9-]+$/.test(s)) return s;
  return "";
}
var demoDefaults = { project_606: "https://mediassist-chatbot.onrender.com/", project_707: "https://ai-hr-rho-ten.vercel.app/" };
var demoUrl = (r) => url(r.data.demo) || demoDefaults[r.id] || "";
async function records(env) {
  const q = await env.DB.prepare("SELECT * FROM content").all();
  const map = new Map(seed_default.map((r) => [r.id, { ...r, data: { ...r.data } }]));
  for (const r of q.results) map.set(r.id, { ...r, hidden: !!r.hidden, data: JSON.parse(r.data) });
  return [...map.values()].sort((a, b) => a.position - b.position || a.id.localeCompare(b.id));
}
var accessKeys = /* @__PURE__ */ new Map();
async function isOwner(req, env) {
  let id, email, key = "admin";
  if (env.POLICY_AUD || env.TEAM_DOMAIN) {
    if (!env.POLICY_AUD || !env.TEAM_DOMAIN) return false;
    const issuer = env.TEAM_DOMAIN.replace(/\/$/, "");
    if (!/^https:\/\/[a-z0-9.-]+\.cloudflareaccess\.com$/i.test(issuer)) return false;
    const token = req.headers.get("cf-access-jwt-assertion");
    if (!token) return false;
    try {
      if (!accessKeys.has(issuer)) accessKeys.set(issuer, createRemoteJWKSet(new URL(issuer + "/cdn-cgi/access/certs")));
      const verified = await jwtVerify(token, accessKeys.get(issuer), { issuer, audience: env.POLICY_AUD });
      id = verified.payload.sub;
      email = verified.payload.email?.toLowerCase();
      key = "admin_cloudflare";
    } catch {
      return false;
    }
  } else {
    if (new URL(req.url).hostname !== "iamsapta.saptarshi2005-kgp.chatgpt.site") return false;
    id = req.headers.get("oai-authenticated-user-id");
    email = req.headers.get("oai-authenticated-user-email")?.toLowerCase();
  }
  if (!id || email !== OWNER_EMAIL) return false;
  const pinned = await env.DB.prepare("SELECT user_id FROM owner WHERE key = ?").bind(key).first();
  if (pinned) return pinned.user_id === id;
  await env.DB.prepare("INSERT OR IGNORE INTO owner (key,user_id) VALUES (?,?)").bind(key, id).run();
  return (await env.DB.prepare("SELECT user_id FROM owner WHERE key = ?").bind(key).first()).user_id === id;
}
var tags = (s) => String(s || "").split(",").filter(Boolean).map((t) => `<span class="tag">${esc(t.trim())}</span>`).join("");
function render(r) {
  const d = r.data;
  const demo = r.kind === "projects" ? demoUrl(r) : "";
  if (d.html) {
    if (demo && !d.html.includes(demo)) return d.html.replace("</article>", `<div class="project-links"><a href="${esc(demo)}" target="_blank" rel="noopener noreferrer">Try live app \u2197</a></div></article>`);
    return d.html;
  }
  const title = esc(d.title);
  const img = url(d.image);
  const file = url(d.file);
  const link = url(d.link);
  switch (r.kind) {
    case "projects":
      return `<article class="card project-card" id="${r.id}" data-category="${esc(d.category)}" data-reveal>${img ? `<a class="project-preview" href="/project/${r.id}"><img src="${esc(img)}" loading="lazy" alt="${title}"></a>` : ""}<div class="project-meta">${esc(d.category)}</div><h3>${title}</h3><p class="project-lead">${esc(d.lead)}</p><p class="muted">${esc(d.description)}</p><div class="tag-list">${tags(d.tags)}</div><div class="card-actions"><a class="btn" href="/project/${r.id}">Project overview \u2192</a><button class="btn-details" data-project="${r.id}" aria-haspopup="dialog">Quick details \u2192</button></div>${demo || link ? `<div class="project-links">${demo ? `<a href="${esc(demo)}" target="_blank" rel="noopener noreferrer">Try live app \u2197</a>` : ""}${link ? `<a href="${esc(link)}" target="_blank" rel="noopener noreferrer">View repository \u2197</a>` : ""}</div>` : ""}</article>`;
    case "certificates":
      return `<article class="certificate-card" data-cert-group="${esc(d.group)}" data-cert-category="${esc(d.category)}">${img ? `<a class="cert-preview" href="${esc(file)}" target="_blank" rel="noopener"><img src="${esc(img)}" alt="${title}" loading="lazy"></a>` : ""}<div class="cert-body"><span class="cert-kind">${esc(d.kind)}</span><h3>${title}</h3><p class="cert-issuer">${esc(d.issuer)}</p><div class="cert-actions"><a href="${esc(file)}" target="_blank" rel="noopener">View certificate \u2197</a><a href="${esc(file)}" download>Download \u2193</a></div></div></article>`;
    case "skills":
      return `<article class="card skill-card" data-skill-roles="${esc(d.roles)}"><h3>${title}</h3><p class="muted">${esc(d.description)}</p><div class="tag-list">${tags(d.tags)}</div><details class="skill-evidence"><summary>Explore the evidence</summary><p>${esc(d.evidence)}</p></details></article>`;
    case "poems":
      return `<article class="poem-card" id="${r.id}" data-language="${esc(d.language)}">${d.format === "text" ? `<p class="poem-text">${esc(d.text)}</p>` : `<div class="poem-media">${d.format === "video" ? `<video controls playsinline preload="none" poster="${esc(img)}" aria-label="${title}"><source src="${esc(file)}" type="video/mp4"></video>` : `<a href="${esc(file)}" target="_blank" rel="noopener"><img src="${esc(file)}" alt="${title}" loading="lazy"></a>`}</div>`}<div class="poem-info"><span class="eyebrow">${d.language === "bn" ? "\u09AC\u09BE\u0982\u09B2\u09BE" : "ENGLISH"}</span><h2>${title}</h2>${file ? `<a class="text-link" href="${esc(file)}" target="_blank" rel="noopener">Open original \u2197</a>` : ""}</div></article>`;
    case "photography":
      return `<figure class="photo-card">${img ? `<a href="${esc(img)}" target="_blank" rel="noopener"><img src="${esc(img)}" alt="${title}" loading="lazy" decoding="async"></a>` : ""}<figcaption><span>${title}</span>${d.description ? `<p>${esc(d.description)}</p>` : ""}</figcaption></figure>`;
  }
  return "";
}
function shell(title, body) {
  return new Response(`<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Saptarshi Mandal</title><link rel="stylesheet" href="/styles.css"></head><body><main class="wrap case-page"><a class="btn" href="/#projects">\u2190 Portfolio</a>${body}</main></body></html>`, { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "no-store" } });
}
var worker_default = { async fetch(req, env) {
  try {
    let path = new URL(req.url).pathname;
    if (path.startsWith("/case-studies/") && !path.endsWith(".html")) path += ".html";
    if (path.startsWith("/api/admin/") || path === "/admin" || path === "/admin.html") {
      if (!await isOwner(req, env)) {
        if (path.startsWith("/api/")) return json({ error: "Owner sign-in required" }, 403);
        return shell("Owner access", env.POLICY_AUD ? "<h1>Portfolio admin</h1><p>Sign in through the configured Cloudflare Access application to manage this portfolio.</p>" : '<h1>Portfolio admin</h1><p>Sign in with the owner\u2019s ChatGPT account to manage this portfolio.</p><a class="btn" target="_top" href="/signin-with-chatgpt?return_to=%2Fadmin">Sign in with ChatGPT</a>');
      }
      if (!["GET", "HEAD"].includes(req.method) && req.headers.get("Origin") !== new URL(req.url).origin) return json({ error: "Invalid request origin" }, 403);
      if (path === "/api/admin/content" && req.method === "GET") return json({ records: await records(env), fields });
      if (path === "/api/admin/save" && req.method === "POST") {
        if (Number(req.headers.get("Content-Length") || 0) > 15e4) return json({ error: "Entry too large" }, 413);
        const input = await req.json();
        if (!input || typeof input !== "object" || !kinds.includes(input.kind) || !/^[-a-zA-Z0-9_]{1,100}$/.test(input.id)) return json({ error: "Invalid item" }, 400);
        const all = await records(env), old = all.find((r) => r.id === input.id);
        if (old && old.kind !== input.kind) return json({ error: "Item type cannot change" }, 400);
        if (input.kind === "pages" && !old) return json({ error: "Use an existing page section" }, 400);
        const data = {};
        for (const f of fields[input.kind]) {
          data[f] = String(input.data?.[f] || "").trim();
          if (data[f].length > 2e4) return json({ error: "Text is too long" }, 400);
          if (["link", "demo", "image", "file"].includes(f) && data[f] && !url(data[f])) return json({ error: "Use an uploaded file or an HTTPS link" }, 400);
        }
        if (!data.title) return json({ error: "Title is required" }, 400);
        const choices = { group: ["tech", "uem", "iitm", "atl"], language: ["en", "bn"], format: ["image", "video", "text"] };
        for (const [k, allowed] of Object.entries(choices)) if (k in data && !allowed.includes(data[k])) return json({ error: "Invalid " + k }, 400);
        if (input.kind === "certificates" && !data.file) return json({ error: "Upload or link a certificate" }, 400);
        if (input.kind === "poems" && data.format !== "text" && !data.file) return json({ error: "Upload or link a poem" }, 400);
        if (input.kind === "projects" && !["data-ml", "software-iot"].includes(data.category)) return json({ error: "Choose a project category" }, 400);
        if (input.kind === "pages") data.selector = old.data.selector;
        if (old && fields[input.kind].every((f) => String(old.data[f] || "").trim() === data[f]) && old.data.html) data.html = old.data.html;
        const rev = Number(input.revision) || 0;
        const pos = Math.min(1e5, Math.max(0, Number(input.position) || 0));
        const sql = "INSERT INTO content (id,kind,data,position,hidden,revision,updated) VALUES (?,?,?,?,?,1,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data,position=excluded.position,hidden=excluded.hidden,revision=content.revision+1,updated=excluded.updated WHERE content.revision = ?";
        const result = await env.DB.prepare(sql).bind(input.id, input.kind, JSON.stringify(data), pos, input.hidden ? 1 : 0, (/* @__PURE__ */ new Date()).toISOString(), rev).run();
        if (!result.meta.changes) return json({ error: "This item changed in another tab. Reload before saving." }, 409);
        return json({ ok: true });
      }
      if (path === "/api/admin/upload" && req.method === "POST") {
        const size = Number(req.headers.get("Content-Length"));
        if (!size || size > 20 * 1024 * 1024) return json({ error: "Choose a file smaller than 20 MB" }, 413);
        const f = await req.blob();
        const type = f.type.split(";")[0];
        if (!["image/png", "image/jpeg", "image/webp", "application/pdf", "video/mp4"].includes(type)) return json({ error: "Use PNG, JPG, WebP, PDF or MP4" }, 400);
        const bytes = new Uint8Array(await f.slice(0, 16).arrayBuffer());
        const sig2 = Array.from(bytes);
        const valid = type === "application/pdf" ? String.fromCharCode(...bytes.slice(0, 5)) === "%PDF-" : type === "image/png" ? sig2.slice(0, 4).join(",") === "137,80,78,71" : type === "image/jpeg" ? sig2[0] === 255 && sig2[1] === 216 : type === "image/webp" ? String.fromCharCode(...bytes.slice(8, 12)) === "WEBP" : String.fromCharCode(...bytes.slice(4, 8)) === "ftyp";
        if (!valid) return json({ error: "File content does not match its format" }, 400);
        const id = crypto.randomUUID();
        await env.BUCKET.put(id, f.stream(), { httpMetadata: { contentType: type } });
        await env.DB.prepare("INSERT INTO uploads (id,name,type,size) VALUES (?,?,?,?)").bind(id, "upload", type, f.size).run();
        return json({ url: "/media/" + id });
      }
      if (path === "/admin" || path === "/admin.html") return htmlResponse(templates_default.admin);
      return json({ error: "Not found" }, 404);
    }
    if (path.startsWith("/media/")) {
      const key = path.slice(7);
      if (!/^[a-f0-9-]{36}$/.test(key)) return new Response("Not found", { status: 404 });
      if (!["GET", "HEAD"].includes(req.method)) return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
      const o = await env.BUCKET.get(key, { range: req.headers });
      if (!o) return new Response("Not found", { status: 404 });
      const h = new Headers();
      o.writeHttpMetadata(h);
      h.set("X-Content-Type-Options", "nosniff");
      h.set("Cache-Control", "public,max-age=86400");
      h.set("Accept-Ranges", "bytes");
      if (req.headers.has("Range") && o.range) {
        h.set("Content-Range", `bytes ${o.range.offset}-${o.range.offset + o.range.length - 1}/${o.size}`);
        h.set("Content-Length", String(o.range.length));
      }
      return new Response(req.method === "HEAD" ? null : o.body, { status: req.headers.has("Range") && o.range ? 206 : 200, headers: h });
    }
    if (["/", "/index.html", "/poetry.html", "/poetry"].includes(path) || path.startsWith("/project/") || path.startsWith("/case-studies/")) {
      const all = await records(env);
      const visible = all.filter((r) => !r.hidden);
      const projects = visible.filter((r) => r.kind === "projects");
      if (path.startsWith("/project/") || path.startsWith("/case-studies/")) {
        const r = projects.find((r2) => "/project/" + r2.id === path || "/" + r2.data.caseUrl === path || seed_default.find((s) => s.id === r2.id)?.data.caseUrl === path.slice(1));
        if (!r) return new Response("Project not found", { status: 404 });
        if (r.revision === 0 && path.startsWith("/case-studies/") && templates_default.cases[path]) return htmlResponse(templates_default.cases[path]);
        return shell(r.data.title, `<h1>${esc(r.data.title)}</h1><p>${esc(r.data.lead)}</p>${url(r.data.image) ? `<figure class="case-figure"><img src="${esc(url(r.data.image))}" alt="${esc(r.data.title)}"></figure>` : ""}<p>${esc(r.data.description)}</p><div class="poem-text">${esc(r.data.caseText)}</div>${demoUrl(r) ? `<a class="btn" href="${esc(demoUrl(r))}" target="_blank" rel="noopener noreferrer">Try live app \u2197</a>` : ""}${url(r.data.link) ? `<a class="btn" href="${esc(url(r.data.link))}" target="_blank" rel="noopener noreferrer">View repository \u2197</a>` : ""}`);
      }
      let response = htmlResponse(path.startsWith("/poetry") ? templates_default.poetry : templates_default.home);
      let rw = new HTMLRewriter();
      const groups = { projects: ".project-grid", certificates: ".certificate-grid", skills: "#skillsGrid", poems: ".poem-grid", photography: ".photography-grid" };
      for (const [kind, selector] of Object.entries(groups)) rw = rw.on(selector, { element(el) {
        const items = visible.filter((r) => r.kind === kind);
        if (items.length || kind !== "photography") el.setInnerContent(items.map(render).join(""), { html: true });
      } });
      for (const r of all.filter((r2) => r2.kind === "pages" && r2.revision > 0)) rw = rw.on(r.data.selector, { element(el) {
        el.setInnerContent(r.hidden ? "" : esc(r.data.text).replace(/\n/g, "<br>"), { html: true });
      } });
      const pd = Object.fromEntries(projects.map((r) => [r.id, { title: r.data.title, category: r.data.category, lead: r.data.lead, desc: r.data.description, tags: r.data.tags.split(",").map((s) => s.trim()), link: url(r.data.link) || "/project/" + r.id, linkLabel: url(r.data.link) ? "View repository" : "Project overview" }]));
      const poemItems = visible.filter((r) => r.kind === "poems").map((r) => ({ titleLine1: r.data.title, tag: r.data.language === "bn" ? "\u09AC\u09BE\u0982\u09B2\u09BE" : "English", img: url(r.data.image) || "/assets/carousel-placeholder.svg", ctaUrl: "/poetry.html#" + r.id, ctaText: "Read / watch poem" }));
      rw = rw.on("head", { element(el) {
        el.prepend("<script>window.cmsCarouselPoems=" + JSON.stringify(poemItems).replace(/</g, "\\u003c") + ";window.cmsProjectData=" + JSON.stringify(pd).replace(/</g, "\\u003c") + ";<\/script>", { html: true });
      } });
      for (const g of ["tech", "uem", "iitm", "atl"]) rw = rw.on(`[data-cert-group-filter="${g}"]`, { element(el) {
        el.setInnerContent((g === "tech" ? "Tech" : g.toUpperCase()) + " (" + visible.filter((r) => r.kind === "certificates" && r.data.group === g).length + ")");
      } });
      rw = rw.on(".poem-features", { element(el) {
        el.setInnerContent(visible.filter((r) => r.kind === "poems").slice(0, 3).map((r) => `<a href="/poetry.html#${r.id}">${esc(r.data.title)}</a>`).join(""), { html: true });
      } }).on(".poetry-cover-bottom", { element(el) {
        el.setInnerContent(visible.filter((r) => r.kind === "poems").length + " poems \xB7 Explore \u2192");
      } }).on(".poetry-collection>.poetry-deck", { element(el) {
        el.setInnerContent("Explore the poetry collection in its original visual form. Visible videos loop silently. Hover to pause; move away to resume. Reduced-motion preferences are respected.");
      } }).on("#poemStatus", { element(el) {
        el.setInnerContent(visible.filter((r) => r.kind === "poems").length + " poems");
      } });
      response = rw.transform(response);
      const h = new Headers(response.headers);
      h.set("Cache-Control", "no-store");
      return new Response(response.body, { status: response.status, headers: h });
    }
    return env.ASSETS.fetch(req);
  } catch (e) {
    console.error("Portfolio request failed", e.message);
    return json({ error: "Content is temporarily unavailable. Please try again; your saved work is preserved." }, 503);
  }
} };
export {
  worker_default as default
};
