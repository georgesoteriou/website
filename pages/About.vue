<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div>
        Today
      </div>
      <div id="gitgraph"></div>
      <div>26 May 1997</div>
    </v-flex>
    <v-dialog v-model="dialog" max-width="600px" transition="dialog-transition">
      <v-card>
        <v-card-title>
          {{ commitTitle }}
        </v-card-title>
        <v-card-text>
          {{ commitBody }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="success" @click="dialog = false">Close</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import * as GitgraphJS from '@gitgraph/js/lib'

export default {
  data() {
    return {
      dialog: false,
      commitTitle: '',
      commitBody: ''
    }
  },
  mounted() {
    const graphContainer = document.getElementById('gitgraph')

    const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
      author: '',
      orientation: 'vertical',
      template: GitgraphJS.templateExtend('metro', {
        colors: [
          '#ffffff',
          '#F08200',
          '#94C7B2',
          '#00D8FD',
          '#3cfff7',
          '#00b6f0',
          '#0F9D58',
          '#0F9D58'

        ],
        branch: {
          spacing: 30,
          label: {
            display: true,
            color: '#000000'
          }
        },
        commit: {
          hasTooltipInCompactMode: true,
          spacing: 50,
          message: {
            display: this.$vuetify.breakpoint.lgAndUp,
            displayAuthor: false,
            displayHash: false
          }
        }
      })
    })

    const commit = (branch, subject, body = '') => {
      const popup = () => {
        this.commitTitle = subject
        this.commitBody = body
        this.dialog = true
      }
      branch.commit({
        subject: subject,
        onClick: popup,
        onMessageClick: popup
      })
    }

    const master = gitgraph.branch('master')
    commit(master, 'Initial Commit (26/05/1997)')
    commit(master, 'Complete Primary School @ Junior School Nicosia')
    const English = master.branch('English School')
    commit(English, 'Get Accepted @ English School Nicosia')
    commit(English, 'Start Highschool @ English School Nicosia')
    commit(master, 'Pass Ham Radio exam and get a License (5B4AJZ)')
    commit(English, 'Get Elected for Radio Club (5B4ES) President (4 years)')
    commit(master, 'Volunteer and Help organise Hack{Cyprus} with CEL')
    commit(master, 'Create and Organize Hack{Cyprus}Code School with CEL')
    commit(English, 'Create and was President of Tecnology club for 2 years')
    const Think = master.branch('Think LC')
    commit(Think, 'Start working as Web Developer')
    commit(English, 'Complete A-Level: Double Maths with A*, A')
    commit(English, 'Complete A-Level: Computing with A*')
    commit(English, 'Complete A-Level: Physics with A')
    master.merge(English)
    commit(Think, 'Create Think Learning Centre Website')
    master.merge(Think)
    commit(master, 'Join Cyprus Army as Corporal')
    commit(master, 'Complete Army Service')
    const Imperial = master.branch('Imperial College')
    commit(Imperial, 'Get Accepted @ Imperial College London')
    commit(Imperial, 'Start Computing @ Imperial College London')
    commit(Imperial, 'Volunteer for ICHack18')
    commit(master, 'Take part in Google Hashcode 2018')
    const DoCSoc = Imperial.branch('DoCSoc')
    commit(DoCSoc, 'Run and get elected for DoCSoc WebMaster 2018-19')
    commit(Imperial, 'Complete Year 1')
    commit(DoCSoc, 'Create Sponsors Portal v1')
    commit(DoCSoc, 'Organize ICHack 2019')
    commit(DoCSoc, 'Organize Google Hashcode 2019 at Imperial')
    commit(DoCSoc, 'Run and get elected for DoCSoc WebMaster 2019-20')
    commit(Imperial, 'Complete Year 2')
    commit(master, 'Work at Goldman Sachs as Spring Technology Intern')
    const Cisco = master.branch('Cisco')
    commit(Cisco, 'Start work at Cisco as Platform Engineer Intern')
    commit(Cisco, 'Create AWS Cisco Kubernetes Cluster')
    commit(Cisco, 'Create GCP Cisco Kubernetes Cluster')
    commit(
      Cisco,
      'Get MeetPaaS (Webex Teams) to work on Clusters',
      'Meet Platform As A Service'
    )
    master.merge(Cisco)
    commit(DoCSoc, 'Create Sponsors Portal v2')
    commit(DoCSoc, 'IC Hack 20 Branding and Publicity lead Organizer')
    commit(Imperial, 'Create Drone Playground Group project')
    Imperial.merge(DoCSoc)
    commit(Imperial, 'Complete Year 3')
    const GoogleIntern = master.branch('Google Intern')
    commit(GoogleIntern, 'Start work at GoogleIntern as Android Enterprise Intern')
    commit(GoogleIntern, 'Design high priority app update project')
    commit(GoogleIntern, 'Launch high priority app update project')
    master.merge(GoogleIntern)
    commit(Imperial, 'Finish Thesis: Neural Super Resolution Assisted by Depth Estimation')
    commit(Imperial, 'Complete Year 4')
    commit(Imperial, 'Graduate')
    master.merge(Imperial)
    commit(master, 'Move to Zurich')
    const Google = master.branch('Google')
    commit(Google, 'Start work at Google (Youtube Team) as Software Engineer')

  }
}
</script>
