const state = {
    scores: []
}

axios  
    .get('/api/scores')
    .then(res => res.data)
    .then(scores => {
        state.scores = scores
        renderLogin()
    })