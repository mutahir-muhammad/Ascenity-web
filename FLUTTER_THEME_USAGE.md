# Ascenity Theme for Flutter App

## Overview

This file provides a comprehensive theme implementation for Ascenity's Flutter mobile app, ensuring consistent branding and user experience across platforms. The theme is designed to match the web version exactly while leveraging Flutter's native capabilities.

## Design System Contents

The theme package includes:

1. **Color System**
   - Brand colors (Honolulu, Robin, Phthalo, Oxford, Snow, Emerald)
   - Text opacity variants (70%, 60%, etc.)
   - Gradient definitions

2. **Typography**
   - Font family (Inter)
   - Text styles for headings, body text, labels
   - Responsive text sizing

3. **Component Themes**
   - Buttons (primary, secondary, text)
   - Cards (standard, elevated, mood cards)
   - Form elements
   - Navigation elements

4. **Spacing & Layout**
   - Consistent spacing scale
   - Responsive margins and paddings
   - Screen adaptations

5. **Animation & Motion**
   - Durations and curves
   - Transition effects

## Usage Instructions

### 1. Setup

1. Add the required dependencies to your pubspec.yaml:
   ```yaml
   dependencies:
     flutter:
       sdk: flutter
     google_fonts: ^6.1.0  # For Inter font
   ```

2. Copy `ascenity_theme.dart` to your project's lib folder

3. Import in your main.dart:
   ```dart
   import 'ascenity_theme.dart';
   ```

### 2. Theme Application

Wrap your MaterialApp with the AscenityThemeProvider:

```dart
void main() {
  runApp(
    AscenityThemeProvider.light(
      child: MaterialApp(
        title: 'Ascenity',
        theme: AscenityTheme.materialTheme(Brightness.light),
        darkTheme: AscenityTheme.materialTheme(Brightness.dark),
        themeMode: ThemeMode.system,
        home: HomePage(),
      ),
    ),
  );
}
```

### 3. Using Theme Elements

Access the theme anywhere in your app:

```dart
Widget build(BuildContext context) {
  final theme = AscenityTheme.of(context);
  
  return Scaffold(
    appBar: AppBar(
      title: Text('Ascenity', style: theme.heading3),
    ),
    body: Container(
      padding: AscenitySpacing.screenMargin,
      child: Column(
        children: [
          Text('Welcome', style: theme.heading2),
          const SizedBox(height: AscenitySpacing.md),
          Text('Track your emotional journey', style: theme.bodyMedium),
        ],
      ),
    ),
  );
}
```

### 4. Components Examples

**Standard Card:**
```dart
Container(
  decoration: AscenityCards.standard(),
  padding: AscenitySpacing.cardPadding,
  child: Column(
    children: [
      Text('Card Title', style: theme.heading4),
      Text('Card content', style: theme.bodyMedium),
    ],
  ),
)
```

**Primary Button:**
```dart
ElevatedButton(
  onPressed: () {},
  child: const Text('Primary Action'),
)
```

**Mood Card:**
```dart
AscenityDesignExample.buildMoodCard(
  context,
  mood: 'Joy',
  isSelected: true,
  onTap: () {},
)
```

## Color Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Honolulu   | #027BCE  | Primary actions, links |
| Robin      | #1CCAD8  | Secondary accents |
| Phthalo    | #0F4C81  | Depth elements |
| Oxford     | #0A2239  | Main text, dark sections |
| Snow       | #FFFAFA  | Backgrounds |
| Emerald    | #10B981  | Success states |

## Customization

You can customize individual theme elements by extending the provided classes:

```dart
class CustomAscenityColors extends AscenityColors {
  static const Color customAccent = Color(0xFFE91E63);
}
```

## Best Practices

1. **Consistency**: Always use the provided theme elements rather than hardcoding colors or styles
2. **Responsiveness**: Use the responsive spacing and text sizing methods
3. **Accessibility**: The theme is designed with proper contrast ratios; maintain these standards
4. **Dark Mode**: The theme supports both light and dark modes automatically