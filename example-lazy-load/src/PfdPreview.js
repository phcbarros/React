import React from 'react'
import { PDFViewer, Document, Page, Text, View } from '@react-pdf/renderer'
import styles from './pdfStyles'

const PDFPreview = ({title}) => {
	return(
		<PDFViewer className="viewer" style={styles.viewer}>
			<Document>
				<Page size="A4" style={styles.page}>
					<View style={styles.section}>
						<Text style={styles.title}>{title}</Text>
						<Text>This is a text in a genereta PDF file.</Text>
					</View>
				</Page>
			</Document>
		</PDFViewer>
	)
}

export default PDFPreview
