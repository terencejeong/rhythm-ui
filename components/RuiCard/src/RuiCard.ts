/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

import { LitElement, html, property, CSSResultArray, TemplateResult } from 'lit-element';
import { variables, layout } from './RuiCard.css'


export class RuiCard extends LitElement {

	/**
	*
	* The styles for button
	* @remarks
	* If you are extending this class you can extend the base styles with super. Eg `return [super(), myCustomStyles]`
	*/
	public static get styles(): CSSResultArray {
		return [variables, layout];
	}

	/* #endregion */


	/* #region Methods */

	/**
	* Render method
		* @slot This is a slot test
	*/
	public render(): TemplateResult {
		return html`
			<div class="card">
				<slot></slot>
			</div>
		`;
	}

	/* #endregion */
}
