import {
  Box,
  Container,
  Select,
  MenuItem,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import api from "../service/axios";

export default function Form() {
  const [tipoSeguro, setTipoSeguro] = useState("");
  const [user, setUser] = useState("");
  const [ordem, setOrdem] = useState("");
  const handleChangeSelectTipoSeguro = (e) => {
    setTipoSeguro(e.target.value);
  };

  const handleChangeSelectUser = (e) => {
    setUser(e.target.value);
  };

  async function handleSubmit() {
    try {
      await api.post("form", {
        tipoSeguro: tipoSeguro,
        user: user,
        ordem: ordem,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container sx={{ width: "100%" }}>
      <Box sx={{ padding: 4 }}>
        <Typography sx={{ fontSize: 15 }}>Tipo de Seguro</Typography>

        <Select
          sx={{
            width: "100%",
            borderRadius: 2,
            marginBottom: 2,
            color: "black",
          }}
          labelId="demo-simple-select-label"
          label="Selecione"
          placeholder="Selecione"
          value={tipoSeguro}
          name="type"
          onChange={handleChangeSelectTipoSeguro}
        >
          {" "}
          <MenuItem value={0}>Selecione</MenuItem>
          <MenuItem value={1}>Seguro de Garantia</MenuItem>
          <MenuItem value={2}>Vida em Grupo</MenuItem>
          <MenuItem value={3}>Riscos de Engenharia</MenuItem>
          <MenuItem value={4}>Responsabilidade Civil</MenuItem>
        </Select>

        <Typography sx={{ fontSize: 15 }}>
          Selecione os usuários envolvidos
        </Typography>

        <Select
          sx={{ width: "100%", borderRadius: 2, marginBottom: 2 }}
          labelId="demo-simple-select-label"
          label="Selecione"
          value={user}
          onChange={handleChangeSelectUser}
        >
          <MenuItem value={0}>Selecione</MenuItem>
          <MenuItem value={1}>Americanas</MenuItem>
          <MenuItem value={2}>Casas Bahia</MenuItem>
        </Select>

        <Typography sx={{ fontSize: 15 }}>
          Adicione aqui os detalhes da ordem de serviço
        </Typography>
        <TextField
          onChange={(e) => setOrdem(e.target.value)}
          sx={{ width: "100%" }}
          multiline
          rows={4}
          variant="outlined"
        />
      </Box>
      <Button onClick={handleSubmit}>Cadastrar</Button>
    </Container>
  );
}
