/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ArtCard({ title, author, imageUrl }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 0,
        border: 1,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardMedia sx={{ height: 200 }} image={imageUrl} component="img" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          sx={{
            margin: "auto",
            my: 1,
            borderColor: "#333",
            color: "#333",
            borderRadius: 0,
            "&:hover": {
              borderColor: "#000",
              color: "#000",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArtCard;
