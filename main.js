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
    { id: 'mf1', role: 'MF', x: 28, y: 48 },
    { id: 'mf2', role: 'MF', x: 50, y: 54 },
    { id: 'mf3', role: 'MF', x: 72, y: 48 },
    { id: 'fw1', role: 'FW', x: 20, y: 22 },
    { id: 'fw2', role: 'FW', x: 50, y: 18 },
    { id: 'fw3', role: 'FW', x: 80, y: 22 }
  ],
  '3-5-2': [
    { id: 'gk1', role: 'GK', x: 50, y: 90 },
    { id: 'df1', role: 'DF', x: 26, y: 72 },
    { id: 'df2', role: 'DF', x: 50, y: 74 },
    { id: 'df3', role: 'DF', x: 74, y: 72 },
    { id: 'mf1', role: 'MF', x: 14, y: 44 },
    { id: 'mf2', role: 'MF', x: 32, y: 58 },
    { id: 'mf3', role: 'MF', x: 50, y: 44 },
    { id: 'mf4', role: 'MF', x: 68, y: 58 },
    { id: 'mf5', role: 'MF', x: 86, y: 44 },
    { id: 'fw1', role: 'FW', x: 38, y: 24 },
    { id: 'fw2', role: 'FW', x: 62, y: 24 }
  ],
  '3-4-3': [
    { id: 'gk1', role: 'GK', x: 50, y: 90 },
    { id: 'df1', role: 'DF', x: 26, y: 72 },
    { id: 'df2', role: 'DF', x: 50, y: 74 },
    { id: 'df3', role: 'DF', x: 74, y: 72 },
    { id: 'mf1', role: 'MF', x: 18, y: 50 },
    { id: 'mf2', role: 'MF', x: 40, y: 54 },
    { id: 'mf3', role: 'MF', x: 60, y: 54 },
    { id: 'mf4', role: 'MF', x: 82, y: 50 },
    { id: 'fw1', role: 'FW', x: 20, y: 22 },
    { id: 'fw2', role: 'FW', x: 50, y: 18 },
    { id: 'fw3', role: 'FW', x: 80, y: 22 }
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
  selectedPlayerId: null,
  copySourceId: null,
  isHydrating: true
};

const el = {
  imageInput: document.getElementById('imageInput'),
  ocrBtn: document.getElementById('ocrBtn'),
  ocrStatus: document.getElementById('ocrStatus'),
  playerStatus: document.getElementById('playerStatus'),
  squadStatus: document.getElementById('squadStatus'),
  teamName: document.getElementById('teamName'),
  matchDate: document.getElementById('matchDate'),
  opponentName: document.getElementById('opponentName'),
  playerList: document.getElementById('playerList'),
  playerStrip: document.getElementById('playerStrip'),
  resetPlayers: document.getElementById('resetPlayers'),
  playerCountLabel: document.getElementById('playerCountLabel'),
  addQuarter: document.getElementById('addQuarter'),
  resetQuarter: document.getElementById('resetQuarter'),
  quarterCard: document.getElementById('quarterCard'),
  quarterTabs: document.getElementById('quarterTabs'),
  formationSelect: document.getElementById('formationSelect'),
  lockToggle: document.getElementById('lockToggle'),
  captureBtn: document.getElementById('captureBtn'),
  copyFrom: document.getElementById('copyFrom'),
  copyBtn: document.getElementById('copyBtn'),
  pitch: document.getElementById('pitch'),
  pitchQuarterBadge: document.getElementById('pitchQuarterBadge'),
  playerModal: document.getElementById('playerModal'),
  playerModalName: document.getElementById('playerModalName'),
  addPlayerForm: document.getElementById('addPlayerForm'),
  addPlayerName: document.getElementById('addPlayerName'),
  addPlayerType: document.getElementById('addPlayerType'),
  addPlayerConfirm: document.getElementById('addPlayerConfirm'),
  resetSession: document.getElementById('resetSession'),
  modalEdit: document.getElementById('modalEdit'),
  modalToggleType: document.getElementById('modalToggleType'),
  modalDelete: document.getElementById('modalDelete'),
  modalCancel: document.getElementById('modalCancel')
};

const STORAGE_KEY = 'squad_builder_state_v1';

function uid() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getTodayDateString() {
  const now = new Date();
  const tzOffsetMs = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - tzOffsetMs).toISOString().slice(0, 10);
}

