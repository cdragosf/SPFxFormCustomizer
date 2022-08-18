import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';
import { DynamicForm } from "@pnp/spfx-controls-react/lib/DynamicForm";

import styles from './FormularioPersonalizado.module.scss';

export interface IFormularioPersonalizadoProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

const LOG_SOURCE: string = 'FormularioPersonalizado';

export default class FormularioPersonalizado extends React.Component<IFormularioPersonalizadoProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: FormularioPersonalizado mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FormularioPersonalizado unmounted');
  }

  public render(): React.ReactElement<{}> {
    return <div className={styles.formularioPersonalizado} >
      <h2>
        {
          {
            4: "Formulario de visualización",
            6: "Formulario de edición",
            8: "Formulario de nuevo elemento"
          }[this.props.displayMode]
        }
      </h2>
      <DynamicForm
        context={this.props.context as any}
        disabled={this.props.displayMode == FormDisplayMode.Display}
        listId={this.props.context.list.guid.toString()}
        listItemId={this.props.context.itemId}
        onSubmitted={this.props.onSave}
        onCancelled={this.props.onClose}
      />
    </div>;
  }
}
