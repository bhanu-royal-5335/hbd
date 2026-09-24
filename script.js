/**
 * ============================================================================
 * Bangaram💖'S FAIRYTALE BIRTHDAY STORYBOOK - UPGRADED ENGINE
 * 9 Magical Chapters, GPU-Accelerated 3D Doors, 3-Track Player, Easter Egg
 * ============================================================================
 */

// ============================================================================
// 1. STORYBOOK CONFIGURATION (Personalized for Bangaram💖)
// ============================================================================
const CONFIG = {
  recipientName: "Bangaraam",
  initials: "BNG",
  birthdayDate: "Oct 13",

  loader: {
    title: "Happy Birthday, Bangaram💖 ❤️",
    tagline: "Nine magical doors await your discovery in this royal enchanted realm"
  },

  chapters: [
    { num: 1, title: "Royal Palace Sanctuary", prompt: "Open Royal Palace Door", theme: "door-theme-1", emblem: "⚜️", badge: "Chapter 1 of 9" },
    { num: 2, title: "Crystal Palace Gallery", prompt: "Enter Crystal Palace", theme: "door-theme-2", emblem: "💎", badge: "Chapter 2 of 9" },
    { num: 3, title: "Rose Garden Gate", prompt: "Pass Through Rose Gate", theme: "door-theme-3", emblem: "🌹", badge: "Chapter 3 of 9" },
    { num: 4, title: "Lantern Night Garden", prompt: "Enter Lantern Door", theme: "door-theme-4", emblem: "🏮", badge: "Chapter 4 of 9" },
    { num: 5, title: "Heart Lock Sanctuary", prompt: "Unlock Heart Lock", theme: "door-theme-5", emblem: "💖", badge: "Chapter 5 of 9" },
    { num: 6, title: "Royal Treasure Vault", prompt: "Open Treasure Vault", theme: "door-theme-6", emblem: "👑", badge: "Chapter 6 of 9" },
    { num: 7, title: "Diamond Memory Heart", prompt: "Enter Diamond Realm", theme: "door-theme-7", emblem: "✨", badge: "Chapter 7 of 9" },
    { num: 8, title: "Celebration Cake", prompt: "Open Cake Door", theme: "door-theme-8", emblem: "🎂", badge: "Chapter 8 of 9" },
    { num: 9, title: "Heaven Gate Finale", prompt: "Open Heaven Gate", theme: "door-theme-9", emblem: "⭐", badge: "Chapter 9 of 9" }
  ],

  welcome: {
    greeting: "Happy Birthday, My Dearest Bangaram💖",
    quote: '"In a universe of billions of souls, mine will forever dance only to the rhythm of yours."',
    messageP1: "Dearest Bangaram💖, today is the wondrous day the universe was blessed with your radiant light, your contagious laughter, and your pure golden heart.",
    messageP2: "Behind each of these nine magical doors lies a chapter of our fairytale—whispered memories, eternal promises, and the deepest love I hold for you.",
    signature: "Forever Yours ❤️"
  },

  gallery: [
    { id: 1, img: "images/photo1.jpg", title: "Enchanted Castle", subtitle: "Where our fairytale began", desc: "Every royal kingdom pales in comparison to the magic of being beside you, Bangaram💖." },
    { id: 2, img: "images/photo2.jpg", title: "The Golden Rose", subtitle: "A bloom that never fades", desc: "Just like this enchanted rose, my love for you grows more vibrant with every passing day." },
    { id: 3, img: "images/photo3.jpg", title: "Floating Lanterns", subtitle: "Every wish led me to you", desc: "Like thousands of glowing lanterns rising into the night sky, all my wishes found their home in your eyes." },
    { id: 4, img: "images/photo4.jpg", title: "Starlight Heart", subtitle: "Written in the infinite stars", desc: "A constellation crafted in the heavens to celebrate the day you came into this world, Bangaram💖." },
    { id: 5, img: "images/photo5.jpg", title: "Royal Carriage", subtitle: "An endless journey together", desc: "Ready to carry us into endless tomorrows filled with wonder, joy, and shared dreams." },
    { id: 6, img: "images/photo6.jpg", title: "Golden Wings", subtitle: "Love that makes hearts soar", desc: "With you, even the simplest moment feels as light and beautiful as golden butterfly wings." },
    { id: 7, img: "images/photo7.jpg", title: "Princess Tiara", subtitle: "Forever my queen", desc: "Crowns may be made of gold, but your grace and kindness are what truly make you royalty, Bangaram💖." },
    { id: 8, img: "images/photo8.jpg", title: "Magic Storybook", subtitle: "The most beautiful chapter", desc: "Our story is my favorite book in the entire universe, and today we turn to the grandest page." },
    { id: 9, img: "images/photo9.jpg", title: "Secret Gazebo", subtitle: "Under wisteria & moonbeams", desc: "Where quiet whispers and warm hugs turn midnight into our private haven." },
    { id: 10, img: "images/photo10.jpg", title: "Swan Sanctuary", subtitle: "Grace, peace & true devotion", desc: "Gliding together through life's calm waters, hand in hand, heart to heart." },
    { id: 11, img: "images/photo11.jpg", title: "Crystal Palace", subtitle: "Dancing through the years", desc: "Under glittering chandeliers, every second spent in your arms feels like a grand royal ball." },
    { id: 12, img: "images/photo12.jpg", title: "Eternal Promise", subtitle: "A lifetime of pure magic", desc: "Today, tomorrow, and forever, I promise to cherish, protect, and love you endlessly, Bangaram💖." },
    { id: 13, img: "images/photo13.jpg", title: "hi", subtitle: "hello", desc: "" }
  ],

  timeline: [
    { date: "Milestone I", title: "The First Spark", desc: "The exact moment our worlds collided, and my heart quietly whispered: 'This is the one.'" },
    { date: "Milestone II", title: "First Unstoppable Laughter", desc: "When we talked until dawn, laughing until our cheeks hurt, realizing we could never be apart." },
    { date: "Milestone III", title: "Our First Great Adventure", desc: "Stepping into the unknown together and discovering that home isn't a place—it's you, Bangaram💖." },
    { date: "Milestone IV", title: "Through Every Season", desc: "Facing every storm and sunny day side by side, our bond growing stronger with every beat." },
    { date: "Today & Beyond", title: "A Grand Celebration", desc: "Honoring another year of your breathtaking presence and looking forward to an eternity together." }
  ],

  lanternMemories: [
    { icon: "🏮", title: "Midnight Whispers", text: "Under the soft glow of moonlit lanterns, every secret shared brought us closer than ever before." },
    { icon: "✨", title: "Unspoken Understanding", text: "How a single look across a crowded room says more than a thousand spoken words could ever say." },
    { icon: "🌙", title: "Our Quiet Sanctuary", text: "No matter how turbulent the world outside becomes, your presence brings stillness and calm to my soul." },
    { icon: "🕯️", title: "Warmth In The Cold", text: "Your smile is a lantern that keeps darkness away and fills every corner with gentle joy." }
  ],

  loveNotes: [
    { id: 1, title: "Your Smile", teaser: "Touch to unseal...", secret: "Your smile is my sunrise, Bangaram💖. On my darkest days, a single glimpse of your happiness lights up my entire world." },
    { id: 2, title: "Your Kindness", teaser: "Touch to unseal...", secret: "The genuine warmth and compassion you show to everyone around you is the most beautiful thing about you." },
    { id: 3, title: "Our Inside Jokes", teaser: "Touch to unseal...", secret: "Those silly little glances across a crowded room that only you and I understand—they are my absolute favorite treasures." },
    { id: 4, title: "My Safe Haven", teaser: "Touch to unseal...", secret: "Whenever the world gets loud and overwhelming, wrapped in your embrace is the only peace I ever need." },
    { id: 5, title: "The Little Things", teaser: "Touch to unseal...", secret: "How your eyes crinkle when you laugh, the way you hum softly, the gentle way you hold my hand—I notice every detail, Bangaram💖." },
    { id: 6, title: "An Eternal Vow", teaser: "Touch to unseal...", secret: "I will love you through every season, cherish every dream of yours, and spend every day making you feel celebrated." }
  ],

  gift: {
    title: "A Golden Royal Decree For Bangaram💖",
    date: "Proclaimed On Your Fairytale Birthday",
    message: '"Bangaram💖, you are hereby crowned the eternal queen of my heart, the keeper of all my sweetest dreams, and the most radiant soul in every kingdom. May this year shower you with boundless joy, dreams fulfilled, and love that never fades."'
  },

  finale: {
    quote: "You Make My World Beautiful",
    wish: "Happy Birthday Forever ❤️",
    subtext: "Dearest Bangaram💖, may your life forever sparkle with the boundless love and pure happiness you give to the world."
  }
};