function getMatchMeta() {
  const team = (el.teamName?.value || '').trim() || '우리팀';
  const opponent = (el.opponentName?.value || '').trim();
  const matchDate = (el.matchDate?.value || '').trim() || getTodayDateString();
  const matchTitle = opponent ? `${team} vs ${opponent}` : team;
  return { team, opponent, matchDate, matchTitle };
}

function formatDateForHeader(dateText) {
  const value = (dateText || '').trim();
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return value;
  }
  return `${match[2]}/${match[3]}`;
}

function getQuarter() {
  return state.quarters.find((q) => q.id === state.activeQuarterId);
}

function saveState() {
  if (state.isHydrating) {
    return;
  }
  const meta = getMatchMeta();
  const payload = {
    version: 1,
    meta,
    players: state.players,
    quarters: state.quarters,
    activeQuarterId: state.activeQuarterId
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('localStorage save failed:', error);
  }
}

function normalizeQuarter(rawQuarter, index) {
  const formation = formations[rawQuarter?.formation] ? rawQuarter.formation : '4-3-3';
  const quarter = {
    id: rawQuarter?.id || `q_${uid()}`,
    name: rawQuarter?.name || `${index}쿼터`,
    formation,
    locked: Boolean(rawQuarter?.locked),
    assignments: { ...(rawQuarter?.assignments || {}) },
    backups: { ...(rawQuarter?.backups || {}) }
  };
  ensureQuarterSlotMaps(quarter);
  return quarter;
}

function normalizePlayer(rawPlayer) {
  const name = String(rawPlayer?.name || '').trim();
  if (!name) {
    return null;
  }
  const type = rawPlayer?.type === 'merc' ? 'merc' : 'attend';
  return {
    id: rawPlayer?.id || `p_${uid()}`,
    name,
    type
  };
}

function loadState() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return false;
  }
  try {
    const parsed = JSON.parse(raw);
    const players = Array.isArray(parsed.players) ? parsed.players.map(normalizePlayer).filter(Boolean) : [];
    const quarters = Array.isArray(parsed.quarters)
      ? parsed.quarters.map((q, index) => normalizeQuarter(q, index + 1))
      : [];

    if (players.length === 0 || quarters.length === 0) {
      return false;
    }

    state.players = players;
    state.quarters = quarters;
    const activeId = parsed.activeQuarterId;
    state.activeQuarterId = quarters.some((q) => q.id === activeId) ? activeId : quarters[0].id;

    const meta = parsed.meta || {};
    if (el.teamName && meta.team) {
      el.teamName.value = meta.team;
    }
    if (el.opponentName && meta.opponent) {
      el.opponentName.value = meta.opponent;
    }
    if (el.matchDate && meta.matchDate) {
      el.matchDate.value = meta.matchDate;
    }
    return true;
  } catch (error) {
    console.warn('localStorage load failed:', error);
    return false;
  }
}

function getFormationSlots(quarter) {
  return formations[quarter.formation] || formations['4-3-3'];
}

function ensureQuarterSlotMaps(quarter) {
  if (!quarter.backups) {
    quarter.backups = {};
  }
  const slots = getFormationSlots(quarter);
  slots.forEach((slot) => {
    if (!(slot.id in quarter.assignments)) {
      quarter.assignments[slot.id] = null;
    }
    if (!(slot.id in quarter.backups)) {
      quarter.backups[slot.id] = null;
    }
  });
}

function createQuarter(index) {
  const formation = '4-3-3';
  const slots = formations[formation];
  const assignments = {};
  const backups = {};
  slots.forEach((slot) => {
    assignments[slot.id] = null;
    backups[slot.id] = null;
  });
  return {
    id: `q_${uid()}`,
    name: `${index}쿼터`,
    formation,
    locked: false,
    assignments,
    backups
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

function updateOcrButtonState() {
  const hasFile = Boolean(el.imageInput.files?.[0]);
  el.ocrBtn.disabled = !hasFile;
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
  state.quarters.forEach((quarter, index) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    const slots = getFormationSlots(quarter);
    const allFilled = slots.every((slot) => Boolean(quarter.assignments?.[slot.id]));
    tab.className = `tab ${quarter.id === state.activeQuarterId ? 'active' : ''}${allFilled ? ' filled' : ''}`;

    const label = document.createElement('span');
    label.className = 'tab-label';
    label.textContent = `${quarter.name}${quarter.locked ? ' 🔒' : ''}`;
    tab.appendChild(label);

    if (index >= 4) {
      const remove = document.createElement('span');
      remove.className = 'tab-delete';
      remove.textContent = '×';
      remove.title = '쿼터 삭제';
      remove.setAttribute('role', 'button');
      remove.setAttribute('aria-label', `${quarter.name} 삭제`);
      remove.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        openQuarterDeleteModal(quarter);
      });
      tab.appendChild(remove);
    }

    tab.addEventListener('click', () => {
      state.activeQuarterId = quarter.id;
      state.selectedSlotId = null;
      state.selectedPlayerId = null;
      render();
    });
    el.quarterTabs.appendChild(tab);
  });
}

