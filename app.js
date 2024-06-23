document.addEventListener('DOMContentLoaded', () => {
    const matches = [
            {
                match: 'PAKISTAN',
                teamA: 'Team A',
                teamB: 'Team B',
                score: '200/3',
                status: 'Live'
            },
            {
                match: 'INDIA',
                teamA: 'Team A',
                teamB: 'Team B',
                score: '200/2',
                status: 'Live'
            },
            {
                match: 'BANGLADESH',
                teamA: 'Team C',
                teamB: 'Team A',
                score: '180/2',
                status: 'Completed'
            },
            {
                match: 'SOUTH AFRICA',
                teamA: 'Team E',
                teamB: 'Team F',
                score: '150/2',
                status: 'Upcoming'
            },
            {
                match: 'SRI LANKA',
                teamA: 'Team E',
                teamB: 'Team F',
                score: '133/2',
                status: 'Upcoming'
            }        
        
    ]
      
    const tableBody = document.querySelector('#matchesTable tbody');
    matches.forEach(match => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${match.match}</td>
            <td>${match.teamA}</td>
            <td>${match.teamB}</td>
            <td>${match.score}</td>
            <td>${match.status}</td>
        `;
        tableBody.appendChild(row);
    });
});