// ============================================================================
// 2. LUXURY 3-TRACK MUSIC PLAYER & PROCEDURAL SOUND DESIGN ENGINE
// ============================================================================
class StorybookAudioEngine {
  constructor() {
    this.ctx = null;
    this.bgAudio = document.getElementById("bg-music-player");
    this.playerWidget = document.getElementById("music-player-widget");
    this.visualizer = document.getElementById("audio-visualizer");
    this.playBtn = document.getElementById("player-toggle-btn");
    this.songSelect = document.getElementById("song-select");
    this.volumeSlider = document.getElementById("volume-slider");
    this.trackTitleDisplay = document.getElementById("track-title-display");

    this.isPlaying = false;
    this.currentTrack = localStorage.getItem("Bangaram💖_selected_song") || "piano";
    this.volume = parseFloat(localStorage.getItem("Bangaram💖_music_volume")) || 0.75;
    this.synthTimer = null;

    this.initDOM();
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  initDOM() {
    if (this.songSelect) {
      this.songSelect.value = this.currentTrack;
      this.songSelect.addEventListener("change", (e) => {
        this.switchTrack(e.target.value);
      });
    }

    if (this.volumeSlider) {
      this.volumeSlider.value = this.volume;
      this.volumeSlider.addEventListener("input", (e) => {
        this.volume = parseFloat(e.target.value);
        localStorage.setItem("Bangaram💖_music_volume", this.volume);
        if (this.bgAudio) this.bgAudio.volume = this.volume;
      });
    }

    if (this.playBtn) {
      this.playBtn.addEventListener("click", () => this.toggleMusic());
    }
  }

  async playTrack(trackKey) {
    this.ensureContext();
    this.currentTrack = trackKey || this.currentTrack;
    localStorage.setItem("Bangaram💖_selected_song", this.currentTrack);
    this.isPlaying = true;

    // Update UI track label
    const labels = {
      piano: "Enchanted Piano",
      waltz: "Fairy Tale Waltz",
      musicbox: "Music Box Dreams"
    };
    if (this.trackTitleDisplay) {
      this.trackTitleDisplay.textContent = labels[this.currentTrack] || "Romantic Melody";
    }

    if (this.playerWidget) this.playerWidget.classList.add("playing");
    if (this.visualizer) this.visualizer.classList.add("playing");

    // Try HTML5 Audio file first
    const soundFile = `music/${this.currentTrack}.mp3`;
    if (this.bgAudio) {
      this.bgAudio.src = soundFile;
      this.bgAudio.volume = this.volume;
      try {
        await this.bgAudio.play();
        return;
      } catch (err) {
        console.log("Audio file playback fallback to Web Audio synthesizer:", err);
      }
    }

    // Fallback: Real-time procedural music synthesis
    this.startProceduralSong(this.currentTrack);
  }

  pauseMusic() {
    this.isPlaying = false;
    if (this.bgAudio) this.bgAudio.pause();
    if (this.synthTimer) {
      clearTimeout(this.synthTimer);
      this.synthTimer = null;
    }
    if (this.playerWidget) this.playerWidget.classList.remove("playing");
    if (this.visualizer) this.visualizer.classList.remove("playing");
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playTrack(this.currentTrack);
    }
  }

  switchTrack(trackKey) {
    this.currentTrack = trackKey;
    if (this.isPlaying) {
      this.pauseMusic();
      this.playTrack(trackKey);
    } else {
      localStorage.setItem("Bangaram💖_selected_song", trackKey);
      const labels = { piano: "Enchanted Piano", waltz: "Fairy Tale Waltz", musicbox: "Music Box Dreams" };
      if (this.trackTitleDisplay) this.trackTitleDisplay.textContent = labels[trackKey];
    }
  }

  // --- Real-time Procedural Web Audio Synthesizers ---
  startProceduralSong(trackKey) {
    if (this.synthTimer) clearTimeout(this.synthTimer);

    const notesTable = {
      'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
      'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
      'C6': 1046.50, 'D6': 1174.66, 'E6': 1318.51
    };

    let melody = [];
    if (trackKey === "piano") {
      melody = [
        { n: 'C4', d: 0.45 }, { n: 'E4', d: 0.45 }, { n: 'G4', d: 0.45 }, { n: 'C5', d: 0.9 },
        { n: 'B4', d: 0.45 }, { n: 'A4', d: 0.9 }, { n: 'G4', d: 0.45 }, { n: 'E4', d: 0.45 },
        { n: 'F4', d: 0.9 }, { n: 'A4', d: 0.45 }, { n: 'G4', d: 1.3 }
      ];
    } else if (trackKey === "waltz") {
      melody = [
        { n: 'E5', d: 0.6 }, { n: 'G5', d: 0.3 }, { n: 'E5', d: 0.3 }, { n: 'C5', d: 0.6 },
        { n: 'D5', d: 0.3 }, { n: 'E5', d: 0.3 }, { n: 'F5', d: 0.6 }, { n: 'A5', d: 0.3 },
        { n: 'F5', d: 0.3 }, { n: 'D5', d: 1.1 }
      ];
    } else {
      melody = [
        { n: 'G5', d: 0.4 }, { n: 'G5', d: 0.4 }, { n: 'A5', d: 0.8 }, { n: 'G5', d: 0.8 },
        { n: 'C6', d: 0.8 }, { n: 'B5', d: 1.3 }, { n: 'G5', d: 0.4 }, { n: 'G5', d: 0.4 },
        { n: 'D6', d: 0.8 }, { n: 'C6', d: 1.4 }
      ];
    }

    let idx = 0;
    const playStep = () => {
      if (!this.isPlaying) return;
      const item = melody[idx];
      const freq = notesTable[item.n] || 440;
      this.synthTone(freq, item.d, trackKey);
      idx = (idx + 1) % melody.length;
      this.synthTimer = setTimeout(playStep, item.d * 920);
    };
    playStep();
  }