function getUsedPlayerIds(quarter) {
  return new Set([
    ...Object.values(quarter.assignments).filter(Boolean),
    ...Object.values(quarter.backups || {}).filter(Boolean)
  ]);
}

function getPlayerQuarterCounts() {
  const counts = new Map();
  state.players.forEach((p) => counts.set(p.id, 0));

  state.quarters.forEach((quarter) => {
    ensureQuarterSlotMaps(quarter);
    const slots = getFormationSlots(quarter);
    slots.forEach((slot) => {
      const mainId = quarter.assignments?.[slot.id] || null;
      const backupId = quarter.backups?.[slot.id] || null;
      if (mainId) {
        const mainValue = backupId ? 0.5 : 1;
        counts.set(mainId, (counts.get(mainId) || 0) + mainValue);
      }
      if (backupId) {
        counts.set(backupId, (counts.get(backupId) || 0) + 0.5);
      }
    });
  });

  return counts;
}

function renderPlayerList() {
  const visible = state.players;
  if (el.playerCountLabel) {
    const members = state.players.filter((p) => p.type !== 'merc').length;
    const mercs = state.players.filter((p) => p.type === 'merc').length;
    el.playerCountLabel.textContent = `(선수 ${members} / 용병 ${mercs})`;
  }

  el.playerList.innerHTML = '';
  if (visible.length === 0) {
    // keep list empty except add button
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

    const title = document.createElement('div');
    title.className = 'player-title';
    title.appendChild(name);
    title.appendChild(tag);

    row.appendChild(title);

    row.addEventListener('click', () => {
      openPlayerModal(player);
    });

    el.playerList.appendChild(row);
  });

  const addCard = document.createElement('button');
  addCard.type = 'button';
  addCard.className = 'player player-add';
  addCard.textContent = '+ 추가';
  addCard.addEventListener('click', openAddPlayerModal);
  el.playerList.appendChild(addCard);
}

const modalState = {
  type: null,
  targetId: null
};

function toggleAddModalForm(visible) {
  if (!el.addPlayerForm || !el.addPlayerConfirm) {
    return;
  }
  el.addPlayerForm.hidden = !visible;
  el.addPlayerConfirm.hidden = !visible;
}

function openPlayerModal(player) {
  modalState.type = 'player';
  modalState.targetId = player.id;
  el.playerModalName.textContent = player.name;
  toggleAddModalForm(false);
  el.modalEdit.style.display = '';
  el.modalToggleType.style.display = '';
  el.modalToggleType.textContent = player.type === 'merc' ? '멤버로 바꾸기' : '용병으로 바꾸기';
  el.modalDelete.textContent = '삭제';
  el.modalDelete.style.display = '';
  el.playerModal.classList.remove('hidden');
}

function openAddPlayerModal() {
  modalState.type = 'add-player';
  modalState.targetId = null;
  el.playerModalName.textContent = '멤버/용병 추가';
  toggleAddModalForm(true);
  if (el.addPlayerName) {
    el.addPlayerName.value = '';
    el.addPlayerName.focus();
  }
  if (el.addPlayerType) {
    el.addPlayerType.value = 'attend';
  }
  el.modalEdit.style.display = 'none';
  el.modalToggleType.style.display = 'none';
  el.modalDelete.style.display = 'none';
  el.playerModal.classList.remove('hidden');
}

function closePlayerModal() {
  modalState.type = null;
  modalState.targetId = null;
  toggleAddModalForm(false);
  el.modalEdit.style.display = '';
  el.modalToggleType.style.display = '';
  el.modalToggleType.textContent = '용병으로 바꾸기';
  el.modalDelete.textContent = '삭제';
  el.modalDelete.style.display = '';
  el.playerModal.classList.add('hidden');
}

function openQuarterDeleteModal(quarter) {
  modalState.type = 'quarter-delete';
  modalState.targetId = quarter.id;
  el.playerModalName.textContent = `${quarter.name}를 삭제할까요?`;
  toggleAddModalForm(false);
  el.modalEdit.style.display = 'none';
  el.modalToggleType.style.display = 'none';
  el.modalDelete.textContent = '삭제';
  el.modalDelete.style.display = '';
  el.playerModal.classList.remove('hidden');
}

