# Landing Page Project
## Nanodegree Program 'Front End Web Developer' of Udacity 2020/2021

Zweite Projektarbeit von *petra gremmelspacher* mit javaScript 

**Entwicklungsstrategie**
Für dieses Projekt werden Sie Ihren Code in *js / app.js* schreiben. 
Beachten Sie, dass es sehr wichtig ist, dass Sie Ihr Projekt planen, bevor Sie mit dem Schreiben von Code beginnen! Teilen Sie Ihr Projekt in kleine Arbeiten auf und strategisieren Sie Ihre Herangehensweise an jedes einzelne. Mit diesen mundgerechten Beträgen ist es einfacher, auftretende Probleme zu debuggen und zu beheben.

Sie können gerne Ihren eigenen Design-Workflow implementieren, aber wenn Sie nicht weiterkommen, finden Sie hier eine exemplarische Vorgehensweise, um Sie zum Laufen zu bringen!

1. Beginnen Sie die app.js zu verknüpfen. 
- Wohin soll diese Datei nach Ihrem derzeitigen Kenntnisstand gehen? Wir werden später einige andere Orte testen.
2. Erstellen Sie Ihren HTML-Code und mindestens 3 Inhaltsbereiche. Der Rest Ihrer Funktionalität basiert auf diesen Abschnitten.
- Werfen Sie einen kurzen Blick auf alle HTML-Elemente in index.html. Notieren Sie die Werte für ihre id, class und dataAttribute. Um das DOM zu bearbeiten, verwenden Sie viele der Tools und Methoden, die Sie für diese Elemente (und für die von Ihnen erstellten) gelernt haben. 
- Eine Auffrischung des Datenattributs finden Sie [hier] (https://www.w3schools.com/tags/att_data-.asp).
- In welcher Datenstruktur können Sie diese Abschnitte speichern? Diese Datenstruktur kann alle Abschnitte Ihrer Seite darstellen. Daher ist es möglicherweise eine gute Idee, sie in einer Variablen zu speichern.
- Wie würden Sie diese Datenstruktur durchlaufen (dh durchlaufen)?
- Überlegen Sie, wie Sie beispielsweise eine ungeordnete Liste (dh eine Liste mit Aufzählungszeichen) in HTML aus dieser Struktur erstellen können und wo Sie diese Liste platzieren.
- Überlegen Sie, wie Sie testen, ob sich ein Abschnitt im Ansichtsfenster befindet.
- Welche Aktionen führen Sie aus, die Interaktivität mit dem DOM verursachen?
- 
3. Erstellen Sie das Navigationsmenü. 
Dadurch wird dynamisch ein Navigationsmenü erstellt, das auf den Abschnitten der Seite basiert. Dies kann ein besonders nützlicher Trick sein, wenn Sie mit Content-Management-Systemen oder APIs arbeiten, wenn Sie sich nicht sicher sind, wo sich die Elemente befinden werden.
- Hören Sie auf ein Ereignis, das die Navigation erstellen soll?
- Wo platzieren Sie die Navigation?
- Woher kommt der Text für jedes Navigationselement und wo verankern Sie sich?
- Wie fügen Sie jedes Navigationselement zu Ihrem Menü hinzu? (Hinweis: Es gibt verschiedene Möglichkeiten, dies zu tun. Machen Sie einige Nachforschungen, um herauszufinden, welche für Ihre Situation am sinnvollsten sind. Leistung? Klarheit?).

4. Fügen Sie Funktionen hinzu, um den angezeigten Abschnitt zu unterscheiden . Während der Navigation durch die Seite sollte der Abschnitt, der im Ansichtsfenster / am nächsten am oberen Rand aktiv ist, von den anderen Abschnitten unterschieden werden.
- Hören Sie auf eine Veranstaltung, bei der Abschnitte aktiv werden?
- Wie werden Sie testen, welcher Abschnitt hervorgehoben werden soll?
- Wie können wir classList Methoden verwenden , um das angezeigte CSS zu ändern? Was ist mit dem Entfernen dieses CSS?
- Überprüfen Sie die HTML- und CSS-Dateien, um sicherzustellen, dass das, was Sie ausgewählt haben, an den anderen Speicherorten aktualisiert wird.

5. Fügen Sie die Funktionalität hinzu, um zu Abschnitten zu blättern . Durch Klicken auf ein Navigationselement sollte zum entsprechenden Abschnitt der Seite gescrollt werden.
- Auf welches Ereignis hören Sie (Hinweis: Sie haben es gerade gelesen)?
- Es tritt ein Standardereignis auf, das gestoppt werden muss. Wie?
- Wenn Sie sich nicht daran erinnern, wie HTML-Seitenanker funktionieren, lesen Sie mehr, um herauszufinden, welche Variablen Sie festlegen sollten.
- Es gibt verschiedene Javascript-Methoden zum Scrollen. Welches scheint das einfachste zu sein?

6. Refactor
- Zu diesem Zeitpunkt sollte Ihr Code ordnungsgemäß funktionieren. Im Idealfall erfolgt das Refactoring während der Entwicklung. Als neuer Entwickler haben Sie jedoch häufig nicht das gesamte Bild im Kopf, um dies ordnungsgemäß tun zu können. Lassen Sie uns das Projekt bereinigen.
Haben Sie Ihren Code durch einen Linter ausgeführt? Wir bitten Sie, die Udacity-Standards weiterhin zu befolgen, wenn der Code vollständig ist. Wenn Sie ihn jedoch über einen Eslinter ausführen , können Sie mit dem Refactoring beginnen.
Verwenden Sie ES6 const und lassen Sie?
Verwenden alle Ihre Funktionen ES6-Pfeilfunktionen?
- Ist Ihr Code trocken? 
- Gibt es Teile, die besser als Hilfsfunktion dienen, um Doppelarbeit zu vermeiden?
Wie ist Ihr Code aufgebaut? Haben Sie Funktionen für die Hauptfunktionalität mit Variablen mit richtigem Gültigkeitsbereich erstellt? Zu Beginn ist es wahrscheinlich, dass Sie gelegentlich Variablen mit globalem Gültigkeitsbereich haben, bis Sie mehr über Verschlüsse und Entwurfsmuster erfahren. Das Platzieren Ihres Codes in Funktionen ist jedoch eine hervorragende Möglichkeit, Ihren Code besser lesbar zu machen und Variablen mit globalem Gültigkeitsbereich zu vermeiden.
Verwenden Sie die beste Methode für Ihre Iterationen?

7. Fügen Sie Ihrem HTML-Dokument zusätzliche Abschnitte hinzu. Sehen Sie, wie die Navigation aufgebaut ist.

8. Testen Sie die Leistung 
- Die Leistung Ihrer Seite kann davon abhängen, wie Sie Ihr Javascript schreiben und wo Sie Ihr Javascript laden.
- Testen Sie das Laden des Javaskripts in den Kopf im Vergleich zum Ende des Körpers. Welche Probleme treten auf? 
- Gibt es eine Möglichkeit, den Kopf noch zu laden, ohne die Seite zu beschädigen? 
- Wie ist die Leistung im Vergleich zur Belastung am Ende des Körpers?
- 
9. Vorgeschläge:
- Fügen Sie Ihren Navigationselementen einen aktiven Status hinzu, wenn sich ein Abschnitt im Ansichtsfenster befindet.
- Blenden Sie die feste Navigationsleiste aus, während Sie nicht scrollen (sie sollte beim Laden der Seite noch vorhanden sein).
- Hinweis: Mit setTimeout können Sie überprüfen, ob der Benutzer nicht mehr scrollt.
- Fügen Sie auf der Seite eine Schaltfläche zum Scrollen nach oben hinzu, die nur sichtbar ist, wenn der Benutzer unter die Seitenfalte scrollt.
- Aktualisieren / ändern Sie das Design / den Inhalt.

**Design**
[Link] (https://udacity.github.io/git-styleguide/)
