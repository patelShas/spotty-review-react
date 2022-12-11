const DetailItem = (
    {
        album = {
            "_id": "123",
            "name": "Evil Friends",
            "img": "https://upload.wikimedia.org/wikipedia/en/2/21/Portugal_The_Man_Evil_Friends.jpg",
            "total_tracks": 12,
            "release_date": "2014-6"
        }

    },
) => {
    return (
        <div className={"p-3 list-group-item"}>
            <div className={"d-flex flex-row justify-content-between"}>
                <h1>{album.name}</h1>
                <img src={album.img} alt={`${album.name} cover`} className={""} width={"120"} height={"120"}></img>
            </div>
            <ul>
                <li>Released on {album.release_date}</li>
                <li>{album.total_tracks} tracks</li>
            </ul>
        </div>
    );

}

export default DetailItem;