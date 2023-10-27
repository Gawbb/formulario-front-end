import { UploadFile } from "@mui/icons-material";
import { Box, Card, CardHeader, Typography } from "@mui/material";

export default function CardData(props) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<UploadFile sx={{ fontSize: 38 }} />}
        title={
          <Box>
            <Typography fontWeight="bold">{props.tipoServico}</Typography>
          </Box>
        }
        subheader={
          <Box>
            <Box sx={{ display: "flex", marginTop: 1 }}>
              <Typography fontSize={12} marginRight={2}>
                {props.user}
              </Typography>
              <Typography fontSize={12} marginRight={2}>
                {props.ordem}
              </Typography>
            </Box>
          </Box>
        }
      />
    </Card>
  );
}
