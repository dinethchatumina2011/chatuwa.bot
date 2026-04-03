const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "botfile",
    alias: ["file", "filedl", "plugin"],
    desc: "Show bot creator information",
    category: "search",
    react: "💀",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        // Owner information (you can modify these values)
        const ownerInfo = {
            name: "Hashuu",
            number: "+00000000000",
            photo: "https://i.ibb.co/Kjq97rcG/3575.jpg",
            bio: "The creator of this amazing bot"
        };

        // Beautiful formatted message
        const creatorMessage = `
Ponnayo Thota Denne Na File Eka Oninam Salli Dila Ganin Huththa | 😏

💡 *Puka Denna Epa Bn ☺️*`;

        // Send message with owner photo
        await conn.sendMessage(from, {
            image: { url: ownerInfo.photo },
            caption: creatorMessage,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Creator Command Error:", e);
        // Fallback text if image fails
        await reply(`👑 *Creator Info*\n\nName: 𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟\nNumber: +923306137477\n\nContact for bot support!`);
    }
});