function renderPlayerStrip() {
  const quarter = getQuarter();
  ensureQuarterSlotMaps(quarter);
  const used = getUsedPlayerIds(quarter);
  const locked = quarter.locked;
  const counts = getPlayerQuarterCounts();

  el.playerStrip.innerHTML = '';
  if (state.players.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = '<no list>';
    el.playerStrip.appendChild(empty);
    return;
  }

  state.players.forEach((player) => {
    const chip = document.createElement('button');
    const isAssigned = used.has(player.id);
    const isSelected = state.selectedPlayerId === player.id;
    const count = counts.get(player.id) || 0;
    chip.type = 'button';
    chip.className = `player-chip ${player.type === 'merc' ? 'merc' : 'attend'}${isSelected ? ' selected' : ''}${isAssigned || locked ? ' disabled' : ''}`;
    chip.textContent = `${player.name} (${count.toFixed(1)})`;

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
      if (quarter.backups?.[slotId] === playerId) {
        quarter.backups[slotId] = null;
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
  if (state.selectedPlayerId === playerId) {
    state.selectedPlayerId = null;
  }
  setPlayerStatus(`${player ? player.name : '선수'} 삭제 완료`);
  render();
}

function resetPlayersList() {
  if (state.players.length === 0) {
    setPlayerStatus('삭제할 선수가 없습니다.', true);
    return;
  }
  const ok = window.confirm('선수 리스트를 모두 초기화할까요? 배치도 함께 삭제됩니다.');
  if (!ok) {
    return;
  }
  state.players = [];
  state.quarters.forEach((quarter) => {
    Object.keys(quarter.assignments || {}).forEach((slotId) => {
      quarter.assignments[slotId] = null;
    });
    Object.keys(quarter.backups || {}).forEach((slotId) => {
      quarter.backups[slotId] = null;
    });
  });
  state.selectedSlotId = null;
  state.selectedPlayerId = null;
  setPlayerStatus('선수 리스트 초기화 완료');
  render();
}

function resetSession() {
  const ok = window.confirm('모든 데이터를 초기화할까요?');
  if (!ok) {
    return;
  }
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('localStorage reset failed:', error);
  }
  state.players = [];
  state.quarters = [];
  for (let i = 1; i <= 4; i += 1) {
    state.quarters.push(createQuarter(i));
  }
  state.activeQuarterId = state.quarters[0].id;
  state.selectedSlotId = null;
  state.selectedPlayerId = null;
  state.copySourceId = null;

  if (el.teamName) {
    el.teamName.value = '';
  }
  if (el.opponentName) {
    el.opponentName.value = '';
  }
  if (el.matchDate) {
    el.matchDate.value = getTodayDateString();
  }
  setPlayerStatus('전체 초기화 완료');
  setSquadStatus('스쿼드 대기 중');
  setOcrStatus('대기 중');
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

function togglePlayerType(playerId) {
  const player = state.players.find((p) => p.id === playerId);
  if (!player) {
    return false;
  }
  const nextType = player.type === 'merc' ? 'attend' : 'merc';
  player.type = nextType;
  setPlayerStatus(`${player.name} ${nextType === 'merc' ? '용병' : '멤버'} 전환 완료`);
  render();
  return true;
}

function makeSlotKey(slotId, targetType = 'main') {
  return targetType === 'backup' ? `backup:${slotId}` : slotId;
}

function parseSlotKey(slotKey) {
  if (!slotKey) {
    return { slotId: null, targetType: 'main' };
  }
  if (slotKey.startsWith('backup:')) {
    return { slotId: slotKey.slice(7), targetType: 'backup' };
  }
  return { slotId: slotKey, targetType: 'main' };
}

function getQuarterSlotValue(quarter, slotId, targetType = 'main') {
  if (targetType === 'backup') {
    return quarter.backups?.[slotId] || null;
  }
  return quarter.assignments?.[slotId] || null;
}

function setQuarterSlotValue(quarter, slotId, targetType, playerId) {
  if (targetType === 'backup') {
    quarter.backups[slotId] = playerId;
    return;
  }
  quarter.assignments[slotId] = playerId;
}

function placePlayerToSlot(quarter, slotId, playerId, targetType = 'main') {
  Object.keys(quarter.assignments).forEach((id) => {
    if (quarter.assignments[id] === playerId) {
      quarter.assignments[id] = null;
    }
    if (quarter.backups?.[id] === playerId) {
      quarter.backups[id] = null;
    }
  });
  setQuarterSlotValue(quarter, slotId, targetType, playerId);
}

function assignSelectedPlayer(playerId) {
  const quarter = getQuarter();
  ensureQuarterSlotMaps(quarter);
  if (quarter.locked) {
    setSquadStatus('잠금 상태에서는 수정할 수 없습니다.', true);
    return;
  }
  if (!state.selectedSlotId) {
    state.selectedPlayerId = state.selectedPlayerId === playerId ? null : playerId;
    render();
    return;
  }
  const { slotId, targetType } = parseSlotKey(state.selectedSlotId);
  if (!slotId) {
    return;
  }
  placePlayerToSlot(quarter, slotId, playerId, targetType);
  state.selectedSlotId = null;
  state.selectedPlayerId = null;
  render();
}

function renderPitch() {
  const quarter = getQuarter();
  ensureQuarterSlotMaps(quarter);
  const slots = getFormationSlots(quarter);

  el.pitch.innerHTML = '';
  slots.forEach((slot) => {
    const role = roleClass[slot.role] || 'mf';

    const renderSlotButton = (targetType) => {
      const slotKey = makeSlotKey(slot.id, targetType);
      const playerId = getQuarterSlotValue(quarter, slot.id, targetType);
      const player = state.players.find((p) => p.id === playerId);
      const isBackup = targetType === 'backup';
      const btn = document.createElement('button');
      const emptyClass = !player ? 'empty' : '';
      btn.type = 'button';
      btn.className = `position ${role} ${isBackup ? 'backup' : ''} ${emptyClass} ${state.selectedSlotId === slotKey ? 'selected' : ''}`.trim();
      btn.style.left = `${slot.x}%`;
      btn.style.top = `${slot.y}%`;
      btn.style.transform = isBackup ? 'translate(42%, -118%)' : 'translate(-50%, -50%)';
      btn.textContent = player ? player.name : (isBackup ? '' : `${slot.role}`);
      btn.title = player
        ? `${slot.role}${isBackup ? ' 후보' : ''} - ${player.name}`
        : `${slot.role}${isBackup ? ' 후보' : ''} 자리`;

      btn.addEventListener('click', () => {
        if (quarter.locked) {
          setSquadStatus('잠금 상태에서는 수정할 수 없습니다.', true);
          return;
        }
        if (state.selectedPlayerId) {
          placePlayerToSlot(quarter, slot.id, state.selectedPlayerId, targetType);
          state.selectedPlayerId = null;
          state.selectedSlotId = null;
          render();
          return;
        }

        if (player) {
          setQuarterSlotValue(quarter, slot.id, targetType, null);
          if (state.selectedSlotId === slotKey) {
            state.selectedSlotId = null;
          }
          if (state.selectedPlayerId === player.id) {
            state.selectedPlayerId = null;
          }
          render();
          return;
        }

        state.selectedSlotId = state.selectedSlotId === slotKey ? null : slotKey;
        render();
      });

      el.pitch.appendChild(btn);
    };

    renderSlotButton('main');
    renderSlotButton('backup');
  });
}

function renderCopyOptions() {
  const source = getQuarter();
  ensureQuarterSlotMaps(source);
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

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '쿼터 선택';
  el.copyFrom.appendChild(placeholder);

  options.forEach((q) => {
    const option = document.createElement('option');
    option.value = q.id;
    option.textContent = q.name;
    el.copyFrom.appendChild(option);
  });

  if (!state.copySourceId || !options.some((q) => q.id === state.copySourceId)) {
    state.copySourceId = null;
  }
  el.copyFrom.value = state.copySourceId || '';
  el.copyFrom.disabled = false;
  const target = state.quarters.find((q) => q.id === state.copySourceId);
  el.copyBtn.disabled = !target || target.locked;
}

function renderLockState() {
  const quarter = getQuarter();
  el.lockToggle.textContent = quarter.locked ? '잠금해제' : '잠금';
  el.lockToggle.className = quarter.locked ? 'primary' : 'secondary';
}

function renderPitchQuarterBadge() {
  const quarter = getQuarter();
  if (!el.pitchQuarterBadge || !quarter) {
    return;
  }
  el.pitchQuarterBadge.textContent = `${quarter.name} | ${quarter.formation}`;
}

function render() {
  refreshFormationSelect();
  renderQuarterTabs();
  renderPitch();
  renderPitchQuarterBadge();
  renderPlayerList();
  renderPlayerStrip();
  renderCopyOptions();
  renderLockState();
  saveState();
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
    updateOcrButtonState();
  }
}

function addMercenary() {
  const name = el.addPlayerName.value.trim();
  if (!name) {
    setPlayerStatus('이름을 입력해 주세요.', true);
    return false;
  }
  const type = el.addPlayerType.value === 'merc' ? 'merc' : 'attend';
  const added = addPlayersByNames([name], type);
  if (!added) {
    setPlayerStatus('이미 존재하는 이름입니다.', true);
    return false;
  }
  setPlayerStatus(`${type === 'merc' ? '용병' : '멤버'} 추가 완료`);
  render();
  return true;
}

function changeFormation() {
  const quarter = getQuarter();
  ensureQuarterSlotMaps(quarter);
  if (quarter.locked) {
    setSquadStatus('잠금 상태에서는 포메이션을 바꿀 수 없습니다.', true);
    return;
  }

  const next = el.formationSelect.value;
  if (next === quarter.formation) {
    return;
  }
  if (!formations[next]) {
    return;
  }
  const ok = window.confirm('포메이션을 변경하면 현재 배치가 초기화됩니다. 계속할까요?');
  if (!ok) {
    el.formationSelect.value = quarter.formation;
    return;
  }

  quarter.formation = next;
  const assignments = {};
  const backups = {};
  formations[next].forEach((slot) => {
    assignments[slot.id] = null;
    backups[slot.id] = null;
  });
  quarter.assignments = assignments;
  quarter.backups = backups;
  state.selectedSlotId = null;
  state.selectedPlayerId = null;

  setSquadStatus(`${quarter.name} 포메이션 변경: ${next}`);
  render();
}

function toggleLock() {
  const quarter = getQuarter();
  quarter.locked = !quarter.locked;
  if (quarter.locked) {
    state.selectedSlotId = null;
    state.selectedPlayerId = null;
  }
  setSquadStatus(`${quarter.name} ${quarter.locked ? '잠금 완료' : '잠금 해제'}`);
  render();
}

async function captureCurrentQuarter() {
  const quarter = getQuarter();
  ensureQuarterSlotMaps(quarter);
  const slots = getFormationSlots(quarter);
  const allFilled = slots.every((slot) => Boolean(quarter.assignments?.[slot.id]));
  if (!allFilled) {
    const ok = window.confirm('포메이션이 완성되지 않았습니다. 그래도 캡쳐할까요?');
    if (!ok) {
      return;
    }
  }

  const roleFill = {
    FW: '#e04c3a',
    MF: '#37a64a',
    DF: '#2c6be0',
    GK: '#f2c94c'
  };
  const roleFillTransparent = {
    FW: 'rgba(224, 76, 58, 0.5)',
    MF: 'rgba(55, 166, 74, 0.5)',
    DF: 'rgba(44, 107, 224, 0.5)',
    GK: 'rgba(242, 201, 76, 0.5)'
  };

  const loadImage = (src) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`이미지 로드 실패: ${src}`));
    image.src = src;
  });

  const drawSlot = (ctx, x, y, radius, label, fillColor, empty, minFontSize = 13, fontScale = 1) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = empty ? 'rgba(255,255,255,0.24)' : fillColor;
    ctx.fill();
    ctx.lineWidth = empty ? 3 : 5;
    ctx.setLineDash(empty ? [8, 6] : []);
    ctx.strokeStyle = empty ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.95)';
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let fontSize = Math.floor(radius * 0.44 * fontScale);
    if (label.length >= 6) {
      fontSize = Math.floor(fontSize * 0.82);
    } else if (label.length >= 4) {
      fontSize = Math.floor(fontSize * 0.9);
    }
    ctx.font = `700 ${Math.max(minFontSize, fontSize)}px sans-serif`;
    ctx.fillText(label, x, y);
    ctx.restore();
  };

  try {
    setSquadStatus('이미지 생성 중...');
    const canvas = document.createElement('canvas');
    const width = 1080;
    const height = 1440;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas context를 생성할 수 없습니다.');
    }

    try {
      const pitchImage = await loadImage('./pitch.jpg');
      ctx.drawImage(pitchImage, 0, 0, width, height);
    } catch (imageError) {
      console.error(imageError);
      ctx.fillStyle = '#2b7c3f';
      ctx.fillRect(0, 0, width, height);
    }

    const meta = getMatchMeta();
    const leftText = `${meta.matchTitle} (${formatDateForHeader(meta.matchDate)})`;
    const rightText = `${quarter.name} | ${quarter.formation}`;

    const drawHeaderBox = (x, y, w, h, text, align) => {
      ctx.save();
      ctx.fillStyle = 'rgba(0,0,0,0.30)';
      ctx.fillRect(x, y, w, h);
      ctx.beginPath();
      ctx.rect(x + 14, y, w - 28, h);
      ctx.clip();
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 32px sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = align;
      const textX = align === 'right' ? x + w - 18 : x + 18;
      ctx.fillText(text, textX, y + h / 2);
      ctx.restore();
    };

    const pad = 24;
    const boxH = 70;
    ctx.font = '700 32px sans-serif';
    const rightDesiredW = Math.max(250, Math.ceil(ctx.measureText(rightText).width + 40));
    const rightW = Math.min(420, rightDesiredW);
    const gap = 18;
    const leftMaxW = width - (pad * 2) - rightW - gap;
    const leftDesiredW = Math.max(320, Math.ceil(ctx.measureText(leftText).width + 40));
    const leftW = Math.max(220, Math.min(leftMaxW, leftDesiredW));
    const rightX = width - pad - rightW;

    drawHeaderBox(pad, pad, leftW, boxH, leftText, 'left');
    drawHeaderBox(rightX, pad, rightW, boxH, rightText, 'right');

    const radius = Math.round(width * 0.054);
    slots.forEach((slot) => {
      const x = (slot.x / 100) * width;
      const y = (slot.y / 100) * height;
      const playerId = quarter.assignments[slot.id];
      const player = state.players.find((p) => p.id === playerId);
      const role = slot.role || 'MF';
      const label = player ? player.name : slot.role;
      drawSlot(ctx, x, y, radius, label, roleFill[role] || roleFill.MF, !player);

      const backupPlayerId = quarter.backups[slot.id];
      const backupPlayer = state.players.find((p) => p.id === backupPlayerId);
      if (backupPlayer) {
        const backupX = x + Math.round(radius * 1.05);
        const backupY = y - Math.round(radius * 0.85);
        const backupRadius = Math.max(16, Math.round(radius * 0.65));
        drawSlot(
          ctx,
          backupX,
          backupY,
          backupRadius,
          backupPlayer.name,
          roleFillTransparent[role] || roleFillTransparent.MF,
          false,
          8,
          1.4
        );
      }
    });

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    const sanitizeFilePart = (text) => String(text || '').replace(/[\\/:*?"<>|]/g, '-').trim();
    const formatDateForFileName = (dateText) => {
      const value = String(dateText || '').trim();
      const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (!match) {
        return sanitizeFilePart(value);
      }
      return `${match[1].slice(2)}.${match[2]}.${match[3]}`;
    };
    const teamPart = sanitizeFilePart(meta.team || '우리팀');
    const datePart = formatDateForFileName(meta.matchDate || getTodayDateString());
    const quarterPart = sanitizeFilePart(quarter.name);
    const formationPart = sanitizeFilePart(quarter.formation);
    link.download = `(${teamPart}) ${datePart}_${quarterPart}_${formationPart}.png`;
    link.click();
    setSquadStatus(`${quarter.name} 스쿼드 이미지 다운로드 완료`);
  } catch (error) {
    console.error(error);
    setSquadStatus('스쿼드 이미지 생성에 실패했습니다.', true);
  }
}

