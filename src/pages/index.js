// ./src/pages/index.js

const rocket = {
    textAlign: "center",
    "& img": {
        width: "630px",
    }
};

function Index() {
    return (
        <div style={rocket}>
            <img src="https://media.giphy.com/media/QbumCX9HFFDQA/giphy.gif" />
        </div>
    );
}

export default Index;
