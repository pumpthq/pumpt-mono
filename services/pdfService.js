// const pdf = require("pdf-extraction");
// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// const PDFService = function () { };
// const Keywords = require('../models/keywords.js')
// const Match = require('../models/matching')

// PDFService.processPDF = async (data, candidate, vacancy) => {
//   let match = await Match.findOne({ _vacancy: vacancy._id, _candidate: candidate._id })
//   const keywordList = Array.from(vacancy.keywords)
//   let sanitizedKeywords = keywordList.map(e => e.toLowerCase())
//   let masterKeywords = await Keywords.findOne()

//   pdf(data).then(function (_data) {
//     let finalKeywords = new Set()
//     // PDF text
//     let textSet = new Set(_data.text.replace(/'/g, '').split(/[-\s,\n/]+/))
//     let textArray = Array.from(textSet)
//     let arr = [];
//     textArray.map(e => {
//       let lastCharacter = e.slice(-1)
//       if (!alphabet.includes(e[0])) {
//         e = e.slice(1)
//       }
//       if (lastCharacter === '.') {
//         e = e.slice(0, -1)
//       }
//       arr.push(e.toLowerCase())
//     });

//     arr.map((e, i) => {
//       let twoWords = `${arr[i]} ${arr[i + 1]}`
//       if (sanitizedKeywords.includes(e.toLowerCase())) {
//         finalKeywords.add(e.toLowerCase())
//       }
//       if (sanitizedKeywords.includes(twoWords.toLowerCase())) {
//         finalKeywords.add(twoWords.toLowerCase())
//       }
//     });

//     let finalScore = (finalKeywords.size / vacancy.keywords.length * 100).toFixed(0)
//     console.log(finalScore)
//     match.pdfScore = finalScore
//     match.save()
//   });
// }

// module.exports = PDFService