function addQuarter() {
  const nextIndex = state.quarters.length + 1;
  const quarter = createQuarter(nextIndex);
  state.quarters.push(quarter);
  state.activeQuarterId = quarter.id;
  state.selectedSlotId = null;
  state.selectedPlayerId = null;
  setSquadStatus(`${quarter.name} 생성 완료`);
  render();
}

function removeQuarter(quarterId) {
  const currentIndex = state.quarters.findIndex((q) => q.id === quarterId);
  if (currentIndex === -1) {
    return;
  }
  const removedQuarter = state.quarters[currentIndex];
  state.quarters = state.quarters.filter((q) => q.id !== quarterId);
  if (state.activeQuarterId === quarterId) {
    const fallback = state.quarters[Math.max(0, currentIndex - 1)] || state.quarters[0] || null;
    state.activeQuarterId = fallback ? fallback.id : null;
  }
  state.selectedSlotId = null;
  state.selectedPlayerId = null;
  setSquadStatus(`${removedQuarter.name} 삭제 완료`);
  render();
}

function copySquadToCurrent() {
  const source = getQuarter();
  ensureQuarterSlotMaps(source);
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
  target.backups = { ...source.backups };
  state.selectedSlotId = null;
  state.selectedPlayerId = null;
  setSquadStatus(`${source.name} 스쿼드를 ${target.name}에 복사했습니다.`);
  render();
}

