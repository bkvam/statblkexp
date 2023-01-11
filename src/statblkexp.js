export let i18n = key => {
	return game.i18n.localize(key);
};


class BlkStatblockExporter {

	dw(text) {
	  this.tab.document.write(text);
	}

	 dabil(aname, abil) {
		this.dw('<p><b>' + aname + '</b> ');
		this.dw(abil.value);
		this.dw(' (' + (abil.mod > 0 ? '+' + abil.mod : abil.mod) + ')');
		this.dw('</p>\n');
	}
	
	sgn(val) {
		if (val <= 0)
			return val;
		
		return `+${val}`;
	}
	
	style() {
		this.dw(`
	<STYLE type="text/css" media="screen,print">
	
	blockquote {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: .1in;
		margin-bottom: .1in;
		margin-left: .25in;
		text-indent: .25in;
		background-color: lightgrey;
		border: 1px solid gray;
		padding: 10px;
	}

	p.normal {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
	}

	p.twocol {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
	}

	h1, p.h1 {
		margin-top: .25in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 20pt;
		font-weight: bold;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
	}

	h1.title {
		margin-top: .25in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 20pt;
		font-weight: bold;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
		text-align: center;
	}

	h2, p.h2 {
		margin-top: .10in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 16pt;
		font-weight: bold;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
	}

	h3, p.h3 {
		margin-top: .10in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 14pt;
		font-weight: bold;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
	}

	p.spellhdr {
		margin-top: .10in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 12pt;
		font-weight: bold;
		font-variant: small-caps;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
	}

	h4, p.h4 {
		margin-top: .10in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 12pt;
		font-weight: bold;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
	}

	h5, p.h5 {
		margin-top: .10in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 12pt;
		font-weight: italic;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
	}

	p.char {
		margin-top: .10in;
		margin-bottom: 0in;
		font-family: "Georgia", "Times New Roman", serif;
		font-size: 14pt;
		font-weight: bold;
		color: darkred;
		text-indent: 0in;
		margin-left: 0in;
	}

	hr { 
	  display: block;
	  margin-top: 0.5em;
	  margin-bottom: 0.5em;
	  margin-left: 0;
	  margin-right: auto;
	  border-style: inset;
	  border-width: 0;
	  height: 3px;
	  color: darkred;
	  background-color: darkred;
	  width: 300px;
	  text-align: left;
	}

	p.sb {
		margin-top: .10in;
		margin-bottom: 0in;
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		text-indent: 0in;
		margin-left: 0in;
	}

	p.exdent {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		text-indent: -.25in;
		margin-left: .25in;
	}

	p.spell {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		text-indent: -.25in;
		margin-left: .25in;
	}

	p.spellfirst {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0.1in;
		margin-bottom: 0in;
		text-indent: -.25in;
		margin-left: .25in;
	}


	p.italic {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-style: italic;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		text-indent: -.25in;
		margin-left: .25in;
	}

	p, p.indent {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		text-indent: .25in;
	}

	p.detail {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		margin-left: .5in;
		text-indent: -.25in;
	}

	p.desc {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		margin-left: .5in;
	}

	div.character {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		text-indent: .25in;
	}

	p.subpar {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		text-indent: -.25in;
		margin-left: .5in;
	}

	span.prep {
		color: darkred;
	}

	td {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		text-align: center;
		font-size: 10pt;
		margin-top: 0in;
		margin-bottom: 0in;
		text-indent: 0in;
	}
	
	ul {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		display: block;
		list-style-type: disc;
		text-indent: 0;
		margin: 0;
		#padding-left: 1em;
	}
	
	li {
		margin: 0;
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		text-indent: 0;
		padding-left: 0;
	}
	
	.entry-title-inner {
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
		font-style: italic;
	}

	.tapered-rule {
		margin-top: .1in;
		margin-bottom: .1in;
		display: block;
		width: 100%;
		height: 5px;
		border: none;
		color: #922610;
		fill: #922610;
	}
	
	.text-center {
		text-align: center;
		font-family: "Trebuchet MS", "Arial", "Helvetica", sans-serif;
		font-size: 10pt;
	}
	
	.top-margin {
		margin-top: .10in;
	}
	
	.secret {
		font-style: italic;
	}

	</STYLE>
`);
	}
	
