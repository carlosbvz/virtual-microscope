/* eslint-disable no-use-before-define */

import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Chip from "@material-ui/core/Chip";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({onTagsChange}) {

  return (
    <Autocomplete
      multiple
      id="image-tags"
      options={tagsData}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      onChange={onTagsChange}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => (
          <Chip
            color="primary"
            label={option.title}
            {...getTagProps({ index })}
          />
        ));
      }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Select tags" />
      )}
    />
  );
}

// TODO: Get this data from DB
const tagsData = [
  {
    _id: '5f6e8227a692894cc3393846',
    title: 'LUNCHPOD',
    description: 'Labore tempor aliquip quis tempor officia tempor. Nisi ut commodo et irure ea enim nulla pariatur laborum labore laborum incididunt esse fugiat. Mollit in dolor incididunt ullamco. Officia velit nisi id consequat nulla laboris tempor proident tempor mollit sit. Laborum aliqua reprehenderit in commodo ea. Nisi voluptate aute amet irure sit enim labore adipisicing.\r\n'
  },
  {
    _id: '5f6e8227605d363f8e1a44e0',
    title: 'ZIDOX',
    description: 'Eu occaecat ex velit sunt esse nostrud culpa irure sit exercitation dolore sint. Aliquip aliquip exercitation id ex duis mollit labore voluptate exercitation. Occaecat ad sunt Lorem reprehenderit. Duis quis enim reprehenderit commodo exercitation esse non pariatur aliquip laborum. Velit ad amet exercitation minim incididunt anim. Duis tempor cupidatat magna reprehenderit cillum deserunt irure mollit voluptate amet tempor adipisicing in ut. Magna labore excepteur esse sint velit voluptate fugiat velit labore occaecat non commodo officia.\r\n'
  },
  {
    _id: '5f6e8227e7d8bc919c304bd0',
    title: 'RECRISYS',
    description: 'Sint ullamco reprehenderit reprehenderit est eiusmod consectetur commodo quis eu aliquip. Occaecat eu laboris est irure est nisi pariatur excepteur qui tempor duis occaecat duis ea. Officia consectetur deserunt consequat incididunt aute deserunt dolor. Adipisicing fugiat pariatur proident amet nisi.\r\n'
  },
  {
    _id: '5f6e822747df790f45802b34',
    title: 'BEADZZA',
    description: 'Reprehenderit nisi sunt velit sit ullamco voluptate duis elit. Aliqua ex mollit anim elit deserunt voluptate. Dolore minim consectetur tempor incididunt exercitation consectetur anim culpa. Ut nostrud veniam labore aliquip sint commodo ex consectetur. Minim incididunt labore ullamco exercitation sit aliqua ea deserunt. Reprehenderit deserunt pariatur reprehenderit ipsum deserunt deserunt. Ad culpa adipisicing magna eu sunt et aliquip mollit qui nulla do.\r\n'
  },
  {
    _id: '5f6e82272b85d94b90b55ace',
    title: 'HOTCAKES',
    description: 'Aute duis adipisicing incididunt cillum. Id fugiat enim excepteur sit fugiat exercitation amet. Dolor in laboris est sint est culpa et id.\r\n'
  },
  {
    _id: '5f6e822758e688f038075594',
    title: 'EZENT',
    description: 'Pariatur cupidatat sint reprehenderit sit deserunt cupidatat exercitation. Eu cupidatat qui amet excepteur cillum. Minim cillum pariatur pariatur sit dolor tempor esse nostrud ullamco ullamco consectetur veniam. Id cupidatat cillum pariatur dolor voluptate consectetur esse in. Occaecat aliqua in quis consectetur ea ipsum ut ex amet magna.\r\n'
  },
  {
    _id: '5f6e82272a792e01533eeeea',
    title: 'INSURETY',
    description: 'Culpa et irure elit laboris voluptate ut commodo et et nostrud sit nisi. Quis do id et laboris Lorem cupidatat excepteur et dolore do duis labore nulla. Veniam esse officia eiusmod anim. Duis ea ipsum dolor ullamco magna reprehenderit exercitation ipsum duis enim amet minim commodo dolore. Esse proident nisi dolore mollit consectetur enim eu dolore. Mollit esse do ea aliquip.\r\n'
  },
  {
    _id: '5f6e82275b674d988f6841d5',
    title: 'DECRATEX',
    description: 'Quis in in exercitation non. Qui incididunt duis nostrud voluptate. Esse duis adipisicing labore nulla ex aute irure est mollit labore duis do. Cupidatat ad dolor sint culpa ea consequat voluptate aliquip laborum.\r\n'
  },
  {
    _id: '5f6e8227812972fe024d0045',
    title: 'DOGNOST',
    description: 'Do laboris in minim incididunt in ea. Reprehenderit velit ut enim adipisicing in fugiat eu sunt. Id quis ullamco enim ut deserunt sunt incididunt enim minim nulla et consectetur amet adipisicing. Amet ipsum proident nostrud occaecat incididunt commodo culpa consequat id magna amet ea. Magna tempor culpa id eu amet eu Lorem mollit velit.\r\n'
  },
  {
    _id: '5f6e822757c559754ec113ab',
    title: 'AVIT',
    description: 'Irure ex commodo quis quis ut enim exercitation consequat magna non enim exercitation sunt. Reprehenderit cillum nulla ad do minim anim nulla ea laborum enim duis ullamco occaecat. Proident ipsum cillum qui tempor occaecat laborum fugiat dolor proident Lorem tempor. Ullamco elit cillum ex nulla duis velit magna pariatur ea officia eiusmod et. Tempor culpa culpa excepteur non ea eiusmod minim aliquip magna id laborum dolor duis. Amet eiusmod anim elit proident. Non incididunt ullamco aliquip adipisicing exercitation.\r\n'
  },
  {
    _id: '5f6e8227838073ddd69f1949',
    title: 'HYPLEX',
    description: 'Enim aliquip exercitation do veniam eu quis duis fugiat. Anim excepteur cupidatat ad irure tempor sunt excepteur est magna fugiat. Consectetur adipisicing veniam nulla eiusmod ex aliquip dolore exercitation veniam aute deserunt eu excepteur. Sit commodo consectetur amet proident esse voluptate exercitation eiusmod reprehenderit pariatur consectetur voluptate. Aliquip irure aliquip eu exercitation dolor et magna fugiat consequat cupidatat aute. Quis aliquip officia cupidatat pariatur commodo voluptate consequat pariatur ullamco amet tempor labore incididunt ipsum. Ex enim esse excepteur laborum incididunt dolor culpa.\r\n'
  },
  {
    _id: '5f6e82270e6e10bb5a89cd73',
    title: 'VELITY',
    description: 'Do fugiat voluptate aliquip deserunt tempor duis cupidatat officia. Consectetur tempor duis ad laboris eu esse aliquip qui proident. Sint duis eiusmod et dolor sint culpa dolore minim et non. Reprehenderit laborum tempor minim commodo ullamco. Proident id reprehenderit esse cillum. Exercitation eiusmod adipisicing esse sit ullamco consequat sint officia labore commodo mollit mollit pariatur qui.\r\n'
  },
  {
    _id: '5f6e822745c7d998071b322c',
    title: 'QUANTALIA',
    description: 'Magna culpa pariatur reprehenderit laborum magna. Anim adipisicing veniam ad aute nulla sit nisi labore. Pariatur ad esse non eiusmod ipsum elit. Fugiat anim reprehenderit cillum dolore in labore consectetur dolor excepteur aute ipsum qui id dolor. Lorem exercitation ex sit laborum.\r\n'
  },
  {
    _id: '5f6e822764bb3bdd5099ab20',
    title: 'CONFRENZY',
    description: 'Ea incididunt id ipsum Lorem est adipisicing nisi Lorem occaecat nulla ut. Non adipisicing magna in aliquip consectetur eiusmod ipsum ex est. Eu anim minim amet id Lorem id velit.\r\n'
  },
  {
    _id: '5f6e8227f064aef51aab1aa7',
    title: 'CENTURIA',
    description: 'Deserunt culpa ut consectetur ea in adipisicing enim proident irure. Non aute tempor voluptate qui qui velit incididunt non ipsum ad. Occaecat aute esse amet adipisicing eu in amet dolor.\r\n'
  }
]
