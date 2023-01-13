/**
 * This is a scaffold for defining a Workbook with Sheets and Portals.
 * Test this scaffold using the sample file in examples/sample-uploads/my-sheet-sample.csv.
 *
 * See examples/workbooks/FullExample.ts for a full, working example of a Workbook.
 */

import {
  NumberField,
  Portal,
  Sheet,
  TextField,
  Workbook,
  SpaceConfig
} from '@flatfile/configure'

/**
 * Sheets
 * Define your Sheet configuration and Fields here, or import them:
 * import { YourSheet } from './path-to-your-sheet/your-sheet.ts'
 */
const MySheet = new Sheet('MySheet', {
  firstName: TextField(),
  lastName: TextField(),
  age: NumberField(),
})
export default new SpaceConfig({
  name: 'Kyle Space Configuration',
  slug: 'Kyle_Space_Configuration_sc',
  workbookConfigs: {
    basic: new Workbook({
      name: 'Kyle Workbook',
      slug: 'Kyle_Workbook_wb',
      namespace: 'Kyle Workbook',
      sheets: {
        MySheet,
      },
    }),
  },
 })
