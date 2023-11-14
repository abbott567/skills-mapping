const lineColour = '#777'
const teamMemberLabel = 'Team member'

export default {
  teamMemberLabel,
  type: 'polarArea',
  options: {
    hover: false,
    borderColor: 'rgba(0,0,0,0)',
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          display: false
        },
        angleLines: {
          display: true,
          color: lineColour
        },
        grid: {
          color: lineColour,
          z: 1
        },
        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: {
            size: 18
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: true,
        text: teamMemberLabel,
        padding: {
          top: '100'
        },
        font: {
          size: '16'
        }
      }
    }
  }
}