  synthTone(freq, dur, instrument) {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      if (instrument === "piano") {
        osc.type = "sine";
        gain.gain.setValueAtTime(0.25 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 1.6);
      } else if (instrument === "waltz") {
        osc.type = "triangle";
        gain.gain.setValueAtTime(0.18 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 1.8);
      } else {
        osc.type = "sine";
        gain.gain.setValueAtTime(0.3 * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 2.0);
      }

      osc.frequency.setValueAtTime(freq, now);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur * 2.0);
    } catch (e) { }
  }

  // --- 9 Realistic Procedural Sound Effects ---
  playDoorKnock() {
    this.ensureContext();
    if (!this.ctx) return;
    // 2 realistic wooden knocks
    [0, 0.16].forEach((offset) => {
      const t = this.ctx.currentTime + offset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.exponentialRampToValueAtTime(45, t + 0.12);
      gain.gain.setValueAtTime(0.55 * this.volume, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.12);
    });
  }

  playDoorCreak() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(145, now + 0.4);
    osc.frequency.linearRampToValueAtTime(95, now + 1.2);
    gain.gain.setValueAtTime(0.12 * this.volume, now);
    gain.gain.linearRampToValueAtTime(0.18 * this.volume, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, now);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 1.3);
  }

  playCrystalShimmer() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [1567.9, 1760.0, 2093.0, 2637.0, 3135.9].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + idx * 0.06;
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, t);
      gain.gain.setValueAtTime(0.15 * this.volume, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.6);
    });
  }

  playWindChimes() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.2, 659.2, 783.9, 1046.5, 1318.5].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + i * 0.08;
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, t);
      gain.gain.setValueAtTime(0.2 * this.volume, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.9);
    });
  }

  playButterflyFlutter() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + i * 0.07;
      osc.type = "sine";
      osc.frequency.setValueAtTime(320 + i * 40, t);
      gain.gain.setValueAtTime(0.1 * this.volume, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.12);
    }
  }

  playHeartChime() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [440, 554.3, 659.2, 880].forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.18 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    });
  }

  playGiftSparkle() {
    this.playCrystalShimmer();
  }

  playFireworkBoom() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 0.75);
    gain.gain.setValueAtTime(0.55 * this.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.95);
  }

  playCrowdCheer() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 1.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-1.2 * (i / this.ctx.sampleRate));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, now);
    filter.Q.setValueAtTime(1.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.35 * this.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 1.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start(now);
  }

  playSoftPianoStardust() {
    this.ensureContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [261.6, 329.6, 392.0, 523.2, 659.2, 783.9, 1046.5].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + idx * 0.12;
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, t);
      gain.gain.setValueAtTime(0.2 * this.volume, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 1.4);
    });
  }
}

const audio = new StorybookAudioEngine();

