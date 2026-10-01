<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- SortableJS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
<!-- Flatpickr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<link rel="stylesheet" type="text/css" href="https://npmcdn.com/flatpickr/dist/themes/dark.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/style.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/index.js"></script>
<script src="https://npmcdn.com/flatpickr/dist/l10n/pt.js"></script>

<style>
    /* Estilos Base */
    #Subheader { display: none !important; }
    #Content { padding-top: 0 !important; }

    .glass-panel { background: rgba(30, 32, 45, 0.5); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4); margin-bottom: 2rem; border-radius: 1.5rem; font-family: ui-sans-serif, system-ui, sans-serif; }
    .campanha-body { display: none; }
    .campanha-body.open { display: block; animation: fadeIn 0.4s ease-in-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    .seta-icon { transition: transform 0.3s ease; }
    .seta-icon.open { transform: rotate(180deg); }
    .text-destaque { color: #32bbce !important; }

    .titulo-secao { font-size: 0.95rem !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.1em !important; color: #32bbce !important; padding: 8px 24px 8px 16px !important; border-left: 4px solid #32bbce !important; background: linear-gradient(90deg, rgba(50, 187, 206, 0.15) 0%, rgba(50, 187, 206, 0) 100%) !important; border-radius: 0 12px 12px 0 !important; margin-bottom: 1rem !important; display: inline-block; }

    .drag-handle { cursor: grab; padding: 4px; color: #6b7280; transition: color 0.2s; }
    .drag-handle:active { cursor: grabbing; }
    .drag-handle:hover { color: #32bbce; }

    /* Filtro de Mês em Destaque */
    .input-mes-destaque { background-color: rgba(50, 187, 206, 0.15) !important; border: 1px solid rgba(50, 187, 206, 0.5) !important; color: #32bbce !important; font-size: 1.15rem !important; font-weight: 800 !important; padding: 0 20px !important; border-radius: 9999px !important; outline: none !important; box-shadow: 0 0 15px rgba(50, 187, 206, 0.2) !important; transition: all 0.3s ease !important; text-align: center; letter-spacing: 1px; height: 48px !important; display: inline-flex; align-items: center; justify-content: center; margin: 0 !important; cursor: pointer !important; width: 240px; text-transform: uppercase !important; }
    .input-mes-destaque:hover, .input-mes-destaque:focus { background-color: rgba(50, 187, 206, 0.25) !important; box-shadow: 0 0 25px rgba(50, 187, 206, 0.4) !important; border-color: #32bbce !important; }
    
    .btn-limpar { background-color: rgba(255, 255, 255, 0.05) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; color: #9ca3af !important; border-radius: 9999px !important; padding: 0 18px !important; font-size: 0.8rem !important; font-weight: 600 !important; transition: all 0.2s ease !important; cursor: pointer !important; height: 48px !important; display: inline-flex; align-items: center; justify-content: center; margin: 0 !important; }
    .btn-limpar:hover { background-color: rgba(239, 68, 68, 0.15) !important; color: #f87171 !important; border-color: rgba(239, 68, 68, 0.3) !important; }

    .flatpickr-calendar.hasPlugins { background: #15172d !important; border: 1px solid rgba(50, 187, 206, 0.2) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.8) !important; padding: 10px !important; border-radius: 16px !important; width: 320px !important; }
    .flatpickr-months .flatpickr-month { color: #32bbce !important; fill: #32bbce !important; }
    .flatpickr-current-month .numInputWrapper span.arrowUp:after { border-bottom-color: #32bbce !important; }
    .flatpickr-current-month .numInputWrapper span.arrowDown:after { border-top-color: #32bbce !important; }
    .flatpickr-monthSelect-month { color: #32bbce !important; border-radius: 8px !important; margin: 4px !important; font-weight: 500 !important; font-size: 1.05rem !important; padding: 12px 0 !important; transition: all 0.2s; }
    .flatpickr-monthSelect-month:hover { background: rgba(50, 187, 206, 0.1) !important; color: #fff !important; }
    .flatpickr-monthSelect-month.selected { background: #32bbce !important; border-color: #32bbce !important; color: #15172d !important; font-weight: bold !important; box-shadow: 0 0 15px rgba(50, 187, 206, 0.4) !important; }

    .input-dark { background-color: rgba(0,0,0,0.3) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #d1d5db !important; outline: none !important; box-shadow: none !important; border-radius: 8px !important; }
    .input-dark:focus { border-color: #32bbce !important; }
    .btn-padrao { background-color: #1c374c !important; background-image: none !important; color: #32bbce !important; border: none !important; transition: all 0.3s ease !important; box-shadow: none !important; border-radius: 8px !important; cursor: pointer !important; font-weight: 600 !important; }
    .btn-padrao:hover { background-color: #32bbce !important; color: #111219 !important; }
    .btn-padrao:disabled { opacity: 0.5; cursor: not-allowed !important; }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 9999; }

    /* Botões Interativos de Status */
    .btn-status { font-family: ui-sans-serif, system-ui, sans-serif !important; background-image: none !important; box-shadow: none !important; cursor: pointer !important; font-weight: 500 !important; border-radius: 9999px !important; padding: 6px 14px !important; font-size: 0.7rem !important; transition: all 0.2s ease !important; }
    .btn-aprovado { background-color: rgba(34, 197, 94, 0.12) !important; color: #4ade80 !important; border: 1px solid rgba(34, 197, 94, 0.3) !important; }
    .btn-aprovado:hover { background-color: rgba(34, 197, 94, 0.25) !important; border-color: rgba(34, 197, 94, 0.6) !important; }
    .btn-reprovado { background-color: rgba(239, 68, 68, 0.12) !important; color: #f87171 !important; border: 1px solid rgba(239, 68, 68, 0.3) !important; }
    .btn-reprovado:hover { background-color: rgba(239, 68, 68, 0.25) !important; border-color: rgba(239, 68, 68, 0.6) !important; }
    .btn-alteracao { background-color: rgba(59, 130, 246, 0.12) !important; color: #60a5fa !important; border: 1px solid rgba(59, 130, 246, 0.3) !important; }
    .btn-alteracao:hover { background-color: rgba(59, 130, 246, 0.25) !important; border-color: rgba(59, 130, 246, 0.6) !important; }
    .btn-pendente { background-color: rgba(234, 179, 8, 0.12) !important; color: #facc15 !important; border: 1px solid rgba(234, 179, 8, 0.3) !important; }
    .btn-pendente:hover { background-color: rgba(234, 179, 8, 0.25) !important; border-color: rgba(234, 179, 8, 0.6) !important; }
    .btn-concluido { background-color: rgba(34, 197, 94, 0.15) !important; color: #4ade80 !important; border: 1px solid rgba(34, 197, 94, 0.4) !important; }
    .btn-concluido:hover { background-color: rgba(34, 197, 94, 0.3) !important; border-color: rgba(34, 197, 94, 0.7) !important; }
    .badge-neutro { background-color: rgba(255, 255, 255, 0.04) !important; color: #9ca3af !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; font-weight: 600 !important; border-radius: 9999px !important; padding: 6px 14px !important; font-size: 0.7rem !important; display: inline-flex; align-items: center; justify-content: center; }

    @keyframes pulse-trabalhando { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); } 70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); } 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } }
    
    .badge-tarefa-trabalhando { background-color: rgba(34, 197, 94, 0.15) !important; color: #4ade80 !important; border: 1px solid rgba(34, 197, 94, 0.4) !important; border-radius: 9999px !important; padding: 4px 12px !important; font-size: 0.7rem !important; font-weight: 600 !important; cursor: pointer !important; animation: pulse-trabalhando 1.5s infinite; display: inline-flex; align-items: center; gap: 6px; }
    .badge-tarefa-trabalhando::before { content: ''; display: inline-block; width: 6px; height: 6px; background-color: #4ade80; border-radius: 50%; }
    .badge-tarefa-concluido { background-color: rgba(34, 197, 94, 0.12) !important; color: #4ade80 !important; border: 1px solid rgba(34, 197, 94, 0.3) !important; border-radius: 9999px !important; padding: 4px 12px !important; font-size: 0.7rem !important; font-weight: 500 !important; cursor: pointer !important; transition: all 0.2s ease !important; background-image: none !important; box-shadow: none !important; }
    .badge-tarefa-concluido:hover { background-color: rgba(34, 197, 94, 0.25) !important; border-color: rgba(34, 197, 94, 0.6) !important; }
    .badge-tarefa-afazer { background-color: rgba(255, 255, 255, 0.04) !important; color: #9ca3af !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; border-radius: 9999px !important; padding: 4px 12px !important; font-size: 0.7rem !important; font-weight: 500 !important; cursor: pointer !important; transition: all 0.2s ease !important; background-image: none !important; box-shadow: none !important; opacity: 0.75; }
    .badge-tarefa-afazer:hover { background-color: rgba(255, 255, 255, 0.08) !important; color: #d1d5db !important; opacity: 1; }

    .progress-bar-container { width: 100%; background-color: rgba(255, 255, 255, 0.06); border-radius: 9999px; height: 20px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08); position: relative; }
    .progress-bar-fill { height: 100%; background: linear-gradient(90deg, #1c374c, #32bbce, #4ade80); border-radius: 9999px; transition: width 0.4s ease-in-out; }
    .btn-action-icon { background-color: rgba(255, 255, 255, 0.04) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; border-radius: 10px !important; padding: 6px !important; transition: all 0.2s ease !important; cursor: pointer !important; display: inline-flex; align-items: center; justify-content: center; }
    .btn-action-icon:hover { background-color: rgba(255, 255, 255, 0.1) !important; border-color: rgba(255, 255, 255, 0.2) !important; transform: translateY(-1px); }
    
    @keyframes pulse-red { 0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); } 70% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); } 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
    .btn-timer-active { background-color: rgba(239, 68, 68, 0.15) !important; border-color: rgba(239, 68, 68, 0.4) !important; color: #f87171 !important; animation: pulse-red 1.5s infinite; }
    .btn-timer-active:hover { background-color: rgba(239, 68, 68, 0.25) !important; }
    .btn-timer-play { background-color: rgba(34, 197, 94, 0.1) !important; border-color: rgba(34, 197, 94, 0.2) !important; color: #4ade80 !important; }
    .btn-timer-play:hover { background-color: rgba(34, 197, 94, 0.2) !important; border-color: rgba(34, 197, 94, 0.4) !important; }

    /* Área de Edição Rica (Ações e Mensuração) */
    .editor-ricochete { background-color: rgba(0,0,0,0.4) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #d1d5db !important; border-radius: 8px; padding: 16px; min-height: 200px; max-height: 600px; overflow-y: auto; outline: none; line-height: 1.6; font-size: 0.95rem; }
    .editor-ricochete:focus { border-color: #32bbce !important; }
    .editor-ricochete img { max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0; border: 1px solid rgba(255,255,255,0.1); }
    
    .view-mensuracao { color: #d1d5db; line-height: 1.6; font-size: 0.95rem; }
    .view-mensuracao img { max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0; border: 1px solid rgba(255,255,255,0.1); }
    
    input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
    input[type="color"]::-webkit-color-swatch { border: none; border-radius: 4px; }
</style>

<div class="max-w-5xl mx-auto mb-8 mt-6 flex flex-col md:flex-row justify-between items-center gap-6">
    <div>
        <h2 class="text-xl font-bold text-gray-500 uppercase tracking-widest mb-0">PAINEL DE CAMPANHAS</h2>
    </div>
    
    <div class="flex flex-wrap items-center justify-center md:justify-end gap-5 w-full md:w-auto">
        <div class="flex items-center gap-3 bg-black/20 pl-6 pr-2 py-2 rounded-full border border-white/5 h-[64px]">
            <span class="text-sm text-gray-400 font-bold tracking-wider pt-0.5">MÊS:</span>
            <input type="hidden" id="filtro-mes-valor">
            <input type="text" id="filtro-mes-visual" class="input-mes-destaque" placeholder="Selecione o mês..." readonly>
            <button type="button" onclick="limparFiltroMes()" class="btn-limpar" title="Limpar Filtro">Limpar</button>
        </div>
        <button type="button" id="btn-nova-campanha" onclick="abrirModalNovaCampanha()" class="btn-padrao px-5 text-xs font-bold items-center justify-center gap-2 cursor-pointer shadow-lg h-[44px]" style="display: none;">
            <span>➕ Nova Campanha</span>
        </button>
    </div>
</div>

<div id="campanhas-container" class="max-w-5xl mx-auto">
    <p class="text-center text-gray-500 mt-10 animate-pulse">Carregando painel...</p>
</div>

<div id="modal-container"></div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> 
<script>
    const supabaseUrl = 'https://vambtueahvzxdtsrcpth.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbWJ0dWVhaHZ6eGR0c3JjcHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MTM1MzcsImV4cCI6MjEwNjE4OTUzN30.3BCIrXjxKnON0icFc6EjBRta8ceKncknF5eGWZp6YWI';
    const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
    
    // ATENÇÃO: TROQUE ESTE ID PELO ID CORRETO DO CLIENTE NESTA PÁGINA
    const idClienteFiltro = 'bd5794a6-9710-411f-9f8b-c2cd0032f453'; 

    const iconeEditar = `<svg class="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`;
    const iconeExcluir = `<svg class="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`;
    const iconePlay = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>`;
    const iconeStop = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd"></path></svg>`;

    const isWordPressAdmin = document.body.classList.contains('logged-in');

    if (isWordPressAdmin) {
        const btnCriar = document.getElementById('btn-nova-campanha');
        if(btnCriar) btnCriar.style.display = 'inline-flex';
    }

    window.appData = { campanhas: {}, acoes: {}, tarefas: {} };
    let flatpickrMes;

    function inicializarFlatpickr() {
        const agora = new Date();
        const dataVigente = `${agora.getFullYear()}-${String(agora.getMonth() + 1).padStart(2, '0')}`;

        flatpickrMes = flatpickr("#filtro-mes-visual", {
            locale: "pt", theme: "dark",
            plugins: [new monthSelectPlugin({ shorthand: false, dateFormat: "Y-m", altFormat: "F \\d\\e Y" })],
            defaultDate: dataVigente,
            onChange: function(selectedDates, dateStr, instance) {
                document.getElementById('filtro-mes-valor').value = dateStr; 
                if(selectedDates[0]) {
                    document.getElementById('filtro-mes-visual').value = `${instance.l10n.months.longhand[selectedDates[0].getMonth()]} de ${selectedDates[0].getFullYear()}`;
                }
                carregarCampanhas();
            },
            onReady: function(selectedDates, dateStr, instance) {
                document.getElementById('filtro-mes-valor').value = dateStr;
                if(selectedDates[0]) {
                    document.getElementById('filtro-mes-visual').value = `${instance.l10n.months.longhand[selectedDates[0].getMonth()]} de ${selectedDates[0].getFullYear()}`;
                }
                carregarCampanhas();
            }
        });
    }

    function toggleCampanha(id) {
        document.getElementById('body-' + id).classList.toggle('open');
        document.getElementById('seta-' + id).classList.toggle('open');
    }

    function limparFiltroMes() {
        if (flatpickrMes) {
            flatpickrMes.clear();
            document.getElementById('filtro-mes-visual').value = '';
            document.getElementById('filtro-mes-valor').value = '';
        }
        carregarCampanhas();
    }

    async function salvarNovaOrdem(tabela, idsArray) {
        if (!idsArray || idsArray.length === 0) return;
        const updates = idsArray.map((id, index) => supabaseClient.from(tabela).update({ ordem: index }).eq('id', id));
        await Promise.all(updates);
    }

    function inicializarDragAndDrop() {
        if (!isWordPressAdmin) return; 
        
        const containerCampanhas = document.getElementById('campanhas-container');
        if (containerCampanhas && !containerCampanhas.sortableInstance) { 
            containerCampanhas.sortableInstance = Sortable.create(containerCampanhas, { 
                handle: '.drag-handle', animation: 150,
                onEnd: (evt) => {
                    const ids = Array.from(evt.to.children).map(el => el.getAttribute('data-id')).filter(Boolean);
                    salvarNovaOrdem('campanhas', ids);
                }
            }); 
        }

        document.querySelectorAll('.acoes-container').forEach(el => { 
            if (!el.sortableInstance) el.sortableInstance = Sortable.create(el, { 
                handle: '.drag-handle', animation: 150,
                onEnd: (evt) => {
                    const ids = Array.from(evt.to.children).map(item => item.getAttribute('data-id')).filter(Boolean);
                    salvarNovaOrdem('acoes', ids);
                }
            }); 
        });

        document.querySelectorAll('.tarefas-container').forEach(el => { 
            if (!el.sortableInstance) el.sortableInstance = Sortable.create(el, { 
                handle: '.drag-handle', animation: 150,
                onEnd: (evt) => {
                    const ids = Array.from(evt.to.children).map(item => item.getAttribute('data-id')).filter(Boolean);
                    salvarNovaOrdem('tarefas', ids);
                }
            }); 
        });
    }

    function abrirModalNovaCampanha() {
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="glass-panel p-6 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl" style="margin-bottom:0;">
                    <h3 class="text-white font-bold text-lg mb-2">Criar Nova Campanha</h3>
                    <p class="text-gray-400 text-sm mb-3">Insira o nome e o mês de referência:</p>
                    <input type="text" id="input-nova-campanha" placeholder="Ex: Campanha de Páscoa" class="input-dark w-full px-3 py-2 text-sm mb-3">
                    <label class="text-xs text-gray-400 block mb-1">Mês de Referência:</label>
                    <input type="date" id="input-novo-mes" class="input-dark w-full px-3 py-2 text-sm mb-4">
                    <div class="flex justify-end gap-3">
                        <button type="button" onclick="fecharModal()" class="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancelar</button>
                        <button type="button" onclick="salvarNovaCampanha()" class="btn-padrao px-5 py-2 text-sm rounded-xl font-semibold">Criar Campanha</button>
                    </div>
                </div>
            </div>
        `;
    }

    async function salvarNovaCampanha() {
        const nomeCampanha = document.getElementById('input-nova-campanha').value.trim();
        const mesCampanha = document.getElementById('input-novo-mes').value;
        if (!nomeCampanha) return alert("Digite o nome da campanha.");
        fecharModal();
        const dadosInsert = { 
            cliente_id: idClienteFiltro, 
            nome_campanha: nomeCampanha, 
            cor_cabecalho: '#5a5a5a', 
            foto_capa: 'https://murilo.app.br/wp-content/uploads/2026/09/capadefaut.png' 
        };
        if (mesCampanha) dadosInsert.mes_referencia = mesCampanha;
        const { error } = await supabaseClient.from('campanhas').insert([dadosInsert]);
        if (error) { console.error(error); alert("Erro ao criar nova campanha."); } 
        else { carregarCampanhas(false); }
    }

    async function excluirCampanha(campanhaId) {
        if (!confirm("Tem certeza que deseja excluir esta campanha inteira? Todas as ações e tarefas vinculadas também serão removidas.")) return;
        const { error } = await supabaseClient.from('campanhas').delete().eq('id', campanhaId);
        if (error) { console.error(error); alert("Erro ao excluir campanha."); } 
        else { carregarCampanhas(false); }
    }

    function abrirModalEditarCampanha(campanhaId) {
        const camp = window.appData.campanhas[campanhaId];
        const nomeAtual = camp.nome_campanha || '';
        const mesAtual = camp.mes_referencia ? camp.mes_referencia.split('T')[0] : '';
        const corAtual = camp.cor_cabecalho || '#5a5a5a';
        const capaAtual = camp.foto_capa || '';

        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="glass-panel p-6 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl" style="margin-bottom:0;">
                    <h3 class="text-white font-bold text-lg mb-4">Editar Campanha</h3>
                    <div class="mb-3">
                        <label class="text-xs text-gray-400 block mb-1">Nome da Campanha:</label>
                        <input type="text" id="input-edicao-campanha" value="${nomeAtual}" class="input-dark w-full px-3 py-2 text-sm">
                    </div>
                    <div class="mb-3">
                        <label class="text-xs text-gray-400 block mb-1">Mês de Referência:</label>
                        <input type="date" id="input-edicao-mes" value="${mesAtual}" class="input-dark w-full px-3 py-2 text-sm">
                    </div>
                    <div class="mb-3">
                        <label class="text-xs text-gray-400 block mb-1">Cor do Cabeçalho:</label>
                        <div class="flex items-center gap-3">
                            <input type="color" id="input-edicao-cor-picker" value="${corAtual}" oninput="document.getElementById('input-edicao-cor').value = this.value" class="w-12 h-10 bg-transparent rounded cursor-pointer border border-white/10">
                            <input type="text" id="input-edicao-cor" value="${corAtual}" oninput="document.getElementById('input-edicao-cor-picker').value = this.value" class="input-dark flex-1 px-3 py-2 text-sm font-mono">
                        </div>
                    </div>
                    <div class="mb-6">
                        <label class="text-xs text-gray-400 block mb-1">URL da Foto de Capa:</label>
                        <input type="text" id="input-edicao-capa" value="${capaAtual}" class="input-dark w-full px-3 py-2 text-sm" placeholder="URL da imagem">
                    </div>
                    <div class="flex justify-end gap-3">
                        <button type="button" onclick="fecharModal()" class="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancelar</button>
                        <button type="button" onclick="salvarEdicaoCampanha('${campanhaId}')" class="btn-padrao px-5 py-2 text-sm rounded-xl font-semibold">Salvar</button>
                    </div>
                </div>
            </div>
        `;
    }

    async function salvarEdicaoCampanha(campanhaId) {
        const novoNome = document.getElementById('input-edicao-campanha').value.trim();
        const novoMes = document.getElementById('input-edicao-mes').value;
        const novaCor = document.getElementById('input-edicao-cor').value.trim();
        const novaCapa = document.getElementById('input-edicao-capa').value.trim();

        if (!novoNome) return alert("O nome não pode estar vazio.");
        fecharModal();
        const { error } = await supabaseClient.from('campanhas').update({ 
            nome_campanha: novoNome, 
            mes_referencia: novoMes || null,
            cor_cabecalho: novaCor,
            foto_capa: novaCapa
        }).eq('id', campanhaId);
        
        if (error) alert("Erro ao atualizar campanha.");
        else carregarCampanhas(true);
    }

    async function salvarDorOportunidade(campanhaId) {
        const inputElement = document.getElementById(`input-dor-${campanhaId}`);
        const botaoElement = document.getElementById(`btn-dor-${campanhaId}`);
        const novoTexto = inputElement.value.trim();
        if (!novoTexto) return alert("Digite algo antes de enviar.");
        botaoElement.innerText = "Enviando...";
        botaoElement.disabled = true;
        const { error } = await supabaseClient.from('campanhas').update({ dor_oportunidade: novoTexto }).eq('id', campanhaId);
        if (error) { alert("Erro ao salvar."); botaoElement.innerText = "Enviar"; botaoElement.disabled = false; } 
        else carregarCampanhas(true);
    }

    async function criarAcao(campanhaId) {
        const inputElement = document.getElementById(`input-acao-${campanhaId}`);
        const botaoElement = document.getElementById(`btn-acao-${campanhaId}`);
        const tituloAcao = inputElement.value.trim();
        if (!tituloAcao) return alert("Digite o título da ação.");
        botaoElement.innerText = "Criando...";
        botaoElement.disabled = true;
        const { error } = await supabaseClient.from('acoes').insert([{ campanha_id: campanhaId, titulo_acao: tituloAcao, status_aprovacao: 'Pendente' }]);
        if (error) { alert("Erro ao criar ação."); botaoElement.innerText = "Criar Ação"; botaoElement.disabled = false; } 
        else carregarCampanhas(true);
    }

    async function criarTarefa(campanhaId) {
        const inputNome = document.getElementById(`input-tarefa-nome-${campanhaId}`);
        const inputPrazo = document.getElementById(`input-tarefa-prazo-${campanhaId}`);
        const botaoElement = document.getElementById(`btn-tarefa-${campanhaId}`);
        const nomeTarefa = inputNome.value.trim();
        const prazo = inputPrazo.value;
        if (!nomeTarefa) return alert("Digite o nome da tarefa.");
        botaoElement.innerText = "Enviando...";
        botaoElement.disabled = true;
        const { error } = await supabaseClient.from('tarefas').insert([{ campanha_id: campanhaId, nome_tarefa: nomeTarefa, prazo: prazo || null, status_tarefa: 'À fazer' }]);
        if (error) { console.error(error); alert("Erro ao criar tarefa."); botaoElement.innerText = "Enviar Tarefa"; botaoElement.disabled = false; } 
        else carregarCampanhas(true);
    }

    async function toggleStatusTarefa(tarefaId) {
        const t = window.appData.tarefas[tarefaId];
        let novoStatus = 'Concluído';
        if (t.status_tarefa === 'Concluído') novoStatus = 'À fazer';
        const { error } = await supabaseClient.from('tarefas').update({ status_tarefa: novoStatus }).eq('id', tarefaId);
        if (error) alert("Erro ao alterar status da tarefa.");
        else carregarCampanhas(true);
    }

    async function atualizarStatusAcao(acaoId, novoStatus, textoAlteracao = null) {
        const dadosUpdate = { status_aprovacao: novoStatus };
        if (textoAlteracao !== null) dadosUpdate.texto_alteracao = textoAlteracao;
        const { error } = await supabaseClient.from('acoes').update(dadosUpdate).eq('id', acaoId);
        if (error) alert("Erro ao atualizar status.");
        else carregarCampanhas(true);
    }

    async function excluirAcao(acaoId) {
        if (!confirm("Deseja excluir esta ação estratégica?")) return;
        const { error } = await supabaseClient.from('acoes').delete().eq('id', acaoId);
        if (error) alert("Erro ao excluir ação.");
        else carregarCampanhas(true);
    }

    async function excluirTarefa(tarefaId) {
        if (!confirm("Deseja excluir esta tarefa?")) return;
        const { error } = await supabaseClient.from('tarefas').delete().eq('id', tarefaId);
        if (error) alert("Erro ao excluir tarefa.");
        else carregarCampanhas(true);
    }

    function abrirModalAlteracao(acaoId) {
        const acao = window.appData.acoes[acaoId];
        const textoAtual = acao.texto_alteracao || '';
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="glass-panel p-6 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl" style="margin-bottom:0;">
                    <h3 class="text-white font-bold text-lg mb-2">Solicitar Alteração</h3>
                    <p class="text-gray-400 text-sm mb-4">Descreva detalhadamente o que precisa ser alterado:</p>
                    <textarea id="input-texto-alteracao" class="input-dark w-full h-32 p-3 text-sm rounded-xl mb-4" placeholder="Digite as alterações..."></textarea>
                    <div class="flex justify-end gap-3">
                        <button type="button" onclick="fecharModal()" class="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancelar</button>
                        <button type="button" onclick="salvarAlteracao('${acaoId}')" class="btn-padrao px-5 py-2 text-sm rounded-xl font-semibold">Salvar Alteração</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('input-texto-alteracao').value = textoAtual;
    }

    function abrirModalEdicaoAcao(acaoId) {
        const acao = window.appData.acoes[acaoId];
        const decodedTitle = acao.titulo_acao || '';
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="glass-panel p-6 rounded-2xl w-full max-w-xl border border-white/10 shadow-2xl" style="margin-bottom:0;">
                    <h3 class="text-white font-bold text-lg mb-2">Editar Ação Estratégica</h3>
                    <div class="flex flex-wrap items-center gap-2 mb-3 bg-black/30 p-2 rounded-lg border border-white/5">
                        <button type="button" onclick="executarFormatacao('bold')" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded font-bold text-xs"><b>B</b></button>
                        <button type="button" onclick="executarFormatacao('italic')" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded italic text-xs"><i>I</i></button>
                        <button type="button" onclick="executarFormatacao('underline')" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded underline text-xs"><u>U</u></button>
                        
                        <div class="h-4 w-px bg-white/20 mx-1"></div>
                        
                        <div class="flex items-center gap-1" title="Cor do Texto">
                            <span class="text-xs text-gray-400 font-bold">A</span>
                            <input type="color" onchange="executarFormatacao('foreColor', this.value)" class="w-5 h-5 p-0 border-0 bg-transparent cursor-pointer rounded">
                        </div>
                        <div class="flex items-center gap-1" title="Cor de Fundo do Texto">
                            <span class="text-xs text-black bg-gray-400 rounded px-1 font-bold">A</span>
                            <input type="color" onchange="executarFormatacao('hiliteColor', this.value)" class="w-5 h-5 p-0 border-0 bg-transparent cursor-pointer rounded">
                        </div>
                    </div>
                    <div id="editor-conteudo" class="editor-ricochete" contenteditable="true">${decodedTitle}</div>
                    <div class="flex justify-end gap-3 mt-4">
                        <button type="button" onclick="fecharModal()" class="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancelar</button>
                        <button type="button" onclick="salvarEdicaoAcao('${acaoId}')" class="btn-padrao px-5 py-2 text-sm rounded-xl font-semibold">Salvar</button>
                    </div>
                </div>
            </div>
        `;
    }

    function abrirModalEdicaoTarefa(tarefaId) {
        const t = window.appData.tarefas[tarefaId];
        const decodedNome = t.nome_tarefa || '';
        const prazoAtual = t.prazo || '';
        const decodedObs = t.observacao || '';
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="glass-panel p-6 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl" style="margin-bottom:0;">
                    <h3 class="text-white font-bold text-lg mb-2">Editar Tarefa</h3>
                    <div class="mb-3">
                        <label class="text-xs text-gray-400 block mb-1">Nome:</label>
                        <input type="text" id="edit-tarefa-nome" value="${decodedNome}" class="input-dark w-full px-3 py-2 text-sm">
                    </div>
                    <div class="mb-3">
                        <label class="text-xs text-gray-400 block mb-1">Prazo:</label>
                        <input type="date" id="edit-tarefa-prazo" value="${prazoAtual}" class="input-dark w-full px-3 py-2 text-sm">
                    </div>
                    <div class="mb-5">
                        <label class="text-xs text-gray-400 block mb-1">Observação:</label>
                        <textarea id="edit-tarefa-obs" class="input-dark w-full px-3 py-2 text-sm h-16" placeholder="Digite uma observação..."></textarea>
                    </div>
                    <div class="flex justify-end gap-3">
                        <button type="button" onclick="fecharModal()" class="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancelar</button>
                        <button type="button" onclick="salvarEdicaoTarefa('${tarefaId}')" class="btn-padrao px-5 py-2 text-sm rounded-xl font-semibold">Salvar</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('edit-tarefa-obs').value = decodedObs;
    }

    async function salvarEdicaoTarefa(tarefaId) {
        const novoNome = document.getElementById('edit-tarefa-nome').value.trim();
        const novoPrazo = document.getElementById('edit-tarefa-prazo').value;
        const novaObs = document.getElementById('edit-tarefa-obs').value.trim();
        if (!novoNome) return alert("O nome não pode estar vazio.");
        fecharModal();
        const { error } = await supabaseClient.from('tarefas').update({ nome_tarefa: novoNome, prazo: novoPrazo || null, observacao: novaObs || null }).eq('id', tarefaId);
        if (error) alert("Erro ao atualizar tarefa."); else carregarCampanhas(true);
    }

    function executarFormatacao(comando, valor = null) { 
        if (comando === 'hiliteColor' && !document.queryCommandSupported('hiliteColor')) {
            comando = 'backColor';
        }
        document.execCommand(comando, false, valor); 
    }
    
    function inserirImagemEditor() {
        const url = prompt("Cole o link (URL) da imagem que você subiu no WordPress:");
        if (url && url.trim() !== '') {
            document.execCommand('insertImage', false, url.trim());
        }
    }

    function fecharModal() { document.getElementById('modal-container').innerHTML = ''; }

    async function salvarAlteracao(acaoId) {
        const texto = document.getElementById('input-texto-alteracao').value.trim();
        fecharModal();
        await atualizarStatusAcao(acaoId, 'Alteração Solicitada', texto);
    }

    async function salvarEdicaoAcao(acaoId) {
        const novoTituloHtml = document.getElementById('editor-conteudo').innerHTML.trim();
        if (!novoTituloHtml) return alert("O título não pode estar vazio.");
        fecharModal();
        const { error } = await supabaseClient.from('acoes').update({ titulo_acao: novoTituloHtml }).eq('id', acaoId);
        if (error) alert("Erro ao salvar."); else carregarCampanhas(true);
    }

    // --- NOVA LÓGICA DO MODAL DE MENSURAÇÃO ---
    function abrirModalMensuracao(campanhaId) {
        const camp = window.appData.campanhas[campanhaId];
        const conteudoAtual = camp.mensuracao || '';
        const modalContainer = document.getElementById('modal-container');
        
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="glass-panel p-6 rounded-2xl w-full max-w-4xl border border-white/10 shadow-2xl" style="margin-bottom:0;">
                    <h3 class="text-white font-bold text-lg mb-4">Editar Mensuração / Resultados</h3>
                    
                    <div class="flex flex-wrap items-center gap-2 mb-3 bg-black/40 p-2 rounded-lg border border-white/5">
                        <button type="button" onclick="executarFormatacao('bold')" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded font-bold text-xs"><b>B</b></button>
                        <button type="button" onclick="executarFormatacao('italic')" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded italic text-xs"><i>I</i></button>
                        <button type="button" onclick="executarFormatacao('underline')" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded underline text-xs"><u>U</u></button>
                        
                        <div class="h-4 w-px bg-white/20 mx-1"></div>
                        
                        <div class="flex items-center gap-1" title="Cor do Texto">
                            <span class="text-xs text-gray-400 font-bold">A</span>
                            <input type="color" onchange="executarFormatacao('foreColor', this.value)" class="w-5 h-5 p-0 border-0 bg-transparent cursor-pointer rounded">
                        </div>
                        <div class="flex items-center gap-1" title="Cor de Fundo do Texto">
                            <span class="text-xs text-black bg-gray-400 rounded px-1 font-bold">A</span>
                            <input type="color" onchange="executarFormatacao('hiliteColor', this.value)" class="w-5 h-5 p-0 border-0 bg-transparent cursor-pointer rounded">
                        </div>

                        <div class="h-4 w-px bg-white/20 mx-1"></div>

                        <button type="button" onclick="inserirImagemEditor()" class="px-3 py-1 bg-white/5 hover:bg-white/10 text-[#32bbce] font-semibold rounded text-xs flex items-center gap-1">📷 Inserir Imagem (Link)</button>
                    </div>

                    <div id="editor-mensuracao-modal" class="editor-ricochete bg-black/30 border border-white/10 outline-none w-full text-sm text-gray-300 min-h-[250px]" contenteditable="true">${conteudoAtual}</div>
                    
                    <div class="flex justify-end gap-3 mt-5">
                        <button type="button" onclick="fecharModal()" class="px-4 py-2 text-sm text-gray-400 hover:text-white">Cancelar</button>
                        <button type="button" id="btn-salvar-mensuracao-modal" onclick="salvarModalMensuracao('${campanhaId}')" class="btn-padrao px-5 py-2 text-sm rounded-xl font-semibold">Salvar Resultados</button>
                    </div>
                </div>
            </div>
        `;
    }

    async function salvarModalMensuracao(campanhaId) {
        const editor = document.getElementById('editor-mensuracao-modal');
        const btn = document.getElementById('btn-salvar-mensuracao-modal');
        const htmlContent = editor.innerHTML.trim();
        
        btn.innerText = "Salvando...";
        btn.disabled = true;

        const { error } = await supabaseClient.from('campanhas').update({ mensuracao: htmlContent }).eq('id', campanhaId);
        
        if (error) {
            console.error(error);
            alert("Erro ao salvar resultados.");
            btn.innerText = "Salvar Resultados";
            btn.disabled = false;
        } else {
            fecharModal();
            carregarCampanhas(true);
        }
    }

    /* ==========================================
       Funções de Controle de Tempo e Alterações
       ========================================== */
       
    function abrirModalPlay(tarefaId) {
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = `
            <div class="modal-overlay">
                <div class="glass-panel p-6 rounded-2xl w-full max-w-sm border border-white/10 shadow-2xl text-center relative" style="margin-bottom:0;">
                    <button type="button" onclick="fecharModal()" class="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">✕</button>
                    <h3 class="text-white font-bold text-lg mb-2">Iniciar Tarefa</h3>
                    <p class="text-gray-400 text-sm mb-6">Essa tarefa é uma alteração pedida pelo cliente?</p>
                    <div class="flex justify-center gap-3">
                        <button type="button" onclick="confirmarPlay('${tarefaId}', false)" class="px-5 py-2 text-sm text-gray-300 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-colors">Não, iniciar normal</button>
                        <button type="button" onclick="confirmarPlay('${tarefaId}', true)" class="btn-padrao px-5 py-2 text-sm rounded-xl font-semibold">Sim, é alteração</button>
                    </div>
                </div>
            </div>
        `;
    }

    async function confirmarPlay(tarefaId, isAlteracao) {
        fecharModal();
        
        if (isAlteracao) {
            const currentAlt = window.appData.tarefas[tarefaId].alteracoes || 0;
            const { error: errAlt } = await supabaseClient.from('tarefas').update({ alteracoes: currentAlt + 1 }).eq('id', tarefaId);
            if(errAlt) console.error("Erro ao incrementar alterações", errAlt);
        }

        const { error: err1 } = await supabaseClient.from('registros_tempo').insert([{
            tarefa_id: tarefaId,
            valor_hora: 65.00
        }]);
        if (err1) { console.error(err1); return alert("Erro ao iniciar o timer."); }
        
        const { error: err2 } = await supabaseClient.from('tarefas').update({ status_tarefa: 'Trabalhando agora' }).eq('id', tarefaId);
        if (err2) console.error(err2);

        carregarCampanhas(true);
    }

    async function pararTempo(registroId, dataInicioIso, tarefaId) {
        if (!registroId) {
            await supabaseClient.from('tarefas').update({ status_tarefa: 'À fazer' }).eq('id', tarefaId);
            return carregarCampanhas(true);
        }

        const dataFim = new Date();
        const dataInicio = new Date(dataInicioIso);
        const horasPassadas = (dataFim - dataInicio) / (1000 * 60 * 60);
        const valorTotal = (horasPassadas * 65.00).toFixed(2);

        const { error } = await supabaseClient.from('registros_tempo').update({
            fim: dataFim.toISOString(),
            valor_total: valorTotal
        }).eq('id', registroId);

        if (error) { console.error(error); return alert("Erro ao parar o timer."); }

        await supabaseClient.from('tarefas').update({ status_tarefa: 'À fazer' }).eq('id', tarefaId);
        carregarCampanhas(true);
    }

    async function carregarCampanhas(manterAberto = false) {
        const abertas = [];
        if (manterAberto) {
            document.querySelectorAll('.campanha-body.open').forEach(el => abertas.push(el.id));
        }

        const scrollAtual = window.scrollY;
        const container = document.getElementById('campanhas-container');
        const mesFiltroValor = document.getElementById('filtro-mes-valor').value; 

        window.appData = { campanhas: {}, acoes: {}, tarefas: {} };

        let activeTimers = {};
        if (isWordPressAdmin) {
            const { data: timers } = await supabaseClient.from('registros_tempo').select('*').is('fim', null);
            if (timers) {
                timers.forEach(t => { activeTimers[t.tarefa_id] = t; });
            }
        }

        let query = supabaseClient
            .from('campanhas')
            .select(`id, nome_campanha, cor_cabecalho, foto_capa, dor_oportunidade, mes_referencia, ordem, mensuracao`)
            .eq('cliente_id', idClienteFiltro)
            .order('ordem', { ascending: true })
            .order('created_at', { ascending: false });

        const { data: campanhas, error } = await query;

        if (error || !campanhas || campanhas.length === 0) {
            container.innerHTML = '<p class="text-gray-500 text-center mt-10">Nenhuma campanha encontrada.</p>';
            return;
        }

        let campanhasFiltradas = campanhas;
        if (mesFiltroValor) {
            campanhasFiltradas = campanhas.filter(c => {
                if (!c.mes_referencia) return false;
                return c.mes_referencia.startsWith(mesFiltroValor);
            });
        }

        if (campanhasFiltradas.length === 0) {
            container.innerHTML = '<p class="text-gray-500 text-center mt-10">Nenhuma campanha encontrada para este mês.</p>';
            return;
        }

        let htmlCompleto = '';

        for (let camp of campanhasFiltradas) {
            window.appData.campanhas[camp.id] = camp; 

            const nomeCamp = camp.nome_campanha || 'Nova Campanha';
            const corHex = camp.cor_cabecalho || '#5a5a5a'; 
            const fotoCapa = (camp.foto_capa && camp.foto_capa.trim() !== '') ? camp.foto_capa : 'https://murilo.app.br/wp-content/uploads/2026/09/capadefaut.png';
            const dorTexto = camp.dor_oportunidade || 'Nenhuma dor/oportunidade cadastrada.';
            
            let mesFormatado = '';
            if (camp.mes_referencia) {
                const partes = camp.mes_referencia.split('T')[0].split('-');
                if (partes.length >= 2) {
                    const dataObj = new Date(partes[0], partes[1] - 1, 1);
                    mesFormatado = dataObj.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
                }
            }

            const { data: acoes } = await supabaseClient.from('acoes')
                .select('id, titulo_acao, status_aprovacao, texto_alteracao, ordem')
                .eq('campanha_id', camp.id)
                .order('ordem', { ascending: true })
                .order('created_at', { ascending: true });

            const { data: tarefas } = await supabaseClient.from('tarefas')
                .select('id, nome_tarefa, prazo, status_tarefa, observacao, ordem, alteracoes')
                .eq('campanha_id', camp.id)
                .order('ordem', { ascending: true })
                .order('prazo', { ascending: true, nullsFirst: false });

            let totalTarefas = 0;
            let tarefasConcluidas = 0;
            let isCampanhaAtiva = false; 

            if (tarefas && tarefas.length > 0) {
                totalTarefas = tarefas.length;
                tarefasConcluidas = tarefas.filter(t => t.status_tarefa === 'Concluído').length;
            }
            const porcentagemConclusao = totalTarefas > 0 ? Math.round((tarefasConcluidas / totalTarefas) * 100) : 0;

            let acoesHtml = '';
            if (acoes && acoes.length > 0) {
                acoes.forEach(acao => {
                    window.appData.acoes[acao.id] = acao; 
                    const status = acao.status_aprovacao || 'Pendente';
                    const textoAlt = acao.texto_alteracao || '';
                    const acaoId = acao.id;

                    let infoExtra = '';
                    if (status === 'Alteração Solicitada' && textoAlt) {
                        infoExtra = `<p class="text-yellow-300 text-[11px] mt-1.5 bg-yellow-950/40 p-2 rounded-lg border border-yellow-500/20"><b>Sua solicitação:</b> ${textoAlt}</p>`;
                    } else if (status === 'Alteração Feita' && textoAlt) {
                        infoExtra = `<p class="text-green-300 text-[11px] mt-1.5 bg-green-950/40 p-2 rounded-lg border border-green-500/20"><b>Sua solicitação (Concluída pela Agência):</b> ${textoAlt}</p>`;
                    }

                    let botoesAcaoHtml = '';
                    if (status === 'Aprovado') {
                        botoesAcaoHtml = `<button type="button" onclick="atualizarStatusAcao('${acaoId}', 'Pendente')" class="btn-status btn-aprovado" title="Clique para desfazer">✓ Aprovado</button>`;
                    } else if (status === 'Não Aprovado') {
                        botoesAcaoHtml = `<button type="button" onclick="atualizarStatusAcao('${acaoId}', 'Pendente')" class="btn-status btn-reprovado" title="Clique para desfazer">✕ Não Aprovado</button>`;
                    } else if (status === 'Alteração Solicitada') {
                        botoesAcaoHtml = `<button type="button" onclick="abrirModalAlteracao('${acaoId}')" class="btn-status btn-pendente" title="Clique para editar seu pedido">⏳ Alteração Solicitada</button>`;
                    } else {
                        botoesAcaoHtml = `
                            <button type="button" onclick="atualizarStatusAcao('${acaoId}', 'Aprovado')" class="btn-status btn-aprovado">Aprovar</button>
                            <button type="button" onclick="atualizarStatusAcao('${acaoId}', 'Não Aprovado')" class="btn-status btn-reprovado">Não Aprovar</button>
                            <button type="button" onclick="abrirModalAlteracao('${acaoId}')" class="btn-status btn-alteracao">Pedir Alteração</button>
                        `;
                    }

                    const botoesAdminAcao = isWordPressAdmin ? `
                        <button type="button" onclick="abrirModalEdicaoAcao('${acaoId}')" class="btn-action-icon" title="Editar">${iconeEditar}</button>
                        <button type="button" onclick="excluirAcao('${acaoId}')" class="btn-action-icon" title="Excluir">${iconeExcluir}</button>
                    ` : '';

                    acoesHtml += `
                        <div class="bg-black/20 rounded-xl p-3.5 mb-3 border border-white/5 relative group flex flex-col md:flex-row items-start md:items-center gap-3 hover:bg-black/30 transition-colors" data-id="${acaoId}">
                            ${isWordPressAdmin ? `<div class="drag-handle" title="Arraste para reposicionar"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg></div>` : ''}
                            <div class="flex-1 w-full">
                                <div class="flex justify-between items-start gap-4 mb-2">
                                    <div class="text-white text-sm leading-relaxed break-words font-medium">${acao.titulo_acao}</div>
                                    <div class="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0">
                                        ${botoesAdminAcao}
                                    </div>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-2 border-t border-white/5">
                                    <div class="flex flex-col w-full md:w-auto">${infoExtra}</div>
                                    <div class="flex items-center gap-2 flex-wrap shrink-0">${botoesAcaoHtml}</div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            } else {
                acoesHtml = '<p class="text-gray-500 text-sm mb-4">Nenhuma ação vinculada a esta campanha no momento.</p>';
            }

            let tarefasHtml = '';
            if (tarefas && tarefas.length > 0) {
                tarefas.forEach(t => {
                    window.appData.tarefas[t.id] = t; 
                    const statusT = t.status_tarefa || 'À fazer';
                    const isConcluido = statusT === 'Concluído';
                    const isTrabalhando = statusT === 'Trabalhando agora';
                    
                    let badgeClass = 'badge-tarefa-afazer';
                    let textoBotaoStatus = 'À fazer';

                    if (isConcluido) {
                        badgeClass = 'badge-tarefa-concluido';
                        textoBotaoStatus = '✓ Concluído';
                    } else if (isTrabalhando) {
                        badgeClass = 'badge-tarefa-trabalhando';
                        textoBotaoStatus = 'Trabalhando';
                        isCampanhaAtiva = true;
                    }

                    const prazoFormatado = t.prazo ? new Date(t.prazo + 'T00:00:00').toLocaleDateString('pt-BR') : 'Sem prazo';

                    let trackerHtml = '';
                    if (isWordPressAdmin && !isConcluido) {
                        const activeTimer = activeTimers[t.id];
                        if (activeTimer || isTrabalhando) {
                            const timerId = activeTimer ? activeTimer.id : '';
                            const timerInicio = activeTimer ? activeTimer.inicio : '';
                            trackerHtml = `<button type="button" onclick="pararTempo('${timerId}', '${timerInicio}', '${t.id}')" class="btn-action-icon btn-timer-active" title="Parar Tempo">${iconeStop}</button>`;
                            isCampanhaAtiva = true;
                            badgeClass = 'badge-tarefa-trabalhando';
                            textoBotaoStatus = 'Trabalhando';
                        } else {
                            trackerHtml = `<button type="button" onclick="abrirModalPlay('${t.id}')" class="btn-action-icon btn-timer-play" title="Iniciar Tempo">${iconePlay}</button>`;
                        }
                    }

                    const botoesAdminTarefa = isWordPressAdmin ? `
                        <button type="button" onclick="abrirModalEdicaoTarefa('${t.id}')" class="btn-action-icon" title="Editar">${iconeEditar}</button>
                        <button type="button" onclick="excluirTarefa('${t.id}')" class="btn-action-icon" title="Excluir">${iconeExcluir}</button>
                    ` : '';

                    tarefasHtml += `
                        <div class="bg-black/20 rounded-xl p-3 mb-2.5 border border-white/5 relative group flex flex-col md:flex-row justify-between items-start md:items-center gap-3" data-id="${t.id}">
                            <div class="flex items-center gap-3 flex-1">
                                ${isWordPressAdmin ? `<div class="drag-handle" title="Arraste para reposicionar"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg></div>` : ''}
                                <div>
                                    <h4 class="text-white font-medium text-sm">${t.nome_tarefa}</h4>
                                    <p class="text-gray-400 text-[11px] mt-0.5 uppercase tracking-wider flex items-center flex-wrap">
                                        <span>Prazo: <span class="text-gray-300 font-medium">${prazoFormatado}</span></span>
                                        ${t.observacao ? `<span class="text-[#32bbce] normal-case ml-1.5">• ${t.observacao}</span>` : ''}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 ml-0 md:ml-auto">
                                ${trackerHtml}
                                <span class="${badgeClass}" ${isWordPressAdmin ? `onclick="toggleStatusTarefa('${t.id}')"` : ''} style="${isWordPressAdmin ? 'cursor:pointer;' : ''}">${textoBotaoStatus}</span>
                                <div class="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                    ${botoesAdminTarefa}
                                </div>
                            </div>
                        </div>
                    `;
                });
            } else {
                tarefasHtml = '<p class="text-gray-500 text-sm mb-4">Nenhuma tarefa vinculada a esta campanha no momento.</p>';
            }
            
            const badgeCampanhaTrabalhando = isCampanhaAtiva 
                ? `<span class="text-[10px] uppercase tracking-wider text-[#4ade80] font-bold bg-[#4ade80]/10 px-3 py-1 rounded-full border border-[#4ade80]/30 ml-3 relative flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.2)]" style="animation: pulse-trabalhando 1.5s infinite;">
                    <span class="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></span> Em Andamento
                   </span>` 
                : '';

            const botoesAdminCampanha = isWordPressAdmin ? `
                <div class="flex items-center gap-2">
                    <button type="button" onclick="abrirModalEditarCampanha('${camp.id}')" class="btn-action-icon" title="Editar Campanha">${iconeEditar}</button>
                    <button type="button" onclick="excluirCampanha('${camp.id}')" class="btn-action-icon" title="Excluir Campanha">${iconeExcluir}</button>
                </div>
            ` : '';

            const secaoCriarAcao = isWordPressAdmin ? `
                <div class="px-6 py-5 border-t border-white/5">
                    <h2 class="titulo-secao">Ações Estratégicas</h2>
                    <div class="acoes-container">${acoesHtml}</div>
                    <div class="flex flex-col md:flex-row gap-2 mt-4 bg-white/5 p-3 rounded-xl border border-white/5">
                        <input type="text" id="input-acao-${camp.id}" placeholder="Título da nova ação..." class="input-dark flex-1 px-4 py-2 text-sm">
                        <button type="button" id="btn-acao-${camp.id}" onclick="criarAcao('${camp.id}')" class="btn-padrao px-4 py-2 text-sm whitespace-nowrap">Criar Ação</button>
                    </div>
                </div>
            ` : `
                <div class="px-6 py-5 border-t border-white/5">
                    <h2 class="titulo-secao">Ações Estratégicas</h2>
                    <div class="acoes-container">${acoesHtml}</div>
                </div>
            `;

            const secaoCriarTarefa = isWordPressAdmin ? `
                <div class="px-6 py-5 border-t border-white/5">
                    <h2 class="titulo-secao">Tarefas</h2>
                    <div class="tarefas-container">${tarefasHtml}</div>
                    <div class="flex flex-col md:flex-row gap-2 mt-4 bg-white/5 p-3 rounded-xl border border-white/5 items-center">
                        <input type="text" id="input-tarefa-nome-${camp.id}" placeholder="Nome da nova tarefa..." class="input-dark flex-1 px-4 py-2 text-sm w-full">
                        <input type="date" id="input-tarefa-prazo-${camp.id}" class="input-dark px-4 py-2 text-sm w-full md:w-auto">
                        <button type="button" id="btn-tarefa-${camp.id}" onclick="criarTarefa('${camp.id}')" class="btn-padrao px-4 py-2 text-sm whitespace-nowrap w-full md:w-auto">Enviar Tarefa</button>
                    </div>
                </div>
            ` : `
                <div class="px-6 py-5 border-t border-white/5">
                    <h2 class="titulo-secao">Tarefas</h2>
                    <div class="tarefas-container">${tarefasHtml}</div>
                </div>
            `;

            // --- FASE 2.5: SESSÃO DE MENSURAÇÃO (RESULTADOS) ---
            let secaoMensuracao = '';
            const mensuracaoConteudo = camp.mensuracao || '';
            const temConteudo = mensuracaoConteudo.trim() !== '' && mensuracaoConteudo !== '<br>';

            if (isWordPressAdmin) {
                if (!temConteudo) {
                    secaoMensuracao = `
                        <div class="px-6 py-5 border-t border-white/5">
                            <h2 class="titulo-secao">Mensuração / Resultados</h2>
                            <div class="mt-2">
                                <button type="button" onclick="abrirModalMensuracao('${camp.id}')" class="btn-padrao px-5 py-2.5 text-sm rounded-xl font-semibold flex items-center gap-2">
                                    ➕ Inserir Mensuração e Resultados
                                </button>
                            </div>
                        </div>
                    `;
                } else {
                    secaoMensuracao = `
                        <div class="px-6 py-5 border-t border-white/5">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="titulo-secao mb-0">Mensuração / Resultados</h2>
                                <button type="button" onclick="abrirModalMensuracao('${camp.id}')" class="btn-action-icon px-4 py-1.5 rounded-lg flex items-center gap-2" title="Editar Resultados">
                                    ${iconeEditar} <span class="text-xs font-bold text-gray-300 uppercase tracking-wider">Editar</span>
                                </button>
                            </div>
                            <div class="bg-black/30 rounded-xl p-5 border border-white/5 relative">
                                <div class="view-mensuracao w-full overflow-hidden">${mensuracaoConteudo}</div>
                            </div>
                        </div>
                    `;
                }
            } else {
                secaoMensuracao = `
                    <div class="px-6 py-5 border-t border-white/5">
                        <h2 class="titulo-secao">Mensuração / Resultados</h2>
                        <div class="bg-black/30 rounded-xl p-4 border border-white/5 relative mb-3">
                            <div class="view-mensuracao w-full overflow-hidden">${mensuracaoConteudo || '<span class="text-gray-500 italic text-sm">Nenhum resultado publicado ainda.</span>'}</div>
                        </div>
                    </div>
                `;
            }

            htmlCompleto += `
                <div class="glass-panel rounded-3xl overflow-hidden relative transition-all duration-300" data-id="${camp.id}">
                    <div class="h-1.5 w-full absolute top-0 left-0" style="background-color: ${corHex};"></div>
                    
                    <div class="p-6 cursor-pointer hover:bg-white/5 transition-colors flex justify-between items-center" onclick="toggleCampanha('${camp.id}')">
                        <div class="flex items-center gap-4 flex-1">
                            ${isWordPressAdmin ? `<div class="drag-handle" title="Arraste para reposicionar"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg></div>` : ''}
                            
                            <div class="flex-1">
                                <h1 class="text-xl md:text-2xl font-bold text-white flex items-center flex-wrap">
                                    ${nomeCamp}
                                    ${badgeCampanhaTrabalhando}
                                </h1>
                                <div class="flex items-center gap-3 mt-1 flex-wrap">
                                    ${mesFormatado ? `<span class="text-xs text-[#32bbce] font-light bg-[#32bbce]/10 px-2.5 py-0.5 rounded-full border border-[#32bbce]/25">📅 ${mesFormatado}</span>` : ''}
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <div class="hidden sm:flex flex-col items-end w-36">
                                <span class="text-xs text-gray-200 font-bold mb-1">${porcentagemConclusao}% Concluído</span>
                                <div class="w-full">
                                    <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${porcentagemConclusao}%;"></div></div>
                                </div>
                            </div>

                            ${botoesAdminCampanha}

                            <div class="text-gray-500 bg-black/20 p-2 rounded-full">
                                <svg id="seta-${camp.id}" class="seta-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div id="body-${camp.id}" class="campanha-body ${abertas.includes('body-' + camp.id) ? 'open' : ''}">
                        <div class="px-6 pt-2 pb-0 sm:hidden">
                            <div class="flex justify-between items-center mb-1.5">
                                <span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Progresso Geral</span>
                                <span class="text-xs text-destaque font-bold">${porcentagemConclusao}% Concluído</span>
                            </div>
                            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${porcentagemConclusao}%;"></div></div>
                        </div>

                        <div class="px-6 pb-6 pt-4">
                            <div class="w-full h-[200px] rounded-xl bg-gray-900 overflow-hidden relative border border-gray-800">
                                <img src="${fotoCapa}" class="w-full h-full object-cover opacity-60">
                            </div>
                        </div>

                        <div class="px-6 py-5 border-t border-white/5">
                            <h2 class="titulo-secao">Dor / Oportunidade</h2>
                            <div class="bg-black/30 rounded-xl p-4 border border-white/5 relative group mb-3">
                                <p class="text-gray-300 text-sm leading-relaxed">${dorTexto}</p>
                            </div>
                        </div>

                        ${secaoCriarAcao}
                        ${secaoCriarTarefa}
                        ${secaoMensuracao}
                    </div>
                </div>
            `;
        }

        container.innerHTML = htmlCompleto;
        inicializarDragAndDrop();
        window.scrollTo({ top: scrollAtual, behavior: 'instant' });
    }

    inicializarFlatpickr();
    carregarCampanhas();
</script>
