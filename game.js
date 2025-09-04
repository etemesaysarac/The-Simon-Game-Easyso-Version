$(function () {
  // I18N
  const i18n = {
    en: {
      start: "Start",
      retry: "Retry",
      exit: "Exit",
      player: "Player Name:",
      theme: "Theme:",
      lang: "Language:",
      diff: "Difficulty:",
      how: "How to Play?",
      intro1: "Simon flashes a sequence of colors. Your goal is to remember and repeat it.",
      intro2: "Each round adds one more step, increasing the challenge.",
      goalTitle: "Your Objective",
      goal1: "Watch the sequence and memorize the order.",
      goal2: "Repeat the exact order by pressing the colored buttons.",
      goal3: "Reach higher levels by completing sequences.",
      rulesTitle: "Rules & Enhancements",
      rule1: "✔ Each correct click triggers confetti and raises your correct counter.",
      rule2: "❌ One wrong click ends the game and raises your wrong counter.",
      rule3: "🏆 Your best level is saved as High Score and shown on the leaderboard.",
      tipsTitle: "Tips",
      tip1: "Choose difficulty: Fast speeds timing; Double Flash blinks each step twice.",
      tip2: "Use sound and vibration for rhythm (toggle sound in game).",
      level: "Level",
      result: (name, sec, correct, level) =>
        `${name}, you played for ${sec} seconds, made ${correct} correct moves, and reached Level ${level}.`,
      retryCta: "Retry",
      exitCta: "Exit",
      muteOn: "🔇",
      muteOff: "🔊",
      lbTitle: "Top 5 Leaderboard",
      namePlaceholder: "Your name",
      themeOptions: { dark: "Dark", light: "Light" },
      difficultyOptions: { normal: "Normal", fast: "Fast", double: "Double Flash" },
      errors: { nameRequired: "Please enter your name (min 2 characters)." }
    },
    tr: {
      start: "Başla",
      retry: "Tekrar Dene",
      exit: "Çıkış",
      player: "Oyuncu Adı:",
      theme: "Tema:",
      lang: "Dil:",
      diff: "Zorluk:",
      how: "Nasıl Oynanır?",
      intro1: "Simon renkleri sırayla yakar. Amacın bu sırayı hatırlayıp tekrar etmektir.",
      intro2: "Her turda dizi bir adım uzar ve zorluk artar.",
      goalTitle: "Hedefin",
      goal1: "Sırayı dikkatle izle ve aklında tut.",
      goal2: "Aynı sırayı renkli butonlara basarak tekrar et.",
      goal3: "Her sırayı tamamlayıp üst seviyelere çık.",
      rulesTitle: "Kurallar ve Geliştirmeler",
      rule1: "✔ Her doğru tıklamada konfeti çıkar ve doğru sayın artar.",
      rule2: "❌ Tek yanlış tıklama oyunu bitirir ve yanlış sayın artar.",
      rule3: "🏆 En iyi seviyen High Score olarak kaydedilir ve listede görünür.",
      tipsTitle: "İpuçları",
      tip1: "Zorluk seç: Fast hızlandırır; Double Flash her adımı iki kez yakar.",
      tip2: "Ritim için ses ve titreşimden yararlan (sesi oyun içinde aç/kapa).",
      level: "Seviye",
      result: (name, sec, correct, level) =>
        `${name}, ${sec} saniye oynadınız, ${correct} doğru hamleniz var ve ${level}. seviyeye ulaştınız.`,
      retryCta: "Tekrar Dene",
      exitCta: "Çıkış",
      muteOn: "🔇",
      muteOff: "🔊",
      lbTitle: "En İyi 5 Liderlik Tablosu",
      namePlaceholder: "Adınız",
      themeOptions: { dark: "Koyu", light: "Açık" },
      difficultyOptions: { normal: "Normal", fast: "Hızlı", double: "Çift Flaş" },
      errors: { nameRequired: "Lütfen adınızı girin (en az 2 karakter)." }
    },
    ar: {
      start: "ابدأ", retry: "أعد المحاولة", exit: "خروج",
      player: "اسم اللاعب:", theme: "السمة:", lang: "اللغة:", diff: "الصعوبة:",
      how: "كيف تلعب؟",
      intro1: "يعرض سايمون تسلسلاً من الألوان. احفظه وأعده.",
      intro2: "تضيف كل جولة خطوة جديدة ويزداد التحدي.",
      goalTitle: "هدفك",
      goal1: "راقب التسلسل واحفظ الترتيب.",
      goal2: "أعد الترتيب عبر الأزرار الملونة.",
      goal3: "تقدم بالمستويات بإكمال التسلسلات.",
      rulesTitle: "القواعد والتحسينات",
      rule1: "✔ كل نقرة صحيحة تُطلق القصاصات وتزيد العداد الصحيح.",
      rule2: "❌ نقرة خاطئة تنهي اللعبة وتزيد العداد الخاطئ.",
      rule3: "🏆 أفضل مستوى محفوظ ويظهر في القائمة.",
      tipsTitle: "نصائح",
      tip1: "اختر الصعوبة: السريع يسرّع؛ الوميض المزدوج يكرر كل خطوة مرتين.",
      tip2: "استخدم الصوت والاهتزاز للإيقاع.",
      level: "المستوى",
      result: (name, sec, correct, level) =>
        `${name}، لعبت ${sec} ثانية مع ${correct} نقرة صحيحة وبلغت المستوى ${level}.`,
      retryCta: "أعد المحاولة", exitCta: "خروج",
      muteOn: "🔇", muteOff: "🔊",
      lbTitle: "أفضل 5 لاعبين",
      namePlaceholder: "اسمك",
      themeOptions: { dark: "داكن", light: "فاتح" },
      difficultyOptions: { normal: "عادي", fast: "سريع", double: "وميضان مزدوج" },
      errors: { nameRequired: "الرجاء إدخال الاسم (2 أحرف على الأقل)." }
    },
    es: {
      start: "Comenzar", retry: "Reintentar", exit: "Salir",
      player: "Nombre:", theme: "Tema:", lang: "Idioma:", diff: "Dificultad:",
      how: "¿Cómo jugar?",
      intro1: "Simon mostrará una secuencia de colores. Recuérdala y repítela.",
      intro2: "Cada ronda añade un paso y aumenta el desafío.",
      goalTitle: "Tu objetivo",
      goal1: "Observa y memoriza el orden.",
      goal2: "Repite el orden pulsando los botones.",
      goal3: "Avanza superando las secuencias.",
      rulesTitle: "Reglas y mejoras",
      rule1: "✔ Cada acierto lanza confeti y aumenta tu contador.",
      rule2: "❌ Un fallo termina la partida y aumenta los errores.",
      rule3: "🏆 Tu mejor nivel se guarda y aparece en la lista.",
      tipsTitle: "Consejos",
      tip1: "Dificultad: Fast acelera; Double Flash parpadea dos veces.",
      tip2: "Usa sonido y vibración para el ritmo.",
      level: "Nivel",
      result: (name, sec, correct, level) =>
        `${name}, jugaste ${sec} segundos, ${correct} aciertos y alcanzaste el Nivel ${level}.`,
      retryCta: "Reintentar", exitCta: "Salir",
      muteOn: "🔇", muteOff: "🔊",
      lbTitle: "Top 5",
      namePlaceholder: "Tu nombre",
      themeOptions: { dark: "Oscuro", light: "Claro" },
      difficultyOptions: { normal: "Normal", fast: "Rápido", double: "Doble destello" },
      errors: { nameRequired: "Introduce tu nombre (mín. 2 caracteres)." }
    },
    de: {
      start: "Starten", retry: "Erneut", exit: "Beenden",
      player: "Name:", theme: "Thema:", lang: "Sprache:", diff: "Schwierigkeit:",
      how: "Wie spielt man?",
      intro1: "Simon blinkt eine Farbsequenz. Merke sie dir und wiederhole sie.",
      intro2: "Jede Runde fügt einen Schritt hinzu – mehr Herausforderung.",
      goalTitle: "Dein Ziel",
      goal1: "Beobachte und präge dir die Reihenfolge ein.",
      goal2: "Wiederhole sie über die Buttons.",
      goal3: "Steige durch erfolgreiche Sequenzen auf.",
      rulesTitle: "Regeln & Erweiterungen",
      rule1: "✔ Jeder Treffer startet Konfetti und erhöht den Zähler.",
      rule2: "❌ Ein Fehler beendet die Partie und erhöht Fehler.",
      rule3: "🏆 Bestlevel wird gespeichert und gelistet.",
      tipsTitle: "Tipps",
      tip1: "Fast beschleunigt; Double Flash doppelt blinken.",
      tip2: "Ton und Vibration für den Rhythmus.",
      level: "Stufe",
      result: (name, sec, correct, level) =>
        `${name}, ${sec} Sekunden gespielt, ${correct} Treffer, Stufe ${level}.`,
      retryCta: "Erneut", exitCta: "Beenden",
      muteOn: "🔇", muteOff: "🔊",
      lbTitle: "Top 5 Bestenliste",
      namePlaceholder: "Dein Name",
      themeOptions: { dark: "Dunkel", light: "Hell" },
      difficultyOptions: { normal: "Normal", fast: "Schnell", double: "Doppelblitz" },
      errors: { nameRequired: "Bitte Name eingeben (min. 2 Zeichen)." }
    },
    fr: {
      start: "Démarrer", retry: "Rejouer", exit: "Quitter",
      player: "Nom:", theme: "Thème:", lang: "Langue:", diff: "Difficulté:",
      how: "Comment jouer ?",
      intro1: "Simon affiche une séquence de couleurs. Mémorisez-la et reproduisez-la.",
      intro2: "Chaque manche ajoute une étape; défi accru.",
      goalTitle: "Votre objectif",
      goal1: "Observez et mémorisez l'ordre.",
      goal2: "Répétez l'ordre via les boutons.",
      goal3: "Progressez en réussissant les séquences.",
      rulesTitle: "Règles & améliorations",
      rule1: "✔ Clic correct: confettis + compteur.",
      rule2: "❌ Clic incorrect: fin de partie + erreurs.",
      rule3: "🏆 Meilleur niveau sauvegardé et listé.",
      tipsTitle: "Astuces",
      tip1: "Fast accélère; Double Flash double clignotement.",
      tip2: "Utilisez son et vibration.",
      level: "Niveau",
      result: (name, sec, correct, level) =>
        `${name}, ${sec}s de jeu, ${correct} coups corrects, Niveau ${level}.`,
      retryCta: "Rejouer", exitCta: "Quitter",
      muteOn: "🔇", muteOff: "🔊",
      lbTitle: "Top 5",
      namePlaceholder: "Votre nom",
      themeOptions: { dark: "Sombre", light: "Clair" },
      difficultyOptions: { normal: "Normal", fast: "Rapide", double: "Double clignotement" },
      errors: { nameRequired: "Entrez un nom (min 2 caractères)." }
    },
  };

  const RTL = new Set(["ar"]);

  // State
  const colors = ["red", "blue", "green", "yellow"];
  let gamePattern = [];
  let userPattern = [];
  let started = false;
  let level = 0;
  let correctCount = 0;
  let wrongCount = 0;

  let currentLang = localStorage.getItem("simonLang") || "en";
  let difficulty = localStorage.getItem("simonDifficulty") || "normal";
  let muted = localStorage.getItem("simonMuted") === "1";
  let theme = localStorage.getItem("simonTheme") || "dark";
  let playerName = localStorage.getItem("simonPlayerName") || "";
  let startTime = 0;
  let highScore = Number(localStorage.getItem("simonHighScore") || 0);

  // Persisted controls to UI
  $("#lang").val(currentLang);
  $("#difficulty").val(difficulty);
  $("#theme").val(theme);
  $("#player-name").val(playerName);

  // Theme
  function applyTheme(next) {
    theme = next;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("simonTheme", theme);
  }
  applyTheme(theme);

  // Date/time
  function tickDateTime() {
    const now = new Date();
    $("#datetime-start").text(now.toLocaleString(currentLang));
    $("#datetime-game").text(now.toLocaleString(currentLang));
    $("#datetime-end").text(now.toLocaleString(currentLang));
  }
  setInterval(tickDateTime, 1000);
  tickDateTime();

  // Leaderboard (local)
  function getLB() {
    try { return JSON.parse(localStorage.getItem("simonLeaderboard") || "[]"); }
    catch { return []; }
  }
  function saveLB(list) { localStorage.setItem("simonLeaderboard", JSON.stringify(list)); }
  function addLB(entry) {
    const list = getLB();
    list.push(entry);
    list.sort((a, b) => b.level - a.level || b.timestamp - a.timestamp);
    saveLB(list.slice(0, 5));
  }
  function renderLB() {
    const d = i18n[currentLang] || i18n.en;
    $("#lb-title").text(d.lbTitle);
    const list = getLB();
    const $ol = $("#lb-list").empty();
    if (!list.length) { $ol.append($("<li>").text("—")); return; }
    list.forEach(item => {
      const date = new Date(item.timestamp).toLocaleDateString(currentLang);
      $ol.append($("<li>").text(`${item.name} — L${item.level} — ${date}`));
    });
  }

  // Language
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("simonLang", lang);
    const d = i18n[lang] || i18n.en;
    const isRTL = RTL.has(lang);
    $("html").attr("lang", lang).attr("dir", isRTL ? "rtl" : "ltr");

    // Start
    $("#player-label").text(d.player);
    $("#player-name").attr("placeholder", d.namePlaceholder);
    $("#lang-label").text(d.lang);
    $("#diff-label").text(d.diff);
    $("#theme-label").text(d.theme);
    $("#how-title").text(d.how);
    $("#how-intro-1").text(d.intro1);
    $("#how-intro-2").text(d.intro2);
    $("#how-goal-title").text(d.goalTitle);
    $("#how-goal-1").text(d.goal1);
    $("#how-goal-2").text(d.goal2);
    $("#how-goal-3").text(d.goal3);
    $("#how-rules-title").text(d.rulesTitle);
    $("#how-rule-1").text(d.rule1);
    $("#how-rule-2").text(d.rule2);
    $("#how-rule-3").text(d.rule3);
    $("#how-tips-title").text(d.tipsTitle);
    $("#how-tip-1").text(d.tip1);
    $("#how-tip-2").text(d.tip2);
    $("#start-btn").text(d.start);

    // Option labels
    $("#theme option[value='dark']").text(d.themeOptions.dark);
    $("#theme option[value='light']").text(d.themeOptions.light);
    $("#difficulty option[value='normal']").text(d.difficultyOptions.normal);
    $("#difficulty option[value='fast']").text(d.difficultyOptions.fast);
    $("#difficulty option[value='double']").text(d.difficultyOptions.double);

    // Game / End
    $("#level-title").text(`${d.level} ${level}`);
    $("#player-chip").text(playerName ? `👤 ${playerName}` : "👤 —");
    $("#mute-btn").text(muted ? d.muteOn : d.muteOff);
    $("#retry-btn").text(d.retryCta);
    $("#exit-btn").text(d.exitCta);

    // Footer + Leaderboard
    tickDateTime();
    renderLB();
  }

  applyLanguage(currentLang);
  $("#high-score").text(`🏆 ${highScore}`);
  renderLB();

  // Control events
  $("#lang").on("change", function () { applyLanguage(this.value); });
  $("#difficulty").on("change", function () {
    difficulty = this.value; localStorage.setItem("simonDifficulty", difficulty);
  });
  $("#theme").on("change", function () { applyTheme(this.value); });
  $("#theme-toggle").on("click", function () {
    const next = theme === "dark" ? "light" : "dark";
    $("#theme").val(next); applyTheme(next);
  });
  $("#player-name").on("input", function () {
    playerName = $(this).val().trim();
    localStorage.setItem("simonPlayerName", playerName);
    $("#player-chip").text(playerName ? `👤 ${playerName}` : "👤 —");
  });
  $("#mute-btn").on("click", function () {
    muted = !muted; localStorage.setItem("simonMuted", muted ? "1" : "0");
    $("#mute-btn").text(muted ? i18n[currentLang].muteOn : i18n[currentLang].muteOff);
  });

  // Start / Retry / Exit
  $("#start-btn").on("click", function () {
    const d = i18n[currentLang] || i18n.en;
    const name = ($("#player-name").val() || "").trim();
    if (name.length < 2) { alert(d.errors.nameRequired); return; }
    playerName = name; localStorage.setItem("simonPlayerName", playerName);

    $("#start-screen").addClass("hidden");
    $("#end-screen").addClass("hidden");
    $("#game-screen").removeClass("hidden");
    startGame();
  });

  $("#retry-btn").on("click", function () {
    $("#end-screen").addClass("hidden");
    $("#game-screen").removeClass("hidden");
    startGame();
  });

  $("#exit-btn").on("click", function () {
    $("#end-screen").addClass("hidden");
    $("#game-screen").addClass("hidden");
    $("#start-screen").removeClass("hidden");
    renderLB();
  });

  // Gameplay timings
  const timings = () => {
    switch (difficulty) {
      case "fast":   return { stepDelay: 340, flash: 120, between: 120, double: false };
      case "double": return { stepDelay: 520, flash: 150, between: 150, double: true };
      default:       return { stepDelay: 640, flash: 160, between: 160, double: false };
    }
  };

  function startGame() {
    const d = i18n[currentLang] || i18n.en;
    level = 0; correctCount = 0; wrongCount = 0;
    userPattern = []; gamePattern = []; started = true;
    startTime = Date.now();
    $("#correct-count").text(`✔ ${correctCount}`);
    $("#wrong-count").text(`❌ ${wrongCount}`);
    $("#high-score").text(`🏆 ${highScore}`);
    $("#level-title").text(`${d.level} ${level}`);
    nextSequence();
  }

  $(".btn").on("click", function () {
    if (!started) return;
    const color = $(this).attr("id");
    userPattern.push(color);
    playSound(color);
    vibrate(20);
    press(color);
    checkAnswer(userPattern.length - 1);
  });

  function nextSequence() {
    userPattern = [];
    level++;
    $("#level-title").text(`${i18n[currentLang].level} ${level}`);

    const next = colors[Math.floor(Math.random() * colors.length)];
    gamePattern.push(next);

    const t = timings();
    let idx = 0;
    function showStep() {
      const c = gamePattern[idx];
      if (t.double) { flash(c, t.flash); setTimeout(() => flash(c, t.flash), t.flash + 80); }
      else { flash(c, t.flash); }
      playSound(c, true);
      setTimeout(() => {
        idx++;
        if (idx < gamePattern.length) setTimeout(showStep, t.stepDelay);
      }, t.between);
    }
    setTimeout(showStep, 200);
  }

  function checkAnswer(i) {
    const ok = gamePattern[i] === userPattern[i];
    if (ok) {
      correctCount++; $("#correct-count").text(`✔ ${correctCount}`); confetti();
      if (userPattern.length === gamePattern.length) setTimeout(nextSequence, 560);
    } else {
      wrongCount++; $("#wrong-count").text(`❌ ${wrongCount}`);
      playSound("wrong"); vibrate(220);
      $("body").addClass("game-over"); setTimeout(() => $("body").removeClass("game-over"), 300);
      endGame();
    }
  }

  function endGame() {
    started = false;
    if (level > highScore) { highScore = level; localStorage.setItem("simonHighScore", String(highScore)); }
    $("#high-score").text(`🏆 ${highScore}`);

    const seconds = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    const msg = i18n[currentLang].result(playerName || "Player", seconds, correctCount, level);
    $("#end-message").text(msg);
    addLB({ name: playerName || "Player", level, timestamp: Date.now() });

    $("#game-screen").addClass("hidden");
    $("#end-screen").removeClass("hidden");
    renderLB();
  }

  // UI helpers
  function flash(color, amount = 160) {
    const $el = $(`#${color}`); $el.fadeOut(amount).fadeIn(amount);
  }
  function press(color) {
    const $el = $(`#${color}`); $el.addClass("pressed"); setTimeout(() => $el.removeClass("pressed"), 130);
  }
  function playSound(name/*, allowSeq */) {
    if (muted) return;
    const audio = new Audio(`assets/sounds/${name}.mp3`);
    audio.play().catch(() => {});
  }
  function vibrate(ms) { if (navigator && typeof navigator.vibrate === "function") navigator.vibrate(ms); }

  // Confetti (lightweight)
  function confetti() {
    const container = $("#confetti");
    const n = 18;
    const palette = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#f72585", "#b5179e", "#3a0ca3", "#4895ef"];
    for (let i = 0; i < n; i++) {
      const piece = $("<span>");
      const size = Math.random() * 6 + 6;
      const left = Math.random() * 100;
      const dur = Math.random() * 650 + 600;
      const rot = Math.random() * 720;
      piece.css({
        position: "absolute", top: "-12px", left: `${left}%`,
        width: `${size}px`, height: `${size * 0.6}px`,
        background: palette[(Math.random() * palette.length) | 0], opacity: 0.9,
        transform: `rotate(${rot}deg)`, borderRadius: "2px", pointerEvents: "none"
      });
      container.append(piece);
      piece.animate({ top: "110%", left: `${left + (Math.random() * 12 - 6)}%`, opacity: 1 }, dur, "swing", function () {
        $(this).remove();
      });
    }
  }

  // Initial render
  renderLB();
});

