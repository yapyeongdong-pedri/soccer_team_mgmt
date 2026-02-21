const formations = {
  '4-4-2': [
    { id: 'gk1', role: 'GK', x: 50, y: 90 },
    { id: 'df1', role: 'DF', x: 18, y: 72 },
    { id: 'df2', role: 'DF', x: 38, y: 72 },
    { id: 'df3', role: 'DF', x: 62, y: 72 },
    { id: 'df4', role: 'DF', x: 82, y: 72 },
    { id: 'mf1', role: 'MF', x: 16, y: 50 },
    { id: 'mf2', role: 'MF', x: 38, y: 52 },
    { id: 'mf3', role: 'MF', x: 62, y: 52 },
    { id: 'mf4', role: 'MF', x: 84, y: 50 },
    { id: 'fw1', role: 'FW', x: 38, y: 24 },
    { id: 'fw2', role: 'FW', x: 62, y: 24 }
  ],
  '4-3-3': [
    { id: 'gk1', role: 'GK', x: 50, y: 90 },
    { id: 'df1', role: 'DF', x: 18, y: 72 },
    { id: 'df2', role: 'DF', x: 38, y: 72 },
    { id: 'df3', role: 'DF', x: 62, y: 72 },
    { id: 'df4', role: 'DF', x: 82, y: 72 },
    { id: 'mf1', role: 'MF', x: 28, y: 52 },
    { id: 'mf2', role: 'MF', x: 50, y: 50 },
    { id: 'mf3', role: 'MF', x: 72, y: 52 },
    { id: 'fw1', role: 'FW', x: 20, y: 24 },
    { id: 'fw2', role: 'FW', x: 50, y: 18 },
    { id: 'fw3', role: 'FW', x: 80, y: 24 }
  ],
  '3-5-2': [
    { id: 'gk1', role: 'GK', x: 50, y: 90 },
    { id: 'df1', role: 'DF', x: 26, y: 72 },
    { id: 'df2', role: 'DF', x: 50, y: 70 },
    { id: 'df3', role: 'DF', x: 74, y: 72 },
    { id: 'mf1', role: 'MF', x: 14, y: 48 },
    { id: 'mf2', role: 'MF', x: 32, y: 52 },
    { id: 'mf3', role: 'MF', x: 50, y: 50 },
    { id: 'mf4', role: 'MF', x: 68, y: 52 },
    { id: 'mf5', role: 'MF', x: 86, y: 48 },
    { id: 'fw1', role: 'FW', x: 38, y: 24 },
    { id: 'fw2', role: 'FW', x: 62, y: 24 }
  ],
  '3-4-3': [
    { id: 'gk1', role: 'GK', x: 50, y: 90 },
    { id: 'df1', role: 'DF', x: 26, y: 72 },
    { id: 'df2', role: 'DF', x: 50, y: 70 },
    { id: 'df3', role: 'DF', x: 74, y: 72 },
    { id: 'mf1', role: 'MF', x: 18, y: 50 },
    { id: 'mf2', role: 'MF', x: 40, y: 52 },
    { id: 'mf3', role: 'MF', x: 60, y: 52 },
    { id: 'mf4', role: 'MF', x: 82, y: 50 },
    { id: 'fw1', role: 'FW', x: 20, y: 24 },
    { id: 'fw2', role: 'FW', x: 50, y: 18 },
    { id: 'fw3', role: 'FW', x: 80, y: 24 }
  ],
  '4-2-3-1': [
    { id: 'gk1', role: 'GK', x: 50, y: 90 },
    { id: 'df1', role: 'DF', x: 18, y: 72 },
    { id: 'df2', role: 'DF', x: 38, y: 72 },
    { id: 'df3', role: 'DF', x: 62, y: 72 },
    { id: 'df4', role: 'DF', x: 82, y: 72 },
    { id: 'mf1', role: 'MF', x: 40, y: 58 },
    { id: 'mf2', role: 'MF', x: 60, y: 58 },
    { id: 'mf3', role: 'MF', x: 20, y: 40 },
    { id: 'mf4', role: 'MF', x: 50, y: 36 },
    { id: 'mf5', role: 'MF', x: 80, y: 40 },
    { id: 'fw1', role: 'FW', x: 50, y: 20 }
  ]
};