	getsave(a, name, abil) {
		let bonus = 0;
		let val = a.system.abilities[abil].value
		if (val < 10)
			bonus = Math.trunc((val - 11) / 2);
		else
			bonus = Math.trunc((val - 10) / 2);
		bonus += Number(a.system.bonuses.abilities.save);
		if (a.system.abilities[abil].proficient)
			bonus += this.prof;
		if (bonus == 0)
			return '';
		return name + ' ' + this.sgn(bonus);
	}
	
	sep() {
		this.dw(`                        <svg height="5" width="100%" class="tapered-rule">
                            <polyline points="0,0 400,2.5 0,5" stroke="darkred"></polyline>
                        </svg>`);
	}
	
	getskill(a, skill) {
		let s = CONFIG.DND5E.skills[skill];
		// skills = this.cat(skills, ', ', skill);
		let sval = a.system.skills[skill].value;
		let abil = a.system.skills[skill].ability;
		let amod = a.system.abilities[abil].mod;
		let value = amod;
		if (sval == 1) // Proficient
			value += this.prof;
		else if (sval == 2) // Expertise
			value += 2*this.prof;
		else if (sval  == 3) // Half proficient
			value += Math.floor(this.prof/2);
		if (value == 0)
			return '';
		return s + ' ' + this.sgn(value);
	}
	
	getDamage(dmg, mod) {
		var total = 0;
		dmg = dmg.replace('@mod', mod.toString());
		let s = dmg.replace(/\s/g, '');
		s = s.match(/[+\-]?([^+\-]+)/g) || [];
		let dice = '';
		while (s.length) {
			let v = s.shift();
			if (v.search(/[^0-9\-+]/) >= 0)
				dice += v;
			else
				total += Number(v);
		}
		if (total)
			return `${dice}${this.sgn(total)}`;
		return dice;
	}

	cat(str1, delim, str2) {
		if (str1 == '')
			return str2;
		if (str2 == '')
			return str1;
		return str1 + delim + str2;
	}
	
	
	resolveUUID(a, uuid) {
		let arr = uuid.split('.');
		if (arr.length == 4) {
			if (arr[0] == 'Actor') {
				switch (arr[2]) {
				case 'Item':
					const items = a.items.filter(it => it._id == arr[3]);
					if (items.length == 1)
						return items[0].name;
					break;
				}
			}
		} else if (arr.length == 2) {
			const items = a.items.filter(it => it._id == arr[1]);
			if (items.length == 1)
				return items[0].name;
		}
		return uuid;
	}

