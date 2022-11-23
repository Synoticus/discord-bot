const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions] });
const { EmbedBuilder } = require('discord.js');

const guild = client.guilds.cache.get("Server_ID");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const EmbedWelcome = new EmbedBuilder()
	.setColor("Hex_Color")
	.setTitle('Title')
	.setURL('Title_link') // You can delete this line of code.
	.setDescription('Description')
	.setThumbnail('Thumbnail_Link') // Also you can delete this line of code.
	.addFields({ name: 'Useful Links:', value: 'WEBSITE_LINK', inline: true })
	.addFields(
		{ name: 'Rules: ', value: 'COMING SOON' },
        { name: 'Discord Invite Link', value: 'COMING SOON' },
        { name: 'Social Media', value: 'COMING SOON' },
	)
	.setTimestamp()
	.setFooter({ text: 'Footer Test', iconURL: 'Icon_Url' });


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Role_Name');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('Channel_Send_Embed_Message').send({ embeds: [EmbedWelcome] });
});

client.login("Your_Discord_Bot_Token"); // *Important to put your discord bot's token*