const roleClass = { FW: 'fw', MF: 'mf', DF: 'df', GK: 'gk' };

const state = {
  players: [],
  quarters: [],
  activeQuarterId: null,
  selectedSlotId: null,
  copySourceId: null
};

const el = {
  imageInput: document.getElementById('imageInput'),
  ocrApiKey: document.getElementById('ocrApiKey'),
  ocrBtn: document.getElementById('ocrBtn'),
  ocrStatus: document.getElementById('ocrStatus'),
  mercName: document.getElementById('mercName'),
  addMerc: document.getElementById('addMerc'),
  playerList: document.getElementById('playerList'),
  addQuarter: document.getElementById('addQuarter'),
  quarterTabs: document.getElementById('quarterTabs'),
  formationSelect: document.getElementById('formationSelect'),
  lockToggle: document.getElementById('lockToggle'),
  captureBtn: document.getElementById('captureBtn'),
  copyFrom: document.getElementById('copyFrom'),
  copyBtn: document.getElementById('copyBtn'),
  pitch: document.getElementById('pitch')
};

function uid() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getQuarter() {
  return state.quarters.find((q) => q.id === state.activeQuarterId);
}

function getFormationSlots(quarter) {
  return formations[quarter.formation] || formations['4-4-2'];
}

function createQuarter(index) {
  const formation = '4-4-2';
  const slots = formations[formation];
  const assignments = {};
  slots.forEach((slot) => {
    assignments[slot.id] = null;
  });
  return {
    id: `q_${uid()}`,
    name: `${index}쿼터`,
    formation,
    locked: false,
    assignments
  };
}

function setStatus(text, isError = false) {
  el.ocrStatus.textContent = text;
  el.ocrStatus.style.color = isError ? '#b93d2d' : '';
}

function refreshFormationSelect() {
  const quarter = getQuarter();
  const keys = Object.keys(formations);
  if (el.formationSelect.options.length === 0) {
    keys.forEach((name) => {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      el.formationSelect.appendChild(option);
    });
  }
  el.formationSelect.value = quarter.formation;
  el.formationSelect.disabled = quarter.locked;
}

function renderQuarterTabs() {
  el.quarterTabs.innerHTML = '';
  state.quarters.forEach((quarter) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = `tab ${quarter.id === state.activeQuarterId ? 'active' : ''}`;
    tab.textContent = `${quarter.name}${quarter.locked ? ' 🔒' : ''}`;
    tab.addEventListener('click', () => {
      state.activeQuarterId = quarter.id;
      state.selectedSlotId = null;
      render();
    });
    el.quarterTabs.appendChild(tab);
  });
}

function getAssignedPlayerIds(quarter) {
  return new Set(Object.values(quarter.assignments).filter(Boolean));
}

function renderPlayerList() {
  const quarter = getQuarter();
  const assigned = getAssignedPlayerIds(quarter);
  const visible = state.players.filter((p) => !assigned.has(p.id));

  el.playerList.innerHTML = '';
  if (visible.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = '현재 쿼터에서 배치 가능한 선수가 없습니다.';
    el.playerList.appendChild(empty);
    return;
  }

  visible.forEach((player) => {
    const row = document.createElement('div');
    row.className = 'player';

    const name = document.createElement('span');
    name.className = 'player-name';
    name.textContent = player.name;

    const meta = document.createElement('div');
    meta.className = 'player-meta';

    const tag = document.createElement('span');
    tag.className = `tag ${player.type === 'merc' ? 'merc' : 'attend'}`;
    tag.textContent = player.type === 'merc' ? '용병' : '참석';

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'remove-player';
    remove.textContent = '삭제';
    remove.addEventListener('click', (event) => {
      event.stopPropagation();
      removePlayer(player.id);
    });

    meta.appendChild(tag);
    meta.appendChild(remove);
    row.appendChild(name);
    row.appendChild(meta);

    row.addEventListener('click', () => {
      assignSelectedPlayer(player.id);
    });

    el.playerList.appendChild(row);
  });
}

function clearPlayerFromAllQuarters(playerId) {
  state.quarters.forEach((quarter) => {
    Object.keys(quarter.assignments).forEach((slotId) => {
      if (quarter.assignments[slotId] === playerId) {
        quarter.assignments[slotId] = null;
      }
    });
  });
}

