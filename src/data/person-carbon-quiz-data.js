import bgO1 from '../assets/bg_carbon_b_1.jpg';
import bgO2 from '../assets/bg_carbon_b_2.jpg';
import bgO3 from '../assets/bg_carbon_b_3.jpg';
import bgO4 from '../assets/bg_carbon_b_4.jpg';

export const PersonCarbonQuizData = {
	0: {
		title: 'Person Carbon',
		type: 'simple',
		description: 'How much travel do you do?',
		rowTitles: ['Edificio', 'Tipo de Combustible', 'Cantidad Consumida'],
		rowsType: [{ title: '', energyType: '', quantity: '' }],
		placeHolder: { first: 'Mercedes', energyType: '', second: '1000 litres' },
		rowStructure: [
			{ title: '', energyType: '', quantity: '' },
			{ title: '', energyType: '', quantity: '' },
			{ title: '', energyType: '', quantity: '' },
		],
		dropdownTypes: [
			'--',
			'Gasolina',
			'Gasoleo A o B',
			'E10',
			'E86',
			'B7',
			'B10',
			'B20',
			'B30',
			'B100',
			'XTL',
			'LNG',
			'CNG',
			'LPG',
			'H2',
		],
		image: bgO1,
		sideTitle: 'Transport',
		sideBody:
			'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
		infoPlusBody:
			"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
	},
	1: {
		title: 'Combustible Instalaciones Fijas',
		description: 'How much travel do you do?',
		rowTitles: ['Edificio', 'Tipo de Combustible', 'Cantidad Consumida'],
		rowsType: [{ title: '', energyType: '', quantity: '' }],
		placeHolder: { first: 'Sotano', energyType: '', second: '5000 litres' },
		rowStructure: [
			{ title: '', energyType: '', quantity: '' },
			{ title: '', energyType: '', quantity: '' },
			{ title: '', energyType: '', quantity: '' },
		],
		dropdownTypes: [
			'--',
			'Gas Natural',
			'Gasoleo C',
			'Gas Butano',
			'Gas Propano',
			'Fueloleo',
			'LPG',
			'Carbon Nacional',
			'Carbon de importacion',
			'Coque de petroleo',
		],
		image: bgO2,
		sideTitle: 'Instalaciones Fijas',
		sideBody:
			'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
		infoPlusBody:
			"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
	},
	2: {
		title: 'Refrigeracion y Climatizacion',
		description: 'Fugas de gases fluorados',
		rowStructure: [
			{ title: '', title2: '', energyType: '', quantity: '' },
			{ title: '', title2: '', energyType: '', quantity: '' },
			{ title: '', title2: '', energyType: '', quantity: '' },
		],
		rowsType: [{ title: '', energyType: '', quantity: '' }],
		placeHolder: {
			first: 'Sotano',
			third: '',
			energyType: '',
			second: '100 litres',
		},
		rowTitles: [
			'Edificio/Sede',
			'Nombre del Gas',
			'Tipo de Equipo',
			'Emisiones Parciales',
		],
		dropdownTypes: [
			'--',
			'HFC-23',
			'HFC-32',
			'HFC-41',
			'HFC-125',
			'HFC-134',
			'HFC-134a',
			'HFC-143',
			'HFC-143a',
			'HFC-152',
			'HFC-152a',
			'HFC-161',
			'HFC-227ea',
			'HFC-236cb',
			'HFC-236ea',
			'HFC-236fa',
			'HFC-245ca',
			'HFC-245fa',
			'HFC-365mfc',
			'HFC-43-10mee',
		],
		image: bgO3,
		sideTitle: 'Fugas',
		sideBody:
			'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
		infoPlusBody:
			"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
	},
	3: {
		title: 'Electricity',
		description: 'Fugas de gases fluorados',
		rowStructure: [
			{ title: '', title2: '', energyType: '', quantity: '' },
			{ title: '', title2: '', energyType: '', quantity: '' },
			{ title: '', title2: '', energyType: '', quantity: '' },
		],
		rowsType: [{ title: '', title2: '', energyType: '', quantity: '' }],
		placeHolder: {
			first: 'Nave de Aragusa',
			third: '',
			energyType: '',
			second: '1000 kWh',
		},
		rowTitles: ['Edificio', 'Compañia Electrica', 'GdO', 'Datos de Consumo'],
		dropdownTypes: [
			'--',
			'A-DOS ENERGíA, S.L.',
			'ACCIONA GREEN ENERGY DEVELOPMENTS, S.L.',
			'ACCIÓN ENERGÍA COMERCIALIZADORA, S.L.',
			'ACSOL ENERGÍA GLOBAL, S.A.',
			'ADEINNOVA ENERGÍA, S.L.U.',
			'AGENTE DEL MERCADO ELÉCTRICO, S.A.',
			'AGRI-ENERGÍA, S.A.',
			'ALCANZIA ENERGÍA, S.L.',
			'ALDRO ENERGÍA Y SOLUCIONES, S.L.U.',
			'ALPIQ ENERGÍA ESPAÑA, S.A.U.',
			'ANOTHER ENERGY OPTION, S.L.',
			'APELES ELECTRICIDAD, S.L.',
			'AQUÍ ENERGÍA, S.L.',
			'ASAL DE ENERGÍA, S.L.',
			'AUDAX ENERGÍA, S.L.U.',
			'AURA ENERGÍA, S.L.',
			'AUSARTA PRIMA, S.L.',
			'AVANZALIA ENERGÍA COMERCIALIZADORA, S.A.',
			'AXPO IBERIA, S.L.',
			'BASSOLS ENERGÍA COMERCIAL, S.L.',
			'CEPSA GAS Y ELECTRICIDAD, S.A.',
			'CLIDOM ENERGY, S.L.',
			'COMERCIALIZADORA ELÉCTRICA DE CÁDIZ, S.A.',
			'COMERCIALIZADORA ELÉCTRICA TALAYUELAS, S.L.',
			'COMERCIALIZADORA LERSA , S.L.',
			'COMPAÑÍA ESCANDINAVA DE ELECTRICIDAD EN ESPAÑA, S.L.',
			'COOPERATIVA ELÉCTRICA DE CASTELLAR, S.C.V.',
			'COOPERATIVA ELÉCTRICA BENÉFICA CATRALENSE, COOP. V.',
			'COOPERATIVA ELÉCTRICA BENÉFICA SAN FRANCISCO DE ASÍS, COOP. V.',
			'COOPERATIVA ELÉCTRICA-BENÉFICA ALBATERENSE, COOP.V.',
			'COOPERATIVA VALENCIANA ELECTRODISTRIBUIDORA DE FUERZA Y ALUM',
			'SERRALLO, S.Coop.V.',
			'COX ENERGÍA COMERCIALIZADORA ESPAÑA, S.L.U.',
			'CYE ENERGÍA, S.L.',
			'DAIMUZ ENERGÍA, S.L.',
			'DISA ENERGÍA ELÉCTRICA, S.L.U.',
			'DREUE ELECTRIC, S.L.',
			'DRK ENERGY, S.L.',
			'ECOFUTURA LUZ ENERGÍA, S.L.',
			'EDP COMERCIALIZADORA, S.A.U.',
			'EDP ENERGÍA S.A.U.',
			'ELECNOVA SIGLO XXI, S.L.',
			'ELECTRA CALDENSE ENERGIA, S.A.',
			'ELECTRA DEL CARDENER ENERGIA, S.A.',
			'ELÉCTRICA ALBATERENSE, S.L.',
			'ELÉCTRICA CATRALENSE, S.L.',
			'ELÉCTRICA DE CHERA, S.C.V.',
			'ELÉCTRICA DE GUADASSUAR COOP. V.',
			'ELÉCTRICA DE GUIXES ENERG¿A, S.L.',
			'ELÉCTRICA DIRECTA ENERGÍA, S.L.',
			'ELÉCTRICA SOLLERENSE, S.A.',
			'ELÉCTRICA DE MELIANA, S.C.V.',
			'ELÉCTRICA DE SOT DE CHERA S. COOP.V.',
			'ELÉCTRICA DE VINALESA, S.L.U.',
			'EMASP, S. COOP.',
			'EMPRESA DE ALUMBRADO ELÉCTRICO DE CEUTA, S.A.',
			'ENARA GESTIÓN Y MEDIACIÓN, S.L.',
			'ENDESA ENERGÍA, S.A.',
			'ENERCOLUZ ENERGÍA, S.L.',
			'ENERGEA SAVING ENERGY, S.L.',
			'ENERGY STROM XXI, S.L.',
			'ENERGÍA COLECTIVA, S.L.',
			'ENERGÍA DLR COMERCIALIZADORA, S.L.',
			'ENERPLUS ENERGÍA, S.A.',
			'ENGIE ESPAÑA, S.L.U.',
			'ENÉRGYA VM GESTIÓN DE ENERGÍA, S.L.U.',
			'ESTABANELL Y PAHISA MERCATOR, S.A.',
			'ESTRATEGIAS ELÉCTRICAS INTEGRALES, S.A.',
			'FACTOR ENERGÍA, S.A.',
			'FENIE ENERGIA, S.A.',
			'FOENER COMERCIALIZACIÓN, S.L.U.',
			'GALP ENERGÍA ESPAÑA S.A.U.',
			'GAOLANIA SERVICIOS, S.L.',
			'GAS NATURAL COMERCIALIZADORA, S.A.',
			'GAS NATURAL FENOSA RENOVABLES, S.L.U.',
			'GAS NATURAL SERVICIOS SDG, S.A.',
			'GEO ALTERNATIVA, S.L.',
			'GEOATLANTER, S.L.',
			'GESTERNOVA, S.A.',
			'GIGABUSINESS, S.L.',
			'GNERA ENERGÍA Y TECNOLOGÍA, S.L.',
			'GOIENER S.COOP',
			'HIDROELÉCTRICA DEL VALIRA, S.L.',
			'HIDROELÉCTRICA EL CARMEN ENERGÍA, S.L.',
			'IBERDROLA CLIENTES, S.A.U.',
			'IM3 ENERGÍA, S.L.',
			'INDEXO ENERGÍA, S.L.',
			'INICIATIVA E. NOVA, S.L.',
			'INTEGRACIÓN EUROPEA DE ENERGÍA SUR, S.L.',
			'INTEGRACIÓN EUROPEA DE ENERGÍA, S.A.U.',
			'KILOWATIOS VERDES, S.L.',
			'LA UNIÓN ELECTRO INDUSTRIAL, S.L.U.',
			'LONJAS TECNOLOGIA, S.A.',
			'LUBALOO, S.L.',
			'NABALIA ENERGIA 2000, S.A.',
			'NEXUS ENERGIA, S.A.',
			'NINOBE SERVICIOS ENERGÉTICOS, S.L.',
			'NOBE SOLUCIONES Y ENERGÍA',
			'NOSA ENERXIA SOCIEDADE COOP GALEGA',
			'NUEVA COMERCIALIZADORA ESPAÑOLA, S.L.',
			'ODF ENERGÍA LIBRE COMERCIALIZADORA, S.L.',
			'ON DEMAND FACILITIES, S.L.U.',
			'PEPEENERGY',
			'PETRO NAVARRA, S.L.',
			'PETRONIEVES ENERGÍA 1, S.L.',
			'PHOTON GESTIÓN',
			'PROT ENERGÍA COMERCIALIZACIÓN, S.L.',
			'PULSAR SERVICIOS ENERGÉTICOS, S.L.',
			'RENEWABLE VENTURES, S.L.',
			'SAMPOL INGENIERÍA Y OBRAS, S.A.',
			'SOM ENERGÍA, S.C.C.L.',
			'SUMINISTRADORA ELÉCTRICA VIENTOS ALISIOS DE LANZAROTE, S.L.',
			'SUMINISTROS ESPECIALES ALGINETENSES COOP. V.',
			'SWAP ENERGÍA, S.A.',
			'SYDER COMERCIALIZADORA VERDE, S.L.',
			'TELEFÓNICA SOLUCIONES DE INFORMÁTICA Y COMUNICACIONES DE ESPAÑA, S.A.U.',
			'THE YELLOW ENERGY, S.L.',
			'TRADE UNIVERSAL ENERGY, S.A.',
			'UNIELÉCTRICA ENERGÍA, S.A.',
			'V3J INGENIERIA Y SERVICIOS, S.L.',
			'VIESGO ENERGÍA, S.L.',
			'WATIUM, S.L.',
			'WIND TO MARKET, S.A.',
		],
		gdp: ['Si', 'No'],
		image: bgO4,
		sideTitle: 'Electricidad',
		sideBody:
			'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
		infoPlusBody:
			"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
	},
};
