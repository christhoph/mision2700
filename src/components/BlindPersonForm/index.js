import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import {
  BlindPersonFormContainer,
  BlindPersonFormDescription,
  BlindPersonFormulary,
  BlindPersonFormGroup
} from "./styles";
import { ContentSize, Modal, ScrollableContainer, colors } from "../../core";

const { donateGreen, white } = colors;

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  textFieldChild: {
    width: "50%",
    "&:first-child": {
      marginRight: theme.spacing(2)
    }
  },
  button: {
    width: 300,
    background: donateGreen,
    padding: theme.spacing(1.5),
    margin: theme.spacing(2),
    color: white,
    "&:hover": {
      background: donateGreen
    }
  },
  formButton: {
    width: 300,
    padding: theme.spacing(1.5),
    margin: theme.spacing(1)
  }
}));

const ModalForm = ({ open, onClose }) => {
  const { textField, textFieldChild, formButton } = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      css={`
        width: max-content;
        padding: 0;
      `}
    >
      <ScrollableContainer
        css={`
          flex-direction: column;
          align-items: center;
        `}
      >
        <BlindPersonFormDescription
          css={`
            padding-bottom: 0;
          `}
        >
          Ingresa sus datos en este formulario:
        </BlindPersonFormDescription>
        <BlindPersonFormulary>
          <TextField
            id="fullname"
            label="Nombres y Apellidos"
            className={textField}
            type="text"
            name="fullname"
            margin="normal"
            variant="outlined"
          />
          <BlindPersonFormGroup>
            <TextField
              id="age"
              label="Edad"
              className={textFieldChild}
              type="number"
              name="age"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="city"
              label="Ciudad"
              className={textFieldChild}
              type="text"
              name="city"
              margin="normal"
              variant="outlined"
            />
          </BlindPersonFormGroup>
          <TextField
            id="address"
            label="Dirección"
            className={textField}
            type="text"
            name="address"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="blindness_cause"
            label="Causa de ceguera"
            className={textField}
            type="text"
            name="blindness_cause"
            margin="normal"
            variant="outlined"
          />
          <BlindPersonFormGroup>
            <TextField
              id="blindness_percentage"
              label="Porcentaje de ceguera"
              className={textFieldChild}
              type="number"
              name="blindness_percentage"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="blindness_age_init"
              label="Edad inicio de discapacidad"
              className={textFieldChild}
              type="number"
              name="blindness_age_init"
              margin="normal"
              variant="outlined"
            />
          </BlindPersonFormGroup>
          <TextField
            id="disability"
            label="Otro tipo de discapacidad - Especificar"
            className={textField}
            type="text"
            name="disability"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="responsible_tutor"
            label="Nombre del tutor o responsable"
            className={textField}
            type="text"
            name="responsible_tutor"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="contact_number"
            label="Número de contacto"
            className={textField}
            type="text"
            name="contact_number"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="observations"
            label="Observaciones"
            className={textField}
            type="text"
            name="observations"
            margin="normal"
            variant="outlined"
            multiline
            rowsMax="4"
          />
          <Button variant="contained" color="primary" className={formButton}>
            Enviar
          </Button>
        </BlindPersonFormulary>
      </ScrollableContainer>
    </Modal>
  );
};

const BlindPersonForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const { button } = useStyles();

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);

  return (
    <BlindPersonFormContainer>
      <ContentSize
        css={`
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
        `}
      >
        <BlindPersonFormDescription>
          ¿Conoces una persona con discapacidad visual?
        </BlindPersonFormDescription>
        <Button
          variant="contained"
          className={button}
          onClick={toggleOpenModal}
        >
          Envíanos sus datos
        </Button>
        <ModalForm open={openModal} onClose={toggleOpenModal} />
      </ContentSize>
    </BlindPersonFormContainer>
  );
};

export default BlindPersonForm;