function removePlayer(playerId) {
  const player = state.players.find((p) => p.id === playerId);
  state.players = state.players.filter((p) => p.id !== playerId);
  clearPlayerFromAllQuarters(playerId);
  if (state.selectedSlotId) {
    state.selectedSlotId = null;
  }
  setStatus(`${player ? player.name : '선수'} 삭제 완료`);
  render();
}

function assignSelectedPlayer(playerId) {
  const quarter = getQuarter();
  if (quarter.locked) {
    setStatus('잠금 상태에서는 수정할 수 없습니다.', true);
    return;
  }
  if (!state.selectedSlotId) {
    setStatus('먼저 스쿼드의 포지션을 클릭해 주세요.', true);
    return;
  }

  const slotIds = Object.keys(quarter.assignments);
  slotIds.forEach((slotId) => {
    if (quarter.assignments[slotId] === playerId) {
      quarter.assignments[slotId] = null;
    }
  });

  quarter.assignments[state.selectedSlotId] = playerId;
  state.selectedSlotId = null;
  render();
}

function renderPitch() {
  const quarter = getQuarter();
  const slots = getFormationSlots(quarter);

  el.pitch.innerHTML = '';
  const centerCircle = document.createElement('div');
  centerCircle.className = 'center-circle';
  el.pitch.appendChild(centerCircle);

  slots.forEach((slot, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    const role = roleClass[slot.role] || 'mf';
    const hasPlayer = Boolean(quarter.assignments[slot.id]);
    btn.className = `position ${role} ${hasPlayer ? '' : 'empty'} ${state.selectedSlotId === slot.id ? 'selected' : ''}`.trim();
    btn.style.left = `${slot.x}%`;
    btn.style.top = `${slot.y}%`;
    btn.style.transform = 'translate(-50%, -50%)';

    const player = state.players.find((p) => p.id === quarter.assignments[slot.id]);
    btn.textContent = player ? player.name : `${slot.role}${idx + 1}`;
    btn.title = player ? `${slot.role} - ${player.name}` : `${slot.role} 자리`;

    btn.addEventListener('click', () => {
      if (quarter.locked) {
        setStatus('잠금 상태에서는 수정할 수 없습니다.', true);
        return;
      }
      if (player) {
        quarter.assignments[slot.id] = null;
        if (state.selectedSlotId === slot.id) {
          state.selectedSlotId = null;
        }
      } else {
        state.selectedSlotId = state.selectedSlotId === slot.id ? null : slot.id;
      }
      render();
    });

    el.pitch.appendChild(btn);
  });
}

function renderCopyOptions() {
  const active = getQuarter();
  el.copyFrom.innerHTML = '';

  const options = state.quarters.filter((q) => q.id !== active.id);
  if (options.length === 0) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = '복사할 쿼터 없음';
    el.copyFrom.appendChild(option);
    el.copyFrom.disabled = true;
    el.copyBtn.disabled = true;
    state.copySourceId = null;
    return;
  }

  options.forEach((q) => {
    const option = document.createElement('option');
    option.value = q.id;
    option.textContent = q.name;
    el.copyFrom.appendChild(option);
  });

  if (!state.copySourceId || !options.some((q) => q.id === state.copySourceId)) {
    state.copySourceId = options[0].id;
  }
  el.copyFrom.value = state.copySourceId;
  el.copyFrom.disabled = false;
  el.copyBtn.disabled = active.locked;
}

function renderLockState() {
  const quarter = getQuarter();
  el.lockToggle.textContent = quarter.locked ? '잠금해제' : '잠금';
  el.lockToggle.className = quarter.locked ? 'primary' : 'secondary';
}

function render() {
  refreshFormationSelect();
  renderQuarterTabs();
  renderPitch();
  renderPlayerList();
  renderCopyOptions();
  renderLockState();
}

function addPlayersByNames(names, type) {
  const existing = new Set(state.players.map((p) => p.name));
  let addedCount = 0;
  names.forEach((rawName) => {
    const name = rawName.replace(/\s+/g, ' ').trim();
    if (!name || existing.has(name)) {
      return;
    }
    existing.add(name);
    state.players.push({ id: `p_${uid()}`, name, type });
    addedCount += 1;
  });
  return addedCount;
}

