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
  ocrBtn: document.getElementById('ocrBtn'),
  ocrStatus: document.getElementById('ocrStatus'),
  playerStatus: document.getElementById('playerStatus'),
  squadStatus: document.getElementById('squadStatus'),
  mercName: document.getElementById('mercName'),
  mercType: document.getElementById('mercType'),
  addMerc: document.getElementById('addMerc'),
  playerList: document.getElementById('playerList'),
  playerStrip: document.getElementById('playerStrip'),
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

function setBlockStatus(target, text, isError = false) {
  if (!target) {
    return;
  }
  target.textContent = text;
  target.classList.toggle('error', Boolean(isError));
}

function setOcrStatus(text, isError = false) {
  setBlockStatus(el.ocrStatus, text, isError);
}

function setPlayerStatus(text, isError = false) {
  setBlockStatus(el.playerStatus, text, isError);
}

function setSquadStatus(text, isError = false) {
  setBlockStatus(el.squadStatus, text, isError);
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
    empty.textContent = '';
    el.playerList.appendChild(empty);
    return;
  }

  visible.forEach((player) => {
    const row = document.createElement('div');
    row.className = 'player';

    const name = document.createElement('span');
    name.className = 'player-name';
    name.textContent = player.name;

    const tag = document.createElement('span');
    tag.className = `tag ${player.type === 'merc' ? 'merc' : 'attend'}`;
    tag.textContent = player.type === 'merc' ? '용병' : '멤버';

    const left = document.createElement('div');
    left.className = 'player-left';
    left.appendChild(name);
    left.appendChild(tag);

    const meta = document.createElement('div');
    meta.className = 'player-meta';

    const remove = document.createElement('button');
    const edit = document.createElement('button');
    edit.type = 'button';
    edit.className = 'edit-player';
    edit.setAttribute('aria-label', '선수 이름 수정');
    edit.textContent = '✎';
    edit.addEventListener('click', (event) => {
      event.stopPropagation();
      const nextName = window.prompt('수정할 이름을 입력해 주세요.', player.name);
      if (nextName === null) {
        return;
      }
      renamePlayer(player.id, nextName);
    });

    remove.type = 'button';
    remove.className = 'remove-player';
    remove.setAttribute('aria-label', '선수 삭제');
    remove.textContent = '🗑';
    remove.addEventListener('click', (event) => {
      event.stopPropagation();
      removePlayer(player.id);
    });

    meta.appendChild(edit);
    meta.appendChild(remove);
    row.appendChild(left);
    row.appendChild(meta);

    row.addEventListener('click', () => {
      assignSelectedPlayer(player.id);
    });

    el.playerList.appendChild(row);
  });
}