	stripjunk(a, str) {
		str = str.replaceAll('[–]', '');
		
		// Convert UUIDs to the names of the items referenced by UUID.
		// Also convert constructions like @spell[identify].

		const regexp = /@(?<tag>[A-Za-z]+)\[(?<item>[^\]]+)\]({(?<name>[^}]+)})?/g;
		const matches = str.matchAll(regexp);

		let s = '';
		let i = 0;
		for (const match of matches) {
			s += str.substring(i, match.index);

			i = match.index + match[0].length;
			
			if (match.groups.tag == "UUID") {
				if (match.groups.name)
					s += `<b>${match.groups.name}</b>`;
				else
					s += '<b>' + this.resolveUUID(a, match.groups.item) + '</b>';
			} else {
				// Something like @spell[greater restoration].
				if (match.groups.tag == 'spell')
					s += `<i>${match.groups.item}</i>`;
				else if (match.groups.tag == 'item') {
					const ia = match.groups.item.split('|');
					if (ia.length == 3)
						s += ia[2];
					else
						s += ia[0];
				} else
					s += `<b>${match.groups.item}</b>`;
			}
		}
		if (i > 0) {
			// Processing took place.
			if (i < str.length)
				s += str.substring(i);
			str = s;
			console.log('Processed: ' + str);
		}
		
		// Turn [[3d6]] dice rolls into 3d6.
		str = str.replaceAll(/\[\[\/r\s+([^\]]+)\]\]/g, '$1');

		return str;
	}
	
	biodetail(title, detail) {
		if (detail)
			this.dw(`<p class="exdent"><b>${title}</b> ${detail}`);
	}
	
	biography(a) {
		if (!(a.system.details.biography.value || a.system.details.background || a.system.details.trait || a.system.details.appearance ||
			  a.system.details.ideal || a.system.details.bond || a.system.details.ideal))
			return;
		this.dw('<h2>Biography</h2>');
		let bio = this.stripjunk(a, a.system.details.biography.value);
		if (bio)
			this.dw(`<div>${bio}</div>`);
		this.biodetail('Background', a.system.details.background);
		this.biodetail('Appearance', a.system.details.appearance);
		this.biodetail('Personality Traits', a.system.details.trait);
		this.biodetail('Ideals', a.system.details.ideal);
		this.biodetail('Bonds', a.system.details.bond);
		this.biodetail('Flaws', a.system.details.flaw);
	}
	
	displayitems(a, title, type, showDetails) {
		const items = a.items.filter(it => it.type == type);
		if (items.length == 0)
			return;
		
		this.dw(`<h2>${title}</h2>\n`);
		items.forEach((i) => {
			let deets = '';
			if (i.system.quantity != 1 && i.system.quantity != undefined)
				deets = this.cat(deets, ', ', `x${i.system.quantity}`);
			if (i.system.armor != undefined && i.system.armor.value > 0) {
				deets = this.cat(deets, ', ', `AC ${i.system.armor.value}`);
				if (i.system.armor.type)
					deets = this.cat(deets, ', ', i.system.armor.type);
				if (i.system.armor.dex != undefined)
					deets = this.cat(deets, ', ', `Max Dex ${i.system.armor.dex}`);
			}
			if (i.system.activation != undefined && i.system.activation.type) {
				let activation = i.system.activation;
				if (activation.type == 'special')
					deets = this.cat(deets, ', ', activation.type);
				else if (activation.type != 'action')
					deets = this.cat(deets, ', ', `${activation.cost != 1 ? activation.cost + ' ' : ''}${activation.type} action${activation.cost != 1 ? 's' : ''}`);
			}
			
			if (i.system.uses != undefined && i.system.uses.value != null) {
				const u = i.system.uses;
				if (u.max > 0) {
					let per = u.per;
					switch (per) {
					case 'lr': per = 'long rest'; break;
					case 'sr': per = 'short rest'; break;
					}
					deets = this.cat(deets, ', ', `uses: ${u.max} per ${per}`);
				}
			}
			let equipped = i.system.equipped ? '&bullet;' : '';
			if (deets != '')
				deets = ' ' + deets;
			this.dw(`<p class="exdent"><b>${equipped}${i.name}</b>${deets}</p>\n`);
			if (showDetails && i.system.description.value != '') {
				this.dw(`<p class="desc">\n`);
				this.dw(this.stripjunk(a, i.system.description.value));
				this.dw(`</p>\n`);
				// this.dw(i.system.description.value);
			}
		});
	}
	
	displaytraits(title, traits, fullnames) {
		if (traits == undefined)
			return;
		if (traits.value.length > 0) {
			let list = '';

			this.dw(`<p class="exdent"><b>${title}</b> `);
			traits.value.forEach((t) => {
				let name = fullnames[t];
				if (name == undefined)
					name = t;
				list = this.cat(list, ', ', name);
			});
			this.dw(list);
			this.dw('</p>\n');
		}
	}
	
	displaysenses(senses) {
		let s = '';
		if (senses.darkvision)
			s = this.cat(s, ', ', `Darkvision ${senses.darkvision} ${senses.units}`);
		if (senses.blindsight)
			s = this.cat(s, ', ', `Blindsight ${senses.blindsight} ${senses.units}`);
		if (senses.tremorsense)
			s = this.cat(s, ', ', `Tremorsense ${senses.tremorsense} ${senses.units}`);
		if (senses.truesight)
			s = this.cat(s, ', ', `Truesight ${senses.truesight} ${senses.units}`);
		if (senses.special)
			s = this.cat(s, ', ', `${senses.special} ${senses.units}`);
		if (s != '')
			this.dw(`<p class="exdent"><b>Senses</b> ${s}</p>\n`);
	}

	header(name) {
		this.dw(`<!DOCTYPE html>\n<html>\n<body>\n<head>\n<title>${name}</title>`);
		this.style();
		this.dw(`\n</head>\n`);
	}
	
	footer() {
		this.tab.document.write("</body></html>");
		this.tab.document.close();
	}
	
	createtab() {
		this.tab = window.open('about:blank', '_blank');
		if (!this.tab) {
			ui.notifications.warn('Unable to open tab in browser');
			return null;
		}
		return this.tab;
	}

	exportStatblock(a) {
		console.log(a);
		
		let showDetails = game.settings.get('statblkexp', 'details');
		let cancel = false;

		let name = a.name;

		this.createtab();

		this.header(name);

		this.dw('<h1>' + name + '</h1>\n');

		let imgwidth = game.settings.get('statblkexp', 'imgwidth');
		if (a.img && imgwidth)
			this.dw(`<p><img src="${a.img}" alt="${name}" width="${imgwidth}"></p>\n`);

		let charLevel = 0;
		
		if (a.type == 'character') {
			const classes = a.items.filter(it => it.type == 'class');
			this.dw('<p class="exdent">');
			let classList = '';
			classes.forEach((c) => {
				classList = this.cat(classList, ', ', c.name + ' ' + c.system.levels);
				charLevel = charLevel + c.system.levels;
			});
			this.dw(`${classList} (${a.system.details.xp.value}/${a.system.details.xp.max})</p>\n`);
		}
		if (a.type == 'character')
			this.prof = Math.floor((a.system.details.level + 7) / 4);
		else {
			const cr = Number(a.system.details.cr);
			this.prof = Math.max(Math.floor((cr - 1) / 4), 0) + 2;
		}
		
		let size = CONFIG.DND5E.actorSizes[a.system.traits.size];
		if (a.type == 'character')
			this.dw(`<p class="italic">${size} ${a.system.details.race}, ${a.system.details.alignment}</p>\n`);
		else {
			const t = a.system.details.type;
			const st = t.subtype ? ' (' + t.subtype + ')' : '';
			this.dw(`<p class="italic">${size} ${t.value}${st}, ${a.system.details.alignment}</p>\n`);
		}
		
		let ac = 10;
		let items = '';
		let base = 10;
		let bonuses = 0;
		let maxdex = null;
		let dexbonus = 0;

		const acbonuses = a.items.filter(it => it.type == 'equipment' && it.system.equipped);
		acbonuses.forEach((e) => {
			e.effects.forEach((eff) => {
				eff.changes.forEach((c) => {
					if (c.key == "system.attributes.ac.bonus") {
						bonuses += Number(c.value);
						items = this.cat(items, ', ', e.name);
					}
				});
			});
		});

		switch (a.system.attributes.ac.calc) {
		case 'default':
			const armor = a.items.filter(it => it.type == 'equipment' && it.system.armor.type != undefined && it.system.equipped);
			armor.forEach((e) => {
				switch (e.system.armor.type) {
				case 'medium': 
				case 'heavy': 
				case 'light': 
					base = Math.max(base, e.system.armor.value);
					maxdex = e.system.armor.dex;
					items = this.cat(items, ', ', e.name);
					break;
				case 'shield':
					bonuses += e.system.armor.value;
					items = this.cat(items, ', ', e.name);
					break;
				case 'trinket':
					// FIX: rings & cloaks. bonuses are in the effects.
					items = this.cat(items, ', ', e.name);
					break;
				}
			});
			if (maxdex != null && a.system.abilities.dex.mod > maxdex)
				dexbonus = maxdex;
			else
				dexbonus = a.system.abilities.dex.mod;
			ac = base + dexbonus + bonuses;
			break;
		case 'mage':
			items = this.cat(items, ', ', 'Mage Armor');
			ac = 13 + a.system.abilities.dex.mod + bonuses;
			break;
		case 'natural':
			items = this.cat(items, ', ', 'natural armor');
			ac = a.system.attributes.ac.flat;
			break;
		case 'unarmoredMonk':
			items = this.cat(items, ', ', 'unarmored monk');
			ac = 10 + a.system.abilities.dex.mod + a.system.abilities.wis.mod + bonuses;
			break;
		case 'unarmoredBarb':
			items = this.cat(items, ', ', 'unarmored barbarian');
			ac = 10 + a.system.abilities.dex.mod + a.system.abilities.con.mod + bonuses;
			break;
		case 'draconic':
			items = this.cat(items, ', ', 'draconic resistance');
			ac = 13 + a.system.abilities.dex.mod + bonuses;
			break;
		}
		if (items != '')
			items = ` (${items})`;

		this.dw(`<p class="exdent"><b>Armor Class</b> ${ac}${items}</p>\n`);

		this.dw(`<p class="exdent"><b>Hit Points</b> ${a.system.attributes.hp.max}</p>\n`);

		let speed = '';
		const m = a.system.attributes.movement;
		if (m.walk)
			speed = `${m.walk} ${m.units}`;
		if (m.fly)
			speed = this.cat(speed, ', ', `Fly ${m.fly} ${m.units}${m.hover ? ' (Hover)' : ''}`);
		if (m.swim)
			speed = this.cat(speed, ', ', `Swim ${m.swim} ${m.units}`);
		if (m.climb)
			speed = this.cat(speed, ', ', `Climb ${m.climb} ${m.units}`);
		if (m.burrow)
			speed = this.cat(speed, ', ', `Burrow ${m.burrow} ${m.units}`);
		if (speed == '')
			speed = 'none';
		this.dw(`<p class="exdent"><b>Speed</b> ${speed}</p>\n`);
			
		this.dw(`<p class="exdent"><b>Proficiency Bonus</b> ${this.sgn(this.prof)}</p>\n`);

		this.sep();
		
		this.dw(`<table border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="50">
    <b>${CONFIG.DND5E.abilityAbbreviations['str'].toUpperCase()}</b><br>${a.system.abilities.str.value}<br>(${this.sgn(a.system.abilities.str.mod)})
    </td>
    <td width="50">
    <b>${CONFIG.DND5E.abilityAbbreviations['dex'].toUpperCase()}</b><br>${a.system.abilities.dex.value}<br>(${this.sgn(a.system.abilities.dex.mod)})
    </td>
    <td width="50">
    <b>${CONFIG.DND5E.abilityAbbreviations['con'].toUpperCase()}</b><br>${a.system.abilities.con.value}<br>(${this.sgn(a.system.abilities.con.mod)})
    </td>
    <td width="50">
    <b>${CONFIG.DND5E.abilityAbbreviations['int'].toUpperCase()}</b><br>${a.system.abilities.int.value}<br>(${this.sgn(a.system.abilities.int.mod)})
    </td>
    <td width="50">
    <b>${CONFIG.DND5E.abilityAbbreviations['wis'].toUpperCase()}</b><br>${a.system.abilities.wis.value}<br>(${this.sgn(a.system.abilities.wis.mod)})
    </td>
    <td width="50">
    <b>${CONFIG.DND5E.abilityAbbreviations['cha'].toUpperCase()}</b><br>${a.system.abilities.cha.value}<br>(${this.sgn(a.system.abilities.cha.mod)})
    </td>
  </tr>
</table>\n`);

		this.sep();

		let saves = '';
		saves = this.cat(saves, ', ', this.getsave(a, 'Str', 'str'));
		saves = this.cat(saves, ', ', this.getsave(a, 'Dex', 'dex'));
		saves = this.cat(saves, ', ', this.getsave(a, 'Con', 'con'));
		saves = this.cat(saves, ', ', this.getsave(a, 'Int', 'int'));
		saves = this.cat(saves, ', ', this.getsave(a, 'Wis', 'wis'));
		saves = this.cat(saves, ', ', this.getsave(a, 'Cha', 'cha'));
		this.dw('<p class="exdent"><b>Saving Throws</b> ' + saves + '</p>\n');

		this.displaysenses(a.system.attributes.senses);
		this.displaytraits('Languages', a.system.traits.languages, CONFIG.DND5E.languages);

		let skills = '';
		Object.keys(a.system.skills).forEach((skill) => {
			skills = this.cat(skills, ', ', this.getskill(a, skill));
		});
		this.dw(`<p class="exdent"><b>Skills</b> ${skills}</p>\n`);

		this.displaytraits('Damage Resistance', a.system.traits.dr, CONFIG.DND5E.damageResistanceTypes);
		this.displaytraits('Damage Immunity', a.system.traits.di, CONFIG.DND5E.damageResistanceTypes);
		this.displaytraits('Damage Vulnerability', a.system.traits.dv, CONFIG.DND5E.damageResistanceTypes);
		this.displaytraits('Condition Immunity', a.system.traits.ci, CONFIG.DND5E.conditionTypes);

		this.displaytraits('Weapon Proficiencies', a.system.traits.weaponProf, CONFIG.DND5E.weaponProficiencies);
		this.displaytraits('Armor Proficiencies', a.system.traits.armorProf, CONFIG.DND5E.armorProficiencies);
		this.displaytraits('Tool Proficiencies', a.system.traits.toolProf, CONFIG.DND5E.toolProficiencies);
		
		if (a.type == 'npc')
			this.dw(`<p class="exdent"><b>Challenge</b> ${a.system.details.cr} (${a.system.details.xp.value} XP)</p>\n`);
		
		this.sep();
		
		this.biography(a);

		if (showDetails) {
			const cl = a.items.filter(it => it.type == 'class');
			cl.forEach((f) => {
				this.dw(`<h2><b>${f.name} ${f.system.levels}</b></h2>\n`);
				if (showDetails && f.system.description.value != '') {
					this.dw(`<p class="desc">\n`);
					this.dw(this.stripjunk(a, f.system.description.value));
					this.dw(`</p>\n`);
				}
			});
		}

		this.displayitems(a, 'Subclass', 'subclass', showDetails);
		
		const weap = a.items.filter(it => it.type == 'weapon');

		if (weap.length > 0) {
			this.dw(`<h2>Attacks</h2>\n`);
			
			weap.forEach((w) => {
				// Greataxe. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d12 + 3) slashing damage.
				let weapdeets = '';
				let mod = 0;
				let range = '';
				switch (w.system.actionType) {
				case 'mwak':
					weapdeets = 'Melee Weapon Attack: ';
					if (w.system.properties.fin)
						mod = Math.max(a.system.abilities.str.mod, a.system.abilities.dex.mod);
					else
						mod = a.system.abilities.str.mod;
					if (w.system.properties.thr)
						range = `reach 5 ft or range ${w.system.range.value}/${w.system.range.long} ${w.system.range.units}`;
					else
						range = `reach ${w.system.range.value} ${w.system.range.units}`;
					break;
				case 'rwak':
					weapdeets = 'Ranged Weapon Attack: ';
					mod = a.system.abilities.dex.mod;
					range = `range ${w.system.range.value}/${w.system.range.long} ${w.system.range.units}`;
					break;
				}

				let tohit = Number(w.system.attackBonus) + mod + (w.system.proficient ? this.prof : 0);
				weapdeets += this.sgn(tohit) + ` to hit, ${range}`;
				
				let damage = '';
				w.system.damage.parts.forEach((d) => {
					let dmg = this.getDamage(d[0], mod);
					damage = this.cat(damage, ', ', `${dmg} ${d[1]}`);
				});
				weapdeets += `. Hit: ${damage} damage`;
				let props = '';
				if (w.system.properties.fin) props = this.cat(props, ', ', 'Finesse');
				if (w.system.properties.lgt) props = this.cat(props, ', ', 'Light');
				if (w.system.properties.thr) props = this.cat(props, ', ', 'Thrown');
				if (w.system.damage.versatile) {
					props = this.cat(props, ', ', `Versatile ${this.getDamage(w.system.damage.versatile, mod)}`);
				}
				if (props != '')
					weapdeets += ` (${props})`;
				
				let equipped = w.system.equipped ? '&bullet;' : ''; 
				this.dw(`<p class="exdent">${equipped}<b>${w.name}</b>. ${weapdeets}</p>\n`);
				if (showDetails && w.system.description.value != '') {
					this.dw(`<p class="desc">\n`);
					this.dw(this.stripjunk(a, w.system.description.value));
					this.dw(`</p>\n`);
				}
			});
		}

		this.displayitems(a, 'Features', 'feat', showDetails);

		this.displayitems(a, 'Equipment', 'equipment', showDetails);

		this.displayitems(a, 'Consumables', 'consumable', showDetails);
		this.displayitems(a, 'Tools', 'tool', showDetails);
		this.displayitems(a, 'Containers', 'backpack', showDetails);

		this.displayitems(a, 'Loot', 'loot', showDetails);
		let currency = '';
		let curr = a.system.currency;
		if (curr.pp > 0)
			currency = this.cat(currency, ', ', `${curr.pp}pp`);
		if (curr.gp > 0)
			currency = this.cat(currency, ', ', `${curr.gp}gp`);
		if (curr.sp > 0)
			currency = this.cat(currency, ', ', `${curr.sp}sp`);
		if (curr.ep > 0)
			currency = this.cat(currency, ', ', `${curr.ep}ep`);
		if (curr.cp > 0)
			currency = this.cat(currency, ', ', `${curr.cp}cp`);
		if (currency)
			this.dw(`<p class="exdent"><b>Currency</b> ${currency}</p>\n`);

		if (a.system.attributes.spellcasting) {
			this.dw(`<h2>Spells</h2>\n`);
		
			let mod = 0;
			switch (a.system.attributes.spellcasting) {
			case 'wis':
				mod = a.system.abilities.wis.mod;
				break;
			case 'int':
				mod = a.system.abilities.int.mod;
				break;
			case 'cha':
				mod = a.system.abilities.cha.mod;
				break;
			}
			this.dw(`<p class="exdent"><b>Spell DC</b> ${8+this.prof+mod}, <b>Spell Attack</b> ${this.sgn(mod+this.prof)}</p>\n`);
			
			const spells = a.items.filter(it => it.type == 'spell');
			spells.sort((a, b) => (a.name > b.name) ? 1 : -1)

			if (game.settings.get('statblkexp', 'spellbook')) {
				spells.forEach((s) => {
					this.spelldetails(a, s);
				});

			} else {

				for (let level = 0; level < 10; level++ ) {
					let spellList = '';
					spells.forEach((s) => {
						if (s.system.level == level) {
							let sname = (s.system.preparation.mode == 'prepared' && s.system.preparation.prepared ? 
								'&bullet;' : '') + s.name;
							
							let sinfo = '';
							if (s.system.consume.type == "charges") {
								sinfo = this.cat(sinfo, ', ', `${s.system.consume.amount} charges`);
							} else if (s.system.preparation.mode == 'atwill') {
								sinfo = this.cat(sinfo, ', ', 'at will');
							} else if (s.system.preparation.mode == 'innate')
								sinfo = this.cat(sinfo, ', ', 'innate');
							if (sinfo != '')
								sinfo = " (" + sinfo + ")";
							spellList = this.cat(spellList, ', ', sname + sinfo);
							// if (s.system.preparation.mode == 'prepared' && s.system.preparation.prepared) {
								// spellList += '*';
							// }
						}
					});
					if (spellList != '') {
						let slots = '';
						if (level > 0 && a.system.spells['spell' + level].max > 0) {
							slots = ` (${a.system.spells['spell' + level].max})`;
						}

						let lev = (level == 0) ? 'Cantrip' : `Level ${level}`;
						this.dw(`<p class="exdent"><b>${lev}</b>${slots}: ${spellList}</p>\n`);
					}
				}
			}
		}
		this.footer();
	}
	
	spelldetails(a, s) {
		this.dw(`<p class="spellhdr">${s.name}</h3>`);
		let school = CONFIG.DND5E.spellSchools[s.system.school];

		let ritual = s.system.components.ritual ? ' (ritual)' : '';
		if (s.system.level == 0)
			this.dw(`<p class="italic">${school} cantrip${ritual}</p>\n`);
		else {
			let lev = `${s.system.level}th`;
			switch (s.system.level) {
			case 1: lev = '1st'; break;
			case 2: lev = '2nd'; break;
			case 3: lev = '3rd'; break;
			}
			this.dw(`<p class="italic">${lev}-level ${school}${ritual}</p>\n`);
		}
			
		let cond = s.system.activation.condition ? ` (${s.system.activation.condition}` : '';
		this.dw(`<p class="spellfirst"><b>Casting Time:</b> ${s.system.activation.cost} ${s.system.activation.type}${cond}</p>\n`);
		
		let range = s.system.range.units;
		if (range == "" && s.system.range.value == 0)
			range = `${s.system.target.value}-${s.system.target.units} ${s.system.target.type}`;
		else if (range != 'self' && range != 'touch')
			range = `${s.system.range.value} ${s.system.range.units}`;
		
		this.dw(`<p class="spell"><b>Range:</b> ${range}</p>\n`);
		
		let comp = "";
		if (s.system.components.vocal)
			comp = this.cat(comp, ', ', 'V');
		if (s.system.components.somatic)
			comp = this.cat(comp, ', ', 'S');
		if (s.system.components.material)
			comp = this.cat(comp, ', ', 'M');
		if (s.system.materials.value)
			comp += ` (${s.system.materials.value})`;
		this.dw(`<p class="spell"><b>Components:</b> ${comp}`);
		
		let dur = '';
		switch (s.system.duration.units) {
		case 'inst':
			dur = 'Instantaneous';
			break;
		case 'perm':
			dur = 'Permanent';
			break;
		default:
			let plural = s.system.duration.value != 1 ? 's' : '';
			if (s.system.components.concentration)
				dur = `Concentration, up to ${s.system.duration.value} ${s.system.duration.units}${plural}`;
			else
				dur = `${s.system.duration.value} ${s.system.duration.units}${plural}`;
		}
		this.dw(`<p class="spell"><b>Duration:</b> ${dur}`);
		
		this.dw('<div class="top-margin">' + this.stripjunk(a, s.system.description.value) + "</div>");
	}
	
	static {
		console.log("5e statblock exporter loaded.");

		Hooks.on("init", function() {
		  // console.log("5e Statblock Exporter initialized.");
		});

		Hooks.on("ready", function() {
		  // console.log("5e statblock ready to accept game data.");
		});
	}
}