function parseAttendNames(text) {
  const lines = text
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const attendIndex = lines.findIndex((line) => /참\s*석/.test(line));
  if (attendIndex === -1) {
    return [];
  }

  const stopPattern = /(불\s*참|결\s*석|대\s*기|비\s*고|코\s*치|매\s*니\s*저|용\s*병|참가비|회비)/;
  const names = [];

  for (let i = attendIndex + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (stopPattern.test(line) && names.length > 0) {
      break;
    }

    const cleaned = line
      .replace(/^[\d\s]+[.)\-]*/g, '')
      .replace(/[•·]/g, ' ')
      .replace(/\([^)]*\)/g, '')
      .trim();

    if (!cleaned || /참\s*석/.test(cleaned)) {
      continue;
    }

    const segments = cleaned
      .split(/[,/|]/)
      .map((part) => part.trim())
      .filter(Boolean);

    segments.forEach((name) => {
      if (/^[가-힣a-zA-Z\s]{2,20}$/.test(name)) {
        names.push(name);
      }
    });
  }

  return [...new Set(names)];
}

function getOcrApiKey() {
  const configKey = window.__APP_CONFIG__?.ocrSpaceApiKey?.trim();
  const inputKey = (el.ocrApiKey?.value || '').trim();
  return configKey || inputKey || 'helloworld';
}

async function preprocessImageForOcr(file) {
  if (typeof createImageBitmap !== 'function') {
    return file;
  }
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return file;
  }

  ctx.drawImage(bitmap, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    const contrasted = (gray - 128) * 1.6 + 128;
    const bw = contrasted > 155 ? 255 : 0;
    data[i] = bw;
    data[i + 1] = bw;
    data[i + 2] = bw;
  }

  ctx.putImageData(imageData, 0, 0);
  const blob = await new Promise((resolve) => {
    canvas.toBlob((output) => resolve(output), 'image/png');
  });
  return blob || file;
}

async function recognizeWithOcrSpace(fileOrBlob, apiKey) {
  const form = new FormData();
  form.append('language', 'kor');
  form.append('scale', 'true');
  form.append('isTable', 'true');
  form.append('detectOrientation', 'true');
  form.append('OCREngine', '2');
  form.append('file', fileOrBlob, 'upload.png');

  const response = await fetch('https://api.ocr.space/parse/image', {
    method: 'POST',
    headers: {
      apikey: apiKey
    },
    body: form
  });

  if (!response.ok) {
    throw new Error(`OCR.Space HTTP ${response.status}`);
  }

  const json = await response.json();
  if (json.IsErroredOnProcessing) {
    const detail = (json.ErrorMessage || []).join(' | ') || 'OCR.Space 처리 오류';
    throw new Error(detail);
  }

  const parsedText = json.ParsedResults?.[0]?.ParsedText || '';
  if (!parsedText.trim()) {
    throw new Error('OCR.Space 결과 텍스트 없음');
  }
  return parsedText;
}

async function recognizeWithTesseract(fileOrBlob) {
  if (typeof Tesseract === 'undefined') {
    throw new Error('Tesseract unavailable');
  }
  const result = await Tesseract.recognize(fileOrBlob, 'kor+eng');
  return result?.data?.text || '';
}

async function readAttendFromImage() {
  const file = el.imageInput.files?.[0];
  if (!file) {
    setStatus('먼저 이미지를 업로드해 주세요.', true);
    return;
  }

  try {
    el.ocrBtn.disabled = true;
    const apiKey = getOcrApiKey();
    const processed = await preprocessImageForOcr(file);
    let names = [];

    try {
      setStatus('OCR.Space(무료) 분석 중...');
      const ocrSpaceText = await recognizeWithOcrSpace(processed, apiKey);
      names = parseAttendNames(ocrSpaceText);
    } catch (spaceError) {
      console.warn('OCR.Space 실패, Tesseract 폴백:', spaceError);
    }

    if (names.length === 0) {
      setStatus('Tesseract 폴백 분석 중...');
      const tessText = await recognizeWithTesseract(processed);
      names = parseAttendNames(tessText);
    }

    if (names.length === 0) {
      setStatus('참석 영역에서 이름을 찾지 못했습니다. 이미지 선명도를 확인해 주세요.', true);
      return;
    }

    const added = addPlayersByNames(names, 'attend');
    if (added === 0) {
      setStatus('새로 추가된 참석자가 없습니다. (중복 제외)');
    } else {
      setStatus(`참석자 ${added}명 추가 완료`);
    }
    render();
  } catch (error) {
    console.error(error);
    setStatus('이미지 읽기에 실패했습니다.', true);
  } finally {
    el.ocrBtn.disabled = false;
  }
}