function resetCurrentQuarter() {
  const quarter = getQuarter();
  if (!quarter) {
    return;
  }
  if (quarter.locked) {
    setSquadStatus('잠금 상태에서는 초기화할 수 없습니다.', true);
    return;
  }
  const ok = window.confirm(`${quarter.name} 선수 배치를 초기화할까요?`);
  if (!ok) {
    return;
  }
  ensureQuarterSlotMaps(quarter);
  Object.keys(quarter.assignments).forEach((slotId) => {
    quarter.assignments[slotId] = null;
  });
  Object.keys(quarter.backups || {}).forEach((slotId) => {
    quarter.backups[slotId] = null;
  });
  state.selectedSlotId = null;
  state.selectedPlayerId = null;
  setSquadStatus(`${quarter.name} 배치 초기화 완료`);
  render();
}

function bindEvents() {
  el.ocrBtn.addEventListener('click', readAttendFromImage);
  el.imageInput.addEventListener('change', () => {
    updateOcrButtonState();
    if (el.imageInput.files?.[0]) {
      setOcrStatus('이미지 업로드 완료');
    } else {
      setOcrStatus('대기 중');
    }
  });
  el.addPlayerConfirm.addEventListener('click', () => {
    const added = addMercenary();
    if (added) {
      closePlayerModal();
    }
  });
  el.addPlayerName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const added = addMercenary();
      if (added) {
        closePlayerModal();
      }
    }
  });
  el.resetPlayers.addEventListener('click', resetPlayersList);
  el.resetSession.addEventListener('click', resetSession);
  el.addQuarter.addEventListener('click', addQuarter);
  el.resetQuarter.addEventListener('click', resetCurrentQuarter);
  el.formationSelect.addEventListener('change', changeFormation);
  el.lockToggle.addEventListener('click', toggleLock);
  el.captureBtn.addEventListener('click', captureCurrentQuarter);
  el.copyFrom.addEventListener('change', (event) => {
    state.copySourceId = event.target.value || null;
    const target = state.quarters.find((q) => q.id === state.copySourceId);
    el.copyBtn.disabled = !target || target.locked;
  });
  el.copyBtn.addEventListener('click', copySquadToCurrent);

  el.modalCancel.addEventListener('click', closePlayerModal);
  el.playerModal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      closePlayerModal();
    }
  });
  el.modalEdit.addEventListener('click', () => {
    if (modalState.type !== 'player') {
      return;
    }
    const player = state.players.find((p) => p.id === modalState.targetId);
    if (!player) {
      closePlayerModal();
      return;
    }
    const nextName = window.prompt('수정할 이름을 입력해 주세요.', player.name);
    if (nextName === null) {
      return;
    }
    renamePlayer(player.id, nextName);
    closePlayerModal();
  });
  el.modalToggleType.addEventListener('click', () => {
    if (modalState.type !== 'player') {
      return;
    }
    const changed = togglePlayerType(modalState.targetId);
    if (changed) {
      closePlayerModal();
    }
  });
  el.modalDelete.addEventListener('click', () => {
    if (modalState.type === 'quarter-delete') {
      const quarterId = modalState.targetId;
      closePlayerModal();
      removeQuarter(quarterId);
      return;
    }
    if (modalState.type === 'add-player') {
      closePlayerModal();
      return;
    }
    if (modalState.type !== 'player') {
      closePlayerModal();
      return;
    }
    const player = state.players.find((p) => p.id === modalState.targetId);
    if (!player) {
      closePlayerModal();
      return;
    }
    const ok = window.confirm(`${player.name} 선수를 삭제할까요?`);
    if (ok) {
      removePlayer(player.id);
    }
    closePlayerModal();
  });
}

function init() {
  updateOcrButtonState();
  const loaded = loadState();
  if (!loaded) {
    if (el.matchDate && !el.matchDate.value) {
      el.matchDate.value = getTodayDateString();
    }
    for (let i = 1; i <= 4; i += 1) {
      state.quarters.push(createQuarter(i));
    }
    state.activeQuarterId = state.quarters[0].id;
  }
  state.isHydrating = false;
  bindEvents();
  render();
}

init();
