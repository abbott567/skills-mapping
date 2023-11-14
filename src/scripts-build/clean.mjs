import jetpack from 'fs-jetpack'
import { toCamelCase } from './utilities.mjs'

export async function cleanDist () {
  console.log('Cleaning dist')
  jetpack.remove('dist')
  console.log('Cleaned dist')
}

export async function cleanTeamMembers () {
  console.log('Cleaning teamMembers')

  const cleanTeamMembers = []
  const teamMembers = jetpack.read('src/data/team-members.json', 'json')
  const capabilities = jetpack.read('src/data/capabilities.json', 'json')
  const capabilityKeys = capabilities.map(x => toCamelCase(x))
  for (const teamMember of teamMembers) {
    const cleanTeamMember = { id: teamMember.id, capabilityScores: {} }
    for (const capabilityKey of capabilityKeys) {
      const existingScore = teamMember.capabilityScores[capabilityKey];
      cleanTeamMember.capabilityScores[capabilityKey] = existingScore > 0 ? existingScore : 0;
    }
    cleanTeamMembers.push(cleanTeamMember)
  }
  jetpack.write('src/data/team-members.json', cleanTeamMembers)
  console.log('Cleaned teamMembers')
}