function addMercenary() {
  const name = el.mercName.value.trim();
  if (!name) {
    setStatus('용병 이름을 입력해 주세요.', true);
    return;
  }
  const added = addPlayersByNames([name], 'merc');
  if (!added) {
    setStatus('이미 존재하는 이름입니다.', true);
    return;
  }
  el.mercName.value = '';
  setStatus('용병 추가 완료');
  render();
}

function changeFormation() {
  const quarter = getQuarter();
  if (quarter.locked) {
    setStatus('잠금 상태에서는 포메이션을 바꿀 수 없습니다.', true);
    return;
  }

  const next = el.formationSelect.value;
  if (!formations[next]) {
    return;
  }

  quarter.formation = next;
  const assignments = {};
  formations[next].forEach((slot) => {
    assignments[slot.id] = null;
  });
  quarter.assignments = assignments;
  state.selectedSlotId = null;

  setStatus(`${quarter.name} 포메이션 변경: ${next}`);
  render();
}

function toggleLock() {
  const quarter = getQuarter();
  quarter.locked = !quarter.locked;
  if (quarter.locked) {
    state.selectedSlotId = null;
  }
  setStatus(`${quarter.name} ${quarter.locked ? '잠금 완료' : '잠금 해제'}`);
  render();
}

async function captureCurrentQuarter() {
  if (typeof html2canvas === 'undefined') {
    setStatus('캡처 라이브러리를 불러오지 못했습니다.', true);
    return;
  }
  const quarter = getQuarter();

  try {
    setStatus('캡처 생성 중...');
    const node = document.querySelector('.pitch-wrap');
    const canvas = await html2canvas(node, {
      backgroundColor: null,
      useCORS: true,
      scale: 2
    });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `${quarter.name}_${quarter.formation}.png`;
    link.click();
    setStatus(`${quarter.name} 캡처 다운로드 완료`);
  } catch (error) {
    console.error(error);
    setStatus('캡처 생성에 실패했습니다.', true);
  }
}

function addQuarter() {
  const nextIndex = state.quarters.length + 1;
  const quarter = createQuarter(nextIndex);
  state.quarters.push(quarter);
  state.activeQuarterId = quarter.id;
  state.selectedSlotId = null;
  setStatus(`${quarter.name} 생성 완료`);
  render();
}

function copySquadToCurrent() {
  const target = getQuarter();
  const source = state.quarters.find((q) => q.id === el.copyFrom.value);

  if (!source) {
    setStatus('복사할 쿼터를 선택해 주세요.', true);
    return;
  }
  if (target.locked) {
    setStatus('잠금 상태에서는 복사할 수 없습니다.', true);
    return;
  }

  target.formation = source.formation;
  target.assignments = { ...source.assignments };
  state.selectedSlotId = null;
  setStatus(`${source.name} 스쿼드를 ${target.name}로 복사했습니다.`);
  render();
}

function bindEvents() {
  el.ocrBtn.addEventListener('click', readAttendFromImage);
  el.addMerc.addEventListener('click', addMercenary);
  el.mercName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addMercenary();
    }
  });
  el.addQuarter.addEventListener('click', addQuarter);
  el.formationSelect.addEventListener('change', changeFormation);
  el.lockToggle.addEventListener('click', toggleLock);
  el.captureBtn.addEventListener('click', captureCurrentQuarter);
  el.copyFrom.addEventListener('change', (event) => {
    state.copySourceId = event.target.value;
  });
  el.copyBtn.addEventListener('click', copySquadToCurrent);
}

function init() {
  for (let i = 1; i <= 4; i += 1) {
    state.quarters.push(createQuarter(i));
  }
  state.activeQuarterId = state.quarters[0].id;
  if (window.__APP_CONFIG__?.ocrSpaceApiKey && el.ocrApiKey) {
    el.ocrApiKey.value = 'local config key loaded';
  }
  bindEvents();
  render();
}

init();
