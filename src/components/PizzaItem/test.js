router.delete('/:id', (req, res) => {
    let deleteId = req.params.id;
    let deleteArtist = artists.filter(artist => (artist.id === Number(deleteId))); //don't think Number is necessary. This isolates the artist object to remove.
    console.log(deleteArtist);
    let index = artists.indexOf(deleteArtist[0]); // sets index of the artist to delete
    if (index > -1) {
        artists.splice(index, 1); //removes artist from original array (which is a const and can't be re-defined) by index
    }
    console.log(index);
    res.sendStatus(200);
});