// ============================================================================
// 3. MULTI-DEPTH FAIRYTALE AMBIENT FX ENGINE (60 FPS GPU-Optimized)
// ============================================================================
class FairytaleFXEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isMobile = this.width < 768;

    this.petals = [];
    this.fireflies = [];
    this.lanterns = [];
    this.butterflies = [];
    this.stardust = [];

    this.initResize();
    this.populate();
    this.initInteractiveTracking();
    this.animate();
  }

  initResize() {
    const resize = () => {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      this.isMobile = this.width < 768;
    };
    window.addEventListener("resize", resize);
    resize();
  }

  initInteractiveTracking() {
    const addSparkles = (x, y) => {
      const count = this.isMobile ? 1 : 2;
      for (let i = 0; i < count; i++) {
        if (this.stardust.length > 55) this.stardust.shift();
        this.stardust.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.4,
          size: Math.random() * 3.5 + 2,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.025,
          color: Math.random() > 0.4 ? "#FFD700" : "#FFF8E7"
        });
      }
    };

    window.addEventListener("mousemove", (e) => addSparkles(e.clientX, e.clientY), { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) addSparkles(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
  }

  populate() {
    // 1. Tumbling Rose & Sakura Blossom Petals
    const petalCount = this.isMobile ? 14 : 24;
    for (let i = 0; i < petalCount; i++) {
      this.petals.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.8 + 0.4,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 1.5,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.5 ? "rgba(248, 187, 208, 0.75)" : "rgba(232, 168, 124, 0.8)"
      });
    }

    // 2. Bioluminescent Fireflies with Breathing Pulsing Cycles
    const fireflyCount = this.isMobile ? 16 : 28;
    for (let i = 0; i < fireflyCount; i++) {
      this.fireflies.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.2 + 1.2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? "255, 215, 0" : "248, 187, 208"
      });
    }

    // 3. Floating Tangled-Style Sky Lanterns with Glowing Candle Cores
    const lanternCount = this.isMobile ? 4 : 7;
    for (let i = 0; i < lanternCount; i++) {
      this.lanterns.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        w: Math.random() * 12 + 16,
        h: Math.random() * 16 + 22,
        speedY: Math.random() * 0.35 + 0.25,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.008,
        swayAmp: Math.random() * 0.6 + 0.3,
        flickerPhase: Math.random() * Math.PI * 2
      });
    }

    // 4. 3D Flapping Fairytale Butterflies with Shimmering Wings
    const butterflyCount = this.isMobile ? 3 : 5;
    const butterflyPalettes = [
      { wing: "#00E5FF", glow: "rgba(0, 229, 255, 0.6)", edge: "#7C4DFF" },
      { wing: "#FF80AB", glow: "rgba(255, 128, 171, 0.6)", edge: "#FF4081" },
      { wing: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", edge: "#E8A87C" },
      { wing: "#E040FB", glow: "rgba(224, 64, 251, 0.6)", edge: "#6A1B9A" },
      { wing: "#FFF8E7", glow: "rgba(255, 248, 231, 0.6)", edge: "#FFD700" }
    ];
    for (let i = 0; i < butterflyCount; i++) {
      this.butterflies.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 1.2 + 0.3,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 10,
        wingPhase: Math.random() * Math.PI * 2,
        flapSpeed: Math.random() * 0.08 + 0.18,
        theme: butterflyPalettes[i % butterflyPalettes.length],
        trailTimer: 0
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // --- Render Sky Lanterns (Background Layer) ---
    for (const l of this.lanterns) {
      l.swayPhase += l.swaySpeed;
      l.flickerPhase += 0.05;
      l.y -= l.speedY;
      l.x += Math.sin(l.swayPhase) * l.swayAmp;

      if (l.y < -60) {
        l.y = this.height + 40;
        l.x = Math.random() * this.width;
      }

      this.ctx.save();
      this.ctx.translate(l.x, l.y);

      // Outer Glow Halo
      const glow = this.ctx.createRadialGradient(0, 0, 2, 0, 0, l.w * 2);
      glow.addColorStop(0, "rgba(255, 200, 80, 0.35)");
      glow.addColorStop(1, "rgba(255, 179, 0, 0)");
      this.ctx.fillStyle = glow;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, l.w * 2, 0, Math.PI * 2);
      this.ctx.fill();

      // Lantern Body (Amber Gradient)
      const bodyGrad = this.ctx.createLinearGradient(-l.w / 2, -l.h / 2, l.w / 2, l.h / 2);
      bodyGrad.addColorStop(0, "rgba(255, 235, 150, 0.9)");
      bodyGrad.addColorStop(0.5, "rgba(255, 179, 0, 0.85)");
      bodyGrad.addColorStop(1, "rgba(230, 81, 0, 0.8)");
      this.ctx.fillStyle = bodyGrad;
      this.ctx.beginPath();
      if (this.ctx.roundRect) {
        this.ctx.roundRect(-l.w / 2, -l.h / 2, l.w, l.h, [4, 4, 8, 8]);
      } else {
        this.ctx.rect(-l.w / 2, -l.h / 2, l.w, l.h);
      }
      this.ctx.fill();

      // Inner Glowing Candle Flame
      const flicker = 0.85 + Math.sin(l.flickerPhase) * 0.15;
      const flameGrad = this.ctx.createRadialGradient(0, l.h * 0.15, 1, 0, l.h * 0.15, l.w * 0.45);
      flameGrad.addColorStop(0, `rgba(255, 255, 255, ${flicker})`);
      flameGrad.addColorStop(0.6, `rgba(255, 215, 0, ${0.7 * flicker})`);
      flameGrad.addColorStop(1, "rgba(255, 152, 0, 0)");
      this.ctx.fillStyle = flameGrad;
      this.ctx.beginPath();
      this.ctx.arc(0, l.h * 0.15, l.w * 0.45, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.restore();
    }

    // --- Render Petals ---
    for (const p of this.petals) {
      p.swayAngle += p.swaySpeed;
      p.x += p.speedX + Math.sin(p.swayAngle) * 0.8;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      if (p.y > this.height + 20) { p.y = -20; p.x = Math.random() * this.width; }
      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      const currentWidth = p.size * (0.4 + 0.6 * Math.abs(Math.sin(p.swayAngle)));
      this.ctx.ellipse(0, 0, currentWidth, p.size * 0.55, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // --- Render Fireflies ---
    for (const f of this.fireflies) {
      f.x += f.vx;
      f.y += f.vy;
      f.pulsePhase += f.pulseSpeed;
      const alpha = 0.25 + 0.65 * (0.5 + 0.5 * Math.sin(f.pulsePhase));

      if (f.x < 0) f.x = this.width;
      if (f.x > this.width) f.x = 0;
      if (f.y < 0) f.y = this.height;
      if (f.y > this.height) f.y = 0;

      const grad = this.ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius * 3.8);
      grad.addColorStop(0, `rgba(${f.color}, ${alpha})`);
      grad.addColorStop(1, `rgba(${f.color}, 0)`);
      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(f.x, f.y, f.radius * 3.8, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // --- Render 3D Flapping Fairytale Butterflies ---
    for (const b of this.butterflies) {
      b.x += b.vx;
      b.y += b.vy;
      b.wingPhase += b.flapSpeed;

      if (b.x < 30 || b.x > this.width - 30) b.vx *= -1;
      if (b.y < 30 || b.y > this.height - 30) b.vy *= -1;

      // Shed tiny stardust trail
      b.trailTimer++;
      if (b.trailTimer % 8 === 0 && this.stardust.length < 50) {
        this.stardust.push({
          x: b.x,
          y: b.y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: Math.random() * 0.3 + 0.2,
          size: Math.random() * 2 + 1.2,
          alpha: 0.8,
          decay: 0.02,
          color: b.theme.wing
        });
      }

      this.ctx.save();
      this.ctx.translate(b.x, b.y);
      const angle = Math.atan2(b.vy, b.vx);
      this.ctx.rotate(angle);

      // Flap scale factor (-1 to 1) for 3D flapping perspective
      const flapScale = Math.cos(b.wingPhase);

      // Glow Aura
      const halo = this.ctx.createRadialGradient(0, 0, 1, 0, 0, b.size * 1.8);
      halo.addColorStop(0, b.theme.glow);
      halo.addColorStop(1, "rgba(0, 0, 0, 0)");
      this.ctx.fillStyle = halo;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, b.size * 1.8, 0, Math.PI * 2);
      this.ctx.fill();

      // Left & Right Wings
      this.ctx.save();
      this.ctx.scale(1, flapScale);

      this.ctx.fillStyle = b.theme.wing;
      this.ctx.beginPath();
      this.ctx.ellipse(b.size * 0.2, -b.size * 0.7, b.size * 0.6, b.size * 0.4, 0.4, 0, Math.PI * 2);
      this.ctx.ellipse(b.size * 0.2, b.size * 0.7, b.size * 0.6, b.size * 0.4, -0.4, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.strokeStyle = b.theme.edge;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      this.ctx.restore();

      // Body
      this.ctx.fillStyle = "#FFF8E7";
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, b.size * 0.6, b.size * 0.15, 0, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.restore();
    }

    // --- Render Interactive Golden Stardust Trails ---
    for (let i = this.stardust.length - 1; i >= 0; i--) {
      const s = this.stardust[i];
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= s.decay;
      if (s.alpha <= 0) {
        this.stardust.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(s.alpha, 0);
      this.ctx.fillStyle = s.color;

      this.ctx.translate(s.x, s.y);
      this.ctx.beginPath();
      this.ctx.moveTo(0, -s.size);
      this.ctx.quadraticCurveTo(0, 0, s.size, 0);
      this.ctx.quadraticCurveTo(0, 0, 0, s.size);
      this.ctx.quadraticCurveTo(0, 0, -s.size, 0);
      this.ctx.quadraticCurveTo(0, 0, 0, -s.size);
      this.ctx.fill();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Alias for backwards compatibility
const AmbientCanvasEngine = FairytaleFXEngine;

// ============================================================================
// 4. MEMORY HEART RISING PARTICLES CANVAS
// ============================================================================
class MemoryHeartCanvasEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.hearts = [];
    this.confetti = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.initResize();
    this.populate();
    this.animate();
  }

  initResize() {
    const resize = () => {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();
  }

  populate() {
    for (let i = 0; i < 22; i++) {
      this.hearts.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 12 + 6,
        speedY: -(Math.random() * 0.9 + 0.4),
        speedX: (Math.random() - 0.5) * 0.7,
        alpha: Math.random() * 0.6 + 0.25,
        color: Math.random() > 0.5 ? "rgba(255, 215, 0," : "rgba(248, 187, 208,"
      });
    }
  }

  triggerCelebrationBurst(originX, originY) {
    const colors = ["#FFD700", "#F8BBD0", "#E8A87C", "#FFF8E7", "#FF4081", "#E040FB"];
    const ox = originX || this.width / 2;
    const oy = originY || this.height * 0.48;
    for (let i = 0; i < 70; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      this.confetti.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 14,
        alpha: 1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const h of this.hearts) {
      h.y += h.speedY;
      h.x += h.speedX;
      if (h.y < -25) { h.y = this.height + 25; h.x = Math.random() * this.width; }
      this.ctx.save();
      this.ctx.translate(h.x, h.y);
      this.ctx.fillStyle = `${h.color} ${h.alpha})`;
      this.ctx.shadowColor = `${h.color} 0.8)`;
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      const d = h.size;
      this.ctx.moveTo(0, -d * 0.3);
      this.ctx.bezierCurveTo(-d * 0.5, -d * 0.8, -d, -d * 0.2, 0, d * 0.8);
      this.ctx.bezierCurveTo(d, -d * 0.2, d * 0.5, -d * 0.8, 0, -d * 0.3);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    }
    for (let i = this.confetti.length - 1; i >= 0; i--) {
      const c = this.confetti[i];
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.16;
      c.rotation += c.rotSpeed;
      c.alpha -= 0.012;
      if (c.alpha <= 0) { this.confetti.splice(i, 1); continue; }
      this.ctx.save();
      this.ctx.translate(c.x, c.y);
      this.ctx.rotate((c.rotation * Math.PI) / 180);
      this.ctx.fillStyle = c.color;
      this.ctx.globalAlpha = c.alpha;
      this.ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
      this.ctx.restore();
    }
    requestAnimationFrame(() => this.animate());
  }
}

// ============================================================================
// 5. FIREWORKS ENGINE FOR FINALE (60 FPS Heart Fireworks)
// ============================================================================
class FireworksEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.fireworks = [];
    this.particles = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isActive = false;

    const resize = () => {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();
  }

  start() {
    this.isActive = true;
    this.interval = setInterval(() => {
      if (this.isActive) this.launchFirework();
    }, 950);
    this.animate();
  }

  launchFirework() {
    const startX = Math.random() * (this.width * 0.7) + this.width * 0.15;
    const targetX = startX + (Math.random() - 0.5) * 160;
    const targetY = Math.random() * (this.height * 0.45) + this.height * 0.1;
    this.createHeartExplosion(targetX, targetY);
    audio.playFireworkBoom();
  }

  createHeartExplosion(x, y) {
    const palette = ["#FFD700", "#F8BBD0", "#E8A87C", "#FFF8E7", "#FF4081", "#E040FB"];
    const color = palette[Math.floor(Math.random() * palette.length)];
    const count = 55;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 2;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      const speed = 0.22 + Math.random() * 0.06;
      this.particles.push({
        x, y,
        vx: hx * speed,
        vy: hy * speed,
        color,
        alpha: 1,
        decay: 0.014
      });
    }
  }

  animate() {
    this.ctx.fillStyle = "rgba(5, 8, 20, 0.22)";
    this.ctx.fillRect(0, 0, this.width, this.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.vx *= 0.98;
      p.alpha -= p.decay;
      if (p.alpha <= 0) { this.particles.splice(i, 1); continue; }
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(p.alpha, 0);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }
    if (this.isActive || this.particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    }
  }
}

// ============================================================================
// 6. 9-DOOR PORTAL & CHAPTER CONTROLLER (GPU Accelerated 60 FPS)
// ============================================================================
class StorybookChapterManager {
  constructor() {
    this.currentChapter = 1;
    this.totalChapters = 9;
    this.isDoorAnimating = false;

    // DOM Elements
    this.portalOverlay = document.getElementById("door-portal-overlay");
    this.doorStage = document.getElementById("portal-door-stage");
    this.doorLeafLeft = document.getElementById("door-leaf-left");
    this.doorLeafRight = document.getElementById("door-leaf-right");
    this.knockerLeft = document.getElementById("knocker-ring-left");
    this.knockerRight = document.getElementById("knocker-ring-right");
    this.seamLight = document.getElementById("door-seam-light");
    this.portalAura = document.getElementById("portal-light-aura");
    this.portalGodRays = document.getElementById("portal-god-rays");
    this.portalBurst = document.getElementById("portal-particles-burst");
    this.plaqueChapter = document.getElementById("door-plaque-chapter");
    this.plaqueName = document.getElementById("door-plaque-name");
    this.btnOpenDoor = document.getElementById("btn-open-portal-action");
    this.doorPromptText = document.getElementById("door-prompt-text");
    this.emblemLeft = document.getElementById("door-emblem-left");
    this.emblemRight = document.getElementById("door-emblem-right");

    // Dock Navigation Elements
    this.dockChapterBadge = document.getElementById("dock-chapter-badge");
    this.dockChapterTitle = document.getElementById("dock-chapter-title");
    this.btnPrevChapter = document.getElementById("btn-prev-chapter");
    this.btnNextChapter = document.getElementById("btn-next-chapter");

    this.initEvents();
    this.initTouchSwipe();
    this.initKeyboardNav();
  }

  initEvents() {
    // 1. Open door via the action button
    if (this.btnOpenDoor) {
      this.btnOpenDoor.addEventListener("click", (e) => {
        e.stopPropagation();
        this.triggerDoorOpenAnimation();
      });
    }

    // 2. Open door by clicking directly on the door frame, leaves, knocker, or stage
    const doorInteractiveTargets = [
      this.doorStage,
      this.doorLeafLeft,
      this.doorLeafRight,
      this.knockerLeft,
      this.knockerRight,
      document.getElementById("door-frame-wrapper"),
      document.getElementById("double-doors-3d")
    ];
    doorInteractiveTargets.forEach((el) => {
      if (el) {
        el.style.cursor = "pointer";
        el.addEventListener("click", (e) => {
          if (e.target.closest("#btn-open-portal-action")) return;
          this.triggerDoorOpenAnimation();
        });
      }
    });

    if (this.btnPrevChapter) {
      this.btnPrevChapter.addEventListener("click", () => this.goToPreviousChapter());
    }

    if (this.btnNextChapter) {
      this.btnNextChapter.addEventListener("click", () => this.goToNextChapter());
    }

    // In-chapter advance buttons
    document.querySelectorAll(".btn-advance-chapter").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const nextTarget = parseInt(btn.dataset.next, 10);
        if (nextTarget) this.presentDoorForChapter(nextTarget);
      });
    });
  }

  initTouchSwipe() {
    let startX = 0;
    let startY = 0;
    window.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;
      if (Math.abs(diffX) > 60 && Math.abs(diffY) < 50) {
        if (diffX < 0) this.goToNextChapter();
        else this.goToPreviousChapter();
      }
    }, { passive: true });
  }

  initKeyboardNav() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        this.goToNextChapter();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        this.goToPreviousChapter();
      }
    });
  }

  spawnDoorBurstFX() {
    if (!this.portalBurst) return;
    this.portalBurst.innerHTML = "";
    const colors = ["#FFD700", "#FFF8E7", "#E8A87C", "#00E5FF", "#FF80AB"];
    for (let i = 0; i < 28; i++) {
      const p = document.createElement("div");
      p.className = "portal-sparkle-dot";
      const size = Math.random() * 6 + 3;
      p.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        top: 50%;
        left: 50%;
        box-shadow: 0 0 10px ${colors[Math.floor(Math.random() * colors.length)]};
        pointer-events: none;
      `;
      this.portalBurst.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 220 + 60;
      gsap.to(p, {
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        opacity: 0,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 0.8 + 0.6,
        ease: "power2.out",
        onComplete: () => p.remove()
      });
    }
  }

  presentDoorForChapter(chapterNum) {
    if (this.isDoorAnimating) return;
    this.currentChapter = Math.max(1, Math.min(this.totalChapters, chapterNum));
    const chMeta = CONFIG.chapters[this.currentChapter - 1];

    // Reset Door Transform States (GPU Accelerated 60 FPS)
    gsap.set(this.doorStage, { scale: 1, z: 0, opacity: 1 });
    gsap.set(this.doorLeafLeft, { rotationY: 0 });
    gsap.set(this.doorLeafRight, { rotationY: 0 });
    gsap.set(this.seamLight, { opacity: 0 });
    gsap.set(this.portalAura, { opacity: 0, scale: 1 });
    if (this.portalGodRays) gsap.set(this.portalGodRays, { opacity: 0, scale: 1 });
    gsap.set([this.knockerLeft, this.knockerRight], { rotation: 0 });

    // Apply Door Theme Class
    this.portalOverlay.className = `door-portal-overlay active ${chMeta.theme}`;
    if (this.plaqueChapter) this.plaqueChapter.textContent = `CHAPTER ${chMeta.num}`;
    if (this.plaqueName) this.plaqueName.textContent = chMeta.title;
    if (this.doorPromptText) this.doorPromptText.textContent = chMeta.prompt;
    if (this.emblemLeft) this.emblemLeft.textContent = chMeta.emblem;
    if (this.emblemRight) this.emblemRight.textContent = chMeta.emblem;

    // Update Dock
    this.updateDockUI();
  }

  triggerDoorOpenAnimation() {
    if (this.isDoorAnimating) return;
    this.isDoorAnimating = true;

    // 1. Realistic brass knocker swing and double-bounce recoil (0.0s - 0.45s)
    gsap.timeline()
      .to([this.knockerLeft, this.knockerRight], {
        rotation: -34,
        duration: 0.25,
        ease: "power2.out"
      })
      .to([this.knockerLeft, this.knockerRight], {
        rotation: 0,
        duration: 0.36,
        ease: "bounce.out",
        onStart: () => {
          audio.playDoorKnock();
          // Micro stage shake on heavy knocker impact
          gsap.to(this.doorStage, { y: 2.5, yoyo: true, repeat: 1, duration: 0.08 });
        }
      });

    // 2. Heavy Door Creak & Volumetric God Rays Light Leak (0.4s - 1.1s)
    setTimeout(() => {
      audio.playDoorCreak();
      // Play theme specific chime
      const themeSoundMap = {
        2: () => audio.playCrystalShimmer(),
        3: () => audio.playButterflyFlutter(),
        4: () => audio.playWindChimes(),
        5: () => audio.playHeartChime(),
        6: () => audio.playGiftSparkle(),
        7: () => audio.playHeartChime(),
        8: () => audio.playGiftSparkle(),
        9: () => audio.playFireworkBoom()
      };
      if (themeSoundMap[this.currentChapter]) {
        setTimeout(themeSoundMap[this.currentChapter], 220);
      }

      // Volumetric light leak
      gsap.to(this.seamLight, { opacity: 1, duration: 0.45 });
      if (this.portalGodRays) {
        gsap.to(this.portalGodRays, { opacity: 0.9, scale: 1.15, duration: 1.25 });
      }
      gsap.to(this.portalAura, { opacity: 0.95, scale: 1.25, duration: 1.2 });
      this.spawnDoorBurstFX();
    }, 420);

    // 3. Double Doors swing open with Asymmetric 3D Hinge Physics (revealing 3D bevel thickness)
    gsap.to(this.doorLeafLeft, {
      rotationY: -116,
      duration: 1.6,
      delay: 0.72,
      ease: "power2.inOut"
    });

    gsap.to(this.doorLeafRight, {
      rotationY: 114,
      duration: 1.55,
      delay: 0.78,
      ease: "power2.inOut"
    });

    // 4. Cinematic camera zoom inside through the portal (1.3s - 2.6s)
    gsap.to(this.doorStage, {
      scale: 3.2,
      z: 420,
      opacity: 0,
      duration: 1.35,
      delay: 1.3,
      ease: "power2.in",
      onComplete: () => {
        this.portalOverlay.classList.remove("active");
        if (this.portalGodRays) gsap.set(this.portalGodRays, { opacity: 0, scale: 1 });
        this.activateChapterScene(this.currentChapter);
        this.isDoorAnimating = false;
      }
    });

    // Safety fallback: ensure chapter activates even if GSAP delay/onComplete is interrupted
    setTimeout(() => {
      if (this.isDoorAnimating) {
        this.portalOverlay.classList.remove("active");
        if (this.portalGodRays) gsap.set(this.portalGodRays, { opacity: 0, scale: 1 });
        this.activateChapterScene(this.currentChapter);
        this.isDoorAnimating = false;
      }
    }, 3200);
  }

  activateChapterScene(chapterNum) {
    document.querySelectorAll(".chapter-scene").forEach((sec) => {
      sec.classList.remove("active");
    });
    const targetScene = document.getElementById(`chapter-${chapterNum}`);
    if (targetScene) {
      targetScene.classList.add("active");
      targetScene.scrollIntoView({ behavior: "smooth" });

      // Ultra-smooth entrance animation for the chapter's main card
      const mainCard = targetScene.querySelector(".glass-card, .luxury-ornate-card");
      if (mainCard) {
        gsap.fromTo(mainCard,
          { y: 35, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power2.out" }
        );
      }
    }

    this.updateDockUI();

    // Trigger chapter-specific entrance events
    if (chapterNum === 7 && window.memoryHeartInstance) {
      setTimeout(() => window.memoryHeartInstance.assemble(), 600);
    }
  }

  updateDockUI() {
    const chMeta = CONFIG.chapters[this.currentChapter - 1];
    if (this.dockChapterBadge) this.dockChapterBadge.textContent = chMeta.badge;
    if (this.dockChapterTitle) this.dockChapterTitle.textContent = chMeta.title;
  }

  goToNextChapter() {
    if (this.currentChapter < this.totalChapters) {
      this.presentDoorForChapter(this.currentChapter + 1);
    }
  }

  goToPreviousChapter() {
    if (this.currentChapter > 1) {
      this.presentDoorForChapter(this.currentChapter - 1);
    }
  }
}

// ============================================================================
// 7. MEMORY HEART COLLAGE (Chapter 7 Climax)
// ============================================================================
class MemoryHeartManager {
  constructor(canvasManager) {
    this.canvasManager = canvasManager;
    this.stage = document.getElementById("memory-heart-stage");
    this.container = document.getElementById("heart-thumbnails-container");
    this.messageWrapper = document.getElementById("memory-heart-message-wrapper");
    this.btnAssemble = document.getElementById("btn-assemble-heart");
    this.btnScatter = document.getElementById("btn-scatter-heart");
    this.nodes = [];
    this.isAssembled = false;

    if (this.container) {
      this.initNodes();
      this.initEvents();
    }
  }

  initNodes() {
    this.container.innerHTML = "";
    this.nodes = [];
    const cx = 330;
    const cy = 265;
    const points = [];

    const addRing = (count, scale) => {
      for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 2;
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        points.push({ targetX: cx + hx * scale - 27, targetY: cy + hy * scale - 27 });
      }
    };

    addRing(28, 17.5);
    addRing(16, 11.5);
    addRing(8, 6.2);
    points.push({ targetX: cx - 27, targetY: cy + 15 - 27 });

    const galleryPhotos = CONFIG.gallery;
    points.forEach((pt, idx) => {
      const photoItem = galleryPhotos[idx % galleryPhotos.length];
      const node = document.createElement("div");
      node.className = "heart-photo-node";
      node.style.left = `${pt.targetX}px`;
      node.style.top = `${pt.targetY}px`;
      node.innerHTML = `<img src="${photoItem.img}" alt="${photoItem.title}" loading="lazy" onerror="this.src='https://picsum.photos/seed/fairytale${photoItem.id}/600/750'">`;

      const scatterX = (Math.random() - 0.5) * 850;
      const scatterY = (Math.random() - 0.5) * 650;
      const scatterRot = (Math.random() - 0.5) * 140;
      const scatterScale = Math.random() * 0.3 + 0.35;

      node.dataset.scatterX = scatterX;
      node.dataset.scatterY = scatterY;
      node.dataset.scatterRot = scatterRot;
      node.dataset.scatterScale = scatterScale;

      gsap.set(node, { x: scatterX, y: scatterY, rotation: scatterRot, scale: scatterScale, opacity: 0.25 });

      node.addEventListener("click", () => {
        audio.playHeartChime();
        openLightbox(photoItem);
      });

      this.container.appendChild(node);
      this.nodes.push(node);
    });
  }

  initEvents() {
    if (this.btnAssemble) this.btnAssemble.addEventListener("click", () => this.assemble());
    if (this.btnScatter) this.btnScatter.addEventListener("click", () => this.scatter());
  }

  assemble() {
    if (this.isAssembled) return;
    this.isAssembled = true;
    audio.playHeartChime();

    gsap.killTweensOf(this.nodes);
    gsap.to(this.nodes, {
      x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.5,
      stagger: { each: 0.035, from: "random" },
      ease: "back.out(1.2)",
      onComplete: () => {
        if (this.stage) { this.stage.classList.add("assembled"); this.stage.classList.add("pulsing"); }
        if (this.messageWrapper) this.messageWrapper.classList.add("visible");
        if (this.canvasManager) this.canvasManager.triggerCelebrationBurst();
      }
    });
  }

  scatter() {
    this.isAssembled = false;
    audio.playWindChimes();
    if (this.stage) { this.stage.classList.remove("assembled"); this.stage.classList.remove("pulsing"); }
    if (this.messageWrapper) this.messageWrapper.classList.remove("visible");

    gsap.killTweensOf(this.nodes);
    this.nodes.forEach((node) => {
      const sx = parseFloat(node.dataset.scatterX) || (Math.random() - 0.5) * 800;
      const sy = parseFloat(node.dataset.scatterY) || (Math.random() - 0.5) * 600;
      const srot = parseFloat(node.dataset.scatterRot) || 30;
      const sscale = parseFloat(node.dataset.scatterScale) || 0.4;
      gsap.to(node, { x: sx, y: sy, rotation: srot, scale: sscale, opacity: 0.25, duration: 1.1, ease: "power2.inOut" });
    });
  }
}

// ============================================================================
// 8. DATA BUILDERS & DOM READY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Canvases
  new AmbientCanvasEngine("ambient-canvas");
  const heartCanvas = new MemoryHeartCanvasEngine("memory-heart-canvas");
  const fireworks = new FireworksEngine("fireworks-canvas");

  // Storybook Chapter Manager
  window.chapterManager = new StorybookChapterManager();
  window.memoryHeartInstance = new MemoryHeartManager(heartCanvas);

  // Populate dynamic UI
  populateConfigTexts();
  renderPolaroidGallery();
  renderTimelineMilestones();
  renderLanternMemories();
  renderLoveNotes();
  renderConstellationCollage();
  initEasterEgg();

  // --------------------------------------------------------------------------
  // Loading Screen: "Open Chapter 1"
  // --------------------------------------------------------------------------
  const btnBegin = document.getElementById("btn-begin-journey");
  const loaderScene = document.getElementById("scene-loader");

  const startJourney = () => {
    if (loaderScene && loaderScene.classList.contains("inactive")) return;
    audio.playDoorKnock();
    audio.playTrack(audio.currentTrack);

    if (loaderScene) {
      gsap.to(loaderScene, {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          loaderScene.classList.add("inactive");
          document.body.classList.remove("is-locked");
          // Present Chapter 1 Door immediately!
          if (window.chapterManager) {
            window.chapterManager.presentDoorForChapter(1);
          }
        }
      });
    }
  };

  if (btnBegin) {
    btnBegin.addEventListener("click", (e) => {
      e.stopPropagation();
      startJourney();
    });
  }

  const loaderContent = document.querySelector(".loader-content");
  if (loaderContent) {
    loaderContent.style.cursor = "pointer";
    loaderContent.addEventListener("click", startJourney);
  }

  // --------------------------------------------------------------------------
  // Chapter 6: Royal Gift Box
  // --------------------------------------------------------------------------
  const giftBox = document.getElementById("gift-box-3d");
  const btnOpenGift = document.getElementById("btn-open-gift-action");
  const giftStage = document.querySelector(".gift-box-stage");

  const openGift = () => {
    if (!giftBox || giftStage.classList.contains("opened")) return;
    audio.playGiftSparkle();
    giftBox.classList.add("opened");
    triggerGiftBoxConfetti();
    setTimeout(() => giftStage.classList.add("opened"), 700);
  };
  if (giftBox) giftBox.addEventListener("click", openGift);
  if (btnOpenGift) btnOpenGift.addEventListener("click", openGift);

  // --------------------------------------------------------------------------
  // Chapter 8: Birthday Cake Candle Blow
  // --------------------------------------------------------------------------
  const btnBlowCandles = document.getElementById("btn-blow-candles");
  const candles = document.querySelectorAll(".candle");
  const wishStatus = document.getElementById("wish-status-text");

  const extinguishCandles = () => {
    audio.playWindChimes();
    candles.forEach(c => c.classList.add("extinguished"));
    if (wishStatus) {
      wishStatus.textContent = "✨ Wish Granted, Bangaram💖! May all your sweetest dreams come true! ✨";
      wishStatus.style.color = "var(--gold)";
    }
    setTimeout(() => {
      audio.playCrowdCheer();
    }, 600);
  };

  if (btnBlowCandles) btnBlowCandles.addEventListener("click", extinguishCandles);
  candles.forEach(c => c.addEventListener("click", extinguishCandles));

  // --------------------------------------------------------------------------
  // Chapter 9: Finale Fireworks
  // --------------------------------------------------------------------------
  const btnMoreFireworks = document.getElementById("btn-more-fireworks");
  const btnReplay = document.getElementById("btn-replay-journey");

  if (btnMoreFireworks) {
    btnMoreFireworks.addEventListener("click", () => {
      audio.playCrystalShimmer();
      for (let i = 0; i < 5; i++) {
        setTimeout(() => fireworks.launchFirework(), i * 300);
      }
    });
  }

  if (btnReplay) {
    btnReplay.addEventListener("click", () => {
      window.chapterManager.presentDoorForChapter(1);
    });
  }

  // Start fireworks engine when Chapter 9 is active
  const ch9Observer = new MutationObserver(() => {
    const ch9 = document.getElementById("chapter-9");
    if (ch9 && ch9.classList.contains("active") && !fireworks.isActive) {
      fireworks.start();
    }
  });
  ch9Observer.observe(document.getElementById("fairytale-chapters-stage"), { subtree: true, attributes: true, attributeFilter: ["class"] });
});

// ============================================================================
// 9. DATA RENDERERS
// ============================================================================
function populateConfigTexts() {
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el && val) el.textContent = val;
  };

  setTxt("crest-initials", CONFIG.initials);
  setTxt("loader-title", CONFIG.loader.title);
  setTxt("welcome-greeting", CONFIG.welcome.greeting);
  setTxt("welcome-quote", CONFIG.welcome.quote);
  setTxt("welcome-message-p1", CONFIG.welcome.messageP1);
  setTxt("welcome-message-p2", CONFIG.welcome.messageP2);
  setTxt("welcome-signature", CONFIG.welcome.signature);
  setTxt("gift-letter-title", CONFIG.gift.title);
  setTxt("gift-letter-date", CONFIG.gift.date);
  setTxt("gift-letter-message", CONFIG.gift.message);
  setTxt("finale-quote", CONFIG.finale.quote);
  setTxt("finale-wish", CONFIG.finale.wish);
  setTxt("finale-subtext", CONFIG.finale.subtext);
}

function renderPolaroidGallery() {
  const grid = document.getElementById("polaroid-grid");
  if (!grid) return;
  grid.innerHTML = "";
  CONFIG.gallery.forEach((item, idx) => {
    const rot = ((idx % 5) - 2) * 1.5;
    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.style.transform = `rotate(${rot}deg)`;
    card.innerHTML = `
      <div class="polaroid-clip"></div>
      <div class="polaroid-image-frame">
        <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.src='https://picsum.photos/seed/fairytale${item.id}/600/750'">
      </div>
      <div class="polaroid-caption">
        <h3 class="polaroid-title">${item.title}</h3>
        <p class="polaroid-subtitle">${item.subtitle}</p>
      </div>
    `;
    card.addEventListener("click", () => openLightbox(item));
    grid.appendChild(card);
  });
}

function renderTimelineMilestones() {
  const list = document.getElementById("timeline-items-list");
  if (!list) return;
  list.innerHTML = "";
  CONFIG.timeline.forEach((item, idx) => {
    const isLeft = idx % 2 === 0;
    const div = document.createElement("div");
    div.className = `timeline-item ${isLeft ? "item-left" : "item-right"}`;
    div.innerHTML = `
      <div class="timeline-node"></div>
      <div class="glass-card timeline-card">
        <span class="timeline-date-badge font-cinzel">${item.date}</span>
        <h3 class="timeline-title font-playfair">${item.title}</h3>
        <p class="timeline-description font-montserrat">${item.desc}</p>
      </div>
    `;
    list.appendChild(div);
  });
}

function renderLanternMemories() {
  const grid = document.getElementById("lantern-memories-grid");
  if (!grid) return;
  grid.innerHTML = "";
  CONFIG.lanternMemories.forEach((item) => {
    const card = document.createElement("div");
    card.className = "lantern-card";
    card.innerHTML = `
      <div class="lantern-card-icon">${item.icon}</div>
      <h3 class="lantern-card-title font-playfair">${item.title}</h3>
      <p class="lantern-card-text font-montserrat">${item.text}</p>
    `;
    grid.appendChild(card);
  });
}

function renderLoveNotes() {
  const container = document.getElementById("love-notes-container");
  if (!container) return;
  container.innerHTML = "";
  CONFIG.loveNotes.forEach((note) => {
    const wrapper = document.createElement("div");
    wrapper.className = "hanging-note-wrapper";
    wrapper.innerHTML = `
      <div class="note-ribbon"></div>
      <div class="wax-seal">⚜️</div>
      <div class="glass-card hanging-note" tabindex="0">
        <span class="gold-corner tl"></span>
        <span class="gold-corner tr"></span>
        <span class="gold-corner bl"></span>
        <span class="gold-corner br"></span>
        <p class="note-number font-cinzel">NOTE #${note.id}</p>
        <h3 class="note-title font-playfair">${note.title}</h3>
        <div class="note-teaser font-montserrat">
          <span>💌</span><span>${note.teaser}</span>
        </div>
        <div class="note-secret-message">
          "${note.secret}"
        </div>
      </div>
    `;
    const noteCard = wrapper.querySelector(".hanging-note");
    noteCard.addEventListener("click", () => {
      audio.playHeartChime();
      noteCard.classList.toggle("revealed");
    });
    container.appendChild(wrapper);
  });
}

function renderConstellationCollage() {
  const container = document.getElementById("heart-photo-constellation");
  if (!container) return;
  container.innerHTML = "";
  const count = Math.min(CONFIG.gallery.length, 12);
  const cx = 160;
  const cy = 140;
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    const px = cx + hx * 7 - 29;
    const py = cy + hy * 7 - 29;
    const div = document.createElement("div");
    div.className = "constellation-photo";
    div.style.left = `${px}px`;
    div.style.top = `${py}px`;
    div.innerHTML = `<img src="${CONFIG.gallery[i].img}" alt="Memory" loading="lazy">`;
    container.appendChild(div);
  }
}

function initEasterEgg() {
  const star = document.getElementById("easter-egg-star");
  const backdrop = document.getElementById("easter-egg-backdrop");
  const btnClose = document.getElementById("btn-close-easter-egg");

  if (star && backdrop) {
    star.addEventListener("click", () => {
      audio.playSoftPianoStardust();
      backdrop.classList.add("active");
    });
  }

  if (btnClose && backdrop) {
    btnClose.addEventListener("click", () => {
      audio.playCrystalShimmer();
      backdrop.classList.remove("active");
    });
  }
}

function openLightbox(item) {
  const modal = document.getElementById("gallery-lightbox");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const desc = document.getElementById("lightbox-desc");
  const closeBtn = document.getElementById("lightbox-close");
  const backdrop = document.getElementById("lightbox-backdrop");

  if (!modal) return;
  audio.playCrystalShimmer();
  img.src = item.img;
  title.textContent = item.title;
  desc.textContent = item.desc || "";
  modal.classList.add("active");

  const closeModal = () => modal.classList.remove("active");
  closeBtn.onclick = closeModal;
  backdrop.onclick = closeModal;
  window.onkeydown = (e) => { if (e.key === "Escape") closeModal(); };
}

function triggerGiftBoxConfetti() {
  const canvas = document.getElementById("gift-confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.parentElement.clientWidth + 200;
  canvas.height = canvas.parentElement.clientHeight + 200;

  const confetti = [];
  const colors = ["#FFD700", "#F8BBD0", "#E8A87C", "#FFF8E7", "#6A1B9A", "#FF4081"];
  for (let i = 0; i < 90; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 3;
    confetti.push({
      x: canvas.width / 2, y: canvas.height / 2,
      vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 15,
      alpha: 1
    });
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    for (const c of confetti) {
      c.x += c.vx; c.y += c.vy; c.vy += 0.18; c.rotation += c.rotSpeed; c.alpha -= 0.012;
      if (c.alpha > 0) {
        active = true;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.alpha;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
        ctx.restore();
      }
    }
    if (active) requestAnimationFrame(animate);
  };
  animate();
}