Hooks.on("getActorDirectoryEntryContext", (html, entries) => {
    if (game.system.id == "dnd5e") {
        entries.push({
            name: "Export Statblock",
            icon: '<i class="fas fa-text"></i>',
            condition: li => {
                const actor = game.actors.get(li.data("documentId"));
                const canExport = actor.isOwner || game.user.isGM;
                return canExport;
            },
            callback: async (li) => {
				const actor = game.actors.get(li.data("documentId"));
				let sbex = new BlkStatblockExporter();
				sbex.exportStatblock(actor);
            }
        });
    }
});

/*
 * Create the configuration setting.
 */
Hooks.once('init', async function () {
	game.settings.register('statblkexp', 'details', {
	  name: 'Show item details',
	  hint: 'Shows the long descriptions for items.',
	  scope: 'client',     // "world" = sync to db, "client" = local storage
	  config: true,       // false if you dont want it to show in module config
	  type: Boolean,       // Number, Boolean, String, Object
	  default: false,
	  onChange: value => { // value is the new value of the setting
		console.log(value)
	  },
	});
	game.settings.register('statblkexp', 'spellbook', {
	  name: 'Full Spell Book',
	  hint: 'Show the full details of all spells.',
	  scope: 'client',     // "world" = sync to db, "client" = local storage
	  config: true,       // false if you dont want it to show in module config
	  type: Boolean,       // Number, Boolean, String, Object
	  default: false,
	  onChange: value => { // value is the new value of the setting
		console.log(value)
	  },
	});
	game.settings.register('statblkexp', 'imgwidth', {
	  name: 'Image Width',
	  hint: 'Width in pixels of character image. Enter 0 to omit image.',
	  scope: 'client',     // "world" = sync to db, "client" = local storage
	  config: true,       // false if you dont want it to show in module config
	  type: Number,       // Number, Boolean, String, Object
	  default: 200,
	  onChange: value => { // value is the new value of the setting
		console.log('statblkexp: new image width: ' + value)
	  },
	});
});