function renderPlayerStrip() {
  const quarter = getQuarter();
  const assigned = getAssignedPlayerIds(quarter);
  const locked = quarter.locked;

  el.playerStrip.innerHTML = '';
  if (state.players.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = '확정된 선수가 없습니다.';
    el.playerStrip.appendChild(empty);
    return;
  }

  state.players.forEach((player) => {
    const chip = document.createElement('button');
    const isAssigned = assigned.has(player.id);
    chip.type = 'button';
    chip.className = `player-chip ${player.type === 'merc' ? 'merc' : 'attend'}${isAssigned || locked ? ' disabled' : ''}`;
    chip.textContent = player.name;

    if (!isAssigned && !locked) {
      chip.addEventListener('click', () => {
        assignSelectedPlayer(player.id);
      });
    } else {
      chip.disabled = true;
    }

    el.playerStrip.appendChild(chip);
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
  setPlayerStatus(`${player ? player.name : '선수'} 삭제 완료`);
  render();
}

function renamePlayer(playerId, nextNameRaw) {
  const nextName = nextNameRaw.replace(/\s+/g, ' ').trim();
  if (!nextName) {
    setPlayerStatus('수정할 이름을 입력해 주세요.', true);
    return;
  }
  const duplicate = state.players.some((p) => p.id !== playerId && p.name === nextName);
  if (duplicate) {
    setPlayerStatus('이미 존재하는 이름입니다.', true);
    return;
  }
  const player = state.players.find((p) => p.id === playerId);
  if (!player) {
    return;
  }
  const prev = player.name;
  player.name = nextName;
  setPlayerStatus(`${prev} -> ${nextName} 수정 완료`);
  render();
}

function assignSelectedPlayer(playerId) {
  const quarter = getQuarter();
  if (quarter.locked) {
    setSquadStatus('잠금 상태에서는 수정할 수 없습니다.', true);
    return;
  }
  if (!state.selectedSlotId) {
    setSquadStatus('먼저 스쿼드의 포지션을 클릭해 주세요.', true);
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
        setSquadStatus('잠금 상태에서는 수정할 수 없습니다.', true);
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
  const source = getQuarter();
  el.copyFrom.innerHTML = '';

  const options = state.quarters.filter((q) => q.id !== source.id);
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
  const target = state.quarters.find((q) => q.id === state.copySourceId);
  el.copyBtn.disabled = !target || target.locked;
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
  renderPlayerStrip();
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

function parseAttendSectionNames(text) {
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

function isLikelyName(token) {
  const name = token.replace(/\s+/g, ' ').trim();
  if (!name) {
    return false;
  }
  const blocked = /^(참석|불참|결석|대기|비고|코치|감독|매니저|명단|인원|총원|회비|날짜|시간|장소|쿼터|포메이션|스쿼드|용병)$/;
  if (blocked.test(name)) {
    return false;
  }
  if (/^[가-힣]{2,5}$/.test(name)) {
    return true;
  }
  if (/^[A-Za-z][A-Za-z\s]{1,19}$/.test(name)) {
    return true;
  }
  return false;
}

function extractNamesFromLine(line) {
  const cleaned = line
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/[•·]/g, ' ')
    .replace(/^\s*[\d]+\s*[.)-]?\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) {
    return [];
  }

  const candidates = [];
  const byDelim = cleaned
    .split(/[,/|:;\t]/)
    .map((s) => s.trim())
    .filter(Boolean);

  byDelim.forEach((segment) => {
    if (isLikelyName(segment)) {
      candidates.push(segment);
      return;
    }
    const words = segment.split(' ').filter(Boolean);
    if (words.length > 1) {
      words.forEach((w) => {
        if (isLikelyName(w)) {
          candidates.push(w);
        }
      });
    }
  });

  const koreanMatches = cleaned.match(/[가-힣]{2,5}/g) || [];
  koreanMatches.forEach((item) => {
    if (isLikelyName(item)) {
      candidates.push(item);
    }
  });

  return [...new Set(candidates)];
}

function parseTemplateNames(text) {
  const lines = text
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const names = [];
  lines.forEach((line) => {
    const lineHasMostlyNoise = /(날짜|시간|장소|회비|유니폼|준비물|공지|대진|포메이션|쿼터|비고)/.test(line);
    if (lineHasMostlyNoise && !/[가-힣]{2,5}/.test(line)) {
      return;
    }
    extractNamesFromLine(line).forEach((name) => {
      names.push(name);
    });
  });

  return [...new Set(names)];
}

function parseNamesFromOcrText(text) {
  const fromAttendSection = parseAttendSectionNames(text);
  const fromTemplate = parseTemplateNames(text);

  if (fromAttendSection.length >= 4 && fromTemplate.length <= fromAttendSection.length + 2) {
    return fromAttendSection;
  }
  if (fromTemplate.length > 0) {
    return fromTemplate;
  }
  return fromAttendSection;
}

function getOcrApiKey() {
  const configKey = window.__APP_CONFIG__?.ocrSpaceApiKey?.trim();
  return configKey || 'helloworld';
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
    setOcrStatus('먼저 이미지를 업로드해 주세요.', true);
    return;
  }

  try {
    el.ocrBtn.disabled = true;
    const apiKey = getOcrApiKey();
    const processed = await preprocessImageForOcr(file);
    let names = [];

    try {
      setOcrStatus('참석자 명단 확인중...');
      const ocrSpaceText = await recognizeWithOcrSpace(processed, apiKey);
      names = parseNamesFromOcrText(ocrSpaceText);
    } catch (spaceError) {
      console.warn('OCR.Space 실패, Tesseract 폴백:', spaceError);
    }

    if (names.length === 0) {
      setOcrStatus('Tesseract 폴백 분석 중...');
      const tessText = await recognizeWithTesseract(processed);
      names = parseNamesFromOcrText(tessText);
    }

    if (names.length === 0) {
      setOcrStatus('명단에서 이름을 찾지 못했습니다. 고정 양식/이미지 선명도를 확인해 주세요.', true);
      return;
    }

    const added = addPlayersByNames(names, 'attend');
    if (added === 0) {
      setOcrStatus('새로 추가된 참석자가 없습니다. (중복 제외)');
    } else {
      setOcrStatus(`참석자 ${added}명 추가 완료`);
    }
    render();
  } catch (error) {
    console.error(error);
    setOcrStatus('이미지 읽기에 실패했습니다.', true);
  } finally {
    el.ocrBtn.disabled = false;
  }
}

function addMercenary() {
  const name = el.mercName.value.trim();
  if (!name) {
    setPlayerStatus('이름을 입력해 주세요.', true);
    return;
  }
  const type = el.mercType.value === 'merc' ? 'merc' : 'attend';
  const added = addPlayersByNames([name], type);
  if (!added) {
    setPlayerStatus('이미 존재하는 이름입니다.', true);
    return;
  }
  el.mercName.value = '';
  setPlayerStatus(`${type === 'merc' ? '용병' : 'Member'} 추가 완료`);
  render();
}

function changeFormation() {
  const quarter = getQuarter();
  if (quarter.locked) {
    setSquadStatus('잠금 상태에서는 포메이션을 바꿀 수 없습니다.', true);
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

  setSquadStatus(`${quarter.name} 포메이션 변경: ${next}`);
  render();
}

function toggleLock() {
  const quarter = getQuarter();
  quarter.locked = !quarter.locked;
  if (quarter.locked) {
    state.selectedSlotId = null;
  }
  setSquadStatus(`${quarter.name} ${quarter.locked ? '잠금 완료' : '잠금 해제'}`);
  render();
}

async function captureCurrentQuarter() {
  if (typeof html2canvas === 'undefined') {
    setSquadStatus('캡처 라이브러리를 불러오지 못했습니다.', true);
    return;
  }
  const quarter = getQuarter();

  try {
    setSquadStatus('캡처 생성 중...');
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
    setSquadStatus(`${quarter.name} 캡처 다운로드 완료`);
  } catch (error) {
    console.error(error);
    setSquadStatus('캡처 생성에 실패했습니다.', true);
  }
}

function addQuarter() {
  const nextIndex = state.quarters.length + 1;
  const quarter = createQuarter(nextIndex);
  state.quarters.push(quarter);
  state.activeQuarterId = quarter.id;
  state.selectedSlotId = null;
  setSquadStatus(`${quarter.name} 생성 완료`);
  render();
}

function copySquadToCurrent() {
  const source = getQuarter();
  const target = state.quarters.find((q) => q.id === el.copyFrom.value);

  if (!target) {
    setSquadStatus('복사할 쿼터를 선택해 주세요.', true);
    return;
  }
  if (target.locked) {
    setSquadStatus('잠금 상태에서는 복사할 수 없습니다.', true);
    return;
  }

  target.formation = source.formation;
  target.assignments = { ...source.assignments };
  state.selectedSlotId = null;
  setSquadStatus(`${source.name} 스쿼드를 ${target.name}에 복사했습니다.`);
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
    const target = state.quarters.find((q) => q.id === state.copySourceId);
    el.copyBtn.disabled = !target || target.locked;
  });
  el.copyBtn.addEventListener('click', copySquadToCurrent);
}

function init() {
  for (let i = 1; i <= 4; i += 1) {
    state.quarters.push(createQuarter(i));
  }
  state.activeQuarterId = state.quarters[0].id;
  bindEvents();
  render();
}

init();
