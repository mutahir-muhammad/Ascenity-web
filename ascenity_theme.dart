import 'package:flutter/material.dart';

/// Ascenity Design System - Theme Provider
///
/// This file defines the complete theme system for the Ascenity mobile app,
/// following the same design language as the web version.
/// 
/// Usage:
/// 1. Import this file
/// 2. Wrap your MaterialApp with AscenityThemeProvider
/// 3. Access theme with: AscenityTheme.of(context)
///
/// Example:
/// ```
/// AscenityThemeProvider(
///   child: MaterialApp(
///     title: 'Ascenity',
///     home: HomePage(),
///   ),
/// )
/// ```

class AscenityColors {
  // Primary Brand Colors
  static const Color honolulu = Color(0xFF027BCE);
  static const Color robin = Color(0xFF1CCAD8);
  static const Color phthalo = Color(0xFF0F4C81);
  static const Color oxford = Color(0xFF0A2239);
  static const Color snow = Color(0xFFFFFAFA);
  static const Color emerald = Color(0xFF10B981);

  // Opacity Variants - Text
  static Color oxfordWithOpacity(double opacity) => oxford.withOpacity(opacity);
  static Color snowWithOpacity(double opacity) => snow.withOpacity(opacity);
  
  // Common Text Opacities
  static Color oxfordText = oxfordWithOpacity(0.9);
  static Color oxfordSecondary = oxfordWithOpacity(0.7);
  static Color oxfordTertiary = oxfordWithOpacity(0.6);
  static Color oxfordDisabled = oxfordWithOpacity(0.4);

  static Color snowText = snowWithOpacity(0.9);
  static Color snowSecondary = snowWithOpacity(0.8);
  static Color snowTertiary = snowWithOpacity(0.7);
  static Color snowDisabled = snowWithOpacity(0.6);
  
  // UI Element Opacities
  static Color overlayLight = oxfordWithOpacity(0.05);
  static Color overlayMedium = oxfordWithOpacity(0.1);
  static Color overlayStrong = oxfordWithOpacity(0.2);
  static Color border = oxfordWithOpacity(0.15);
  
  // Common Gradients
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [honolulu, robin],
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
  );

  static const LinearGradient secondaryGradient = LinearGradient(
    colors: [robin, phthalo],
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
  );

  static const LinearGradient tertiaryGradient = LinearGradient(
    colors: [phthalo, oxford],
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
  );

  static const LinearGradient quaternaryGradient = LinearGradient(
    colors: [oxford, honolulu],
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
  );
  
  // Mood Colors
  static const Map<String, Color> moodColors = {
    'Joy': honolulu,
    'Calm': robin,
    'Anxious': oxford,
    'Tired': phthalo,
    'Excited': emerald,
  };
}

class AscenityRadius {
  // Border Radius
  static const double xs = 4.0;
  static const double sm = 6.0;
  static const double md = 8.0;
  static const double lg = 12.0;
  static const double xl = 16.0;
  static const double xxl = 20.0;
  static const double full = 9999.0;

  // Border Radius Instances
  static BorderRadius get button => BorderRadius.circular(full);
  static BorderRadius get card => BorderRadius.circular(xl);
  static BorderRadius get cardSm => BorderRadius.circular(lg);
  static BorderRadius get input => BorderRadius.circular(md);
  static BorderRadius get tag => BorderRadius.circular(full);
  static BorderRadius get chip => BorderRadius.circular(sm);
}

class AscenitySpacing {
  // Base Spacing Scale (multiples of 4)
  static const double none = 0;
  static const double xxxs = 2;
  static const double xxs = 4;
  static const double xs = 8;
  static const double sm = 12;
  static const double md = 16;
  static const double lg = 20;
  static const double xl = 24;
  static const double xxl = 32;
  static const double xxxl = 40;
  static const double xxxxl = 48;
  static const double jumbo = 64;
  
  // Screen Margins
  static const EdgeInsets screenMargin = EdgeInsets.all(md);
  static const EdgeInsets screenMarginHorizontal = EdgeInsets.symmetric(horizontal: md);
  static const EdgeInsets screenMarginVertical = EdgeInsets.symmetric(vertical: md);
  
  // Card Paddings
  static const EdgeInsets cardPadding = EdgeInsets.all(md);
  static const EdgeInsets cardPaddingSmall = EdgeInsets.all(sm);
  static const EdgeInsets cardPaddingLarge = EdgeInsets.all(xl);
  
  // Input Paddings
  static const EdgeInsets inputPadding = EdgeInsets.symmetric(horizontal: md, vertical: sm);
  static const EdgeInsets buttonPadding = EdgeInsets.symmetric(horizontal: xl, vertical: sm);
  static const EdgeInsets chipPadding = EdgeInsets.symmetric(horizontal: xs, vertical: xxs);
  
  // Responsive Spacing
  static double scale(double size, BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    if (width < 360) return size * 0.9; // Small phones
    if (width > 600) return size * 1.1; // Tablets
    return size; // Standard phones
  }
}

class AscenityShadows {
  static List<BoxShadow> get soft => [
    BoxShadow(
      color: AscenityColors.oxford.withOpacity(0.08),
      blurRadius: 12,
      offset: const Offset(0, 4),
    ),
  ];
  
  static List<BoxShadow> get medium => [
    BoxShadow(
      color: AscenityColors.oxford.withOpacity(0.12),
      blurRadius: 24,
      offset: const Offset(0, 8),
    ),
  ];
  
  static List<BoxShadow> get strong => [
    BoxShadow(
      color: AscenityColors.oxford.withOpacity(0.16),
      blurRadius: 40,
      offset: const Offset(0, 16),
    ),
  ];
  
  static List<BoxShadow> get subtle => [
    BoxShadow(
      color: AscenityColors.oxford.withOpacity(0.05),
      blurRadius: 6,
      offset: const Offset(0, 2),
    ),
  ];
  
  static List<BoxShadow> cardShadow(BuildContext context) {
    // Adjust shadow intensity based on theme brightness
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return isDark ? subtle : soft;
  }
}

class AscenityTextStyles {
  static const String fontFamily = 'Inter';
  
  // Heading Styles
  static TextStyle heading1({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 28,
    fontWeight: FontWeight.w700,
    height: 1.2,
    letterSpacing: -0.5,
    color: color,
  );
  
  static TextStyle heading2({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 24,
    fontWeight: FontWeight.w700,
    height: 1.25,
    letterSpacing: -0.3,
    color: color,
  );
  
  static TextStyle heading3({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 20,
    fontWeight: FontWeight.w600,
    height: 1.3,
    letterSpacing: -0.2,
    color: color,
  );
  
  static TextStyle heading4({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 18,
    fontWeight: FontWeight.w600,
    height: 1.35,
    letterSpacing: -0.1,
    color: color,
  );
  
  // Body Styles
  static TextStyle bodyLarge({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 16,
    fontWeight: FontWeight.w400,
    height: 1.5,
    color: color,
  );
  
  static TextStyle bodyMedium({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 14,
    fontWeight: FontWeight.w400,
    height: 1.5,
    color: color,
  );
  
  static TextStyle bodySmall({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 12,
    fontWeight: FontWeight.w400,
    height: 1.5,
    color: color,
  );
  
  // UI Element Styles
  static TextStyle button({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 14,
    fontWeight: FontWeight.w600,
    letterSpacing: 0.2,
    height: 1,
    color: color,
  );
  
  static TextStyle caption({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 12,
    fontWeight: FontWeight.w500,
    height: 1.33,
    letterSpacing: 0.4,
    color: color,
  );
  
  static TextStyle overline({Color? color}) => TextStyle(
    fontFamily: fontFamily,
    fontSize: 10,
    fontWeight: FontWeight.w500,
    height: 1.6,
    letterSpacing: 1.0,
    color: color,
  );
  
  // Emphasis Styles
  static TextStyle get emphasized => const TextStyle(
    fontWeight: FontWeight.w600,
  );
  
  static TextStyle get deemphasized => TextStyle(
    fontWeight: FontWeight.w400,
    color: AscenityColors.oxfordSecondary,
  );
}

/// Button styles and themes for the Ascenity design system
class AscenityButtons {
  // Primary Button Theme
  static ButtonStyle primaryButton() => ButtonStyle(
    backgroundColor: MaterialStateProperty.resolveWith<Color>((states) {
      if (states.contains(MaterialState.disabled)) {
        return AscenityColors.oxfordWithOpacity(0.3);
      }
      return AscenityColors.honolulu;
    }),
    foregroundColor: MaterialStateProperty.resolveWith<Color>((states) {
      if (states.contains(MaterialState.disabled)) {
        return AscenityColors.snowWithOpacity(0.7);
      }
      return AscenityColors.snow;
    }),
    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
      RoundedRectangleBorder(
        borderRadius: AscenityRadius.button,
      ),
    ),
    padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
      AscenitySpacing.buttonPadding,
    ),
    elevation: MaterialStateProperty.resolveWith<double>((states) {
      if (states.contains(MaterialState.pressed)) {
        return 0.0;
      }
      return 2.0;
    }),
    overlayColor: MaterialStateProperty.all<Color>(
      AscenityColors.snowWithOpacity(0.1),
    ),
  );
  
  // Secondary Button Theme
  static ButtonStyle secondaryButton() => ButtonStyle(
    backgroundColor: MaterialStateProperty.resolveWith<Color>((states) {
      if (states.contains(MaterialState.disabled)) {
        return AscenityColors.overlayMedium;
      }
      return AscenityColors.snow;
    }),
    foregroundColor: MaterialStateProperty.resolveWith<Color>((states) {
      if (states.contains(MaterialState.disabled)) {
        return AscenityColors.oxfordDisabled;
      }
      return AscenityColors.oxford;
    }),
    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
      RoundedRectangleBorder(
        borderRadius: AscenityRadius.button,
        side: BorderSide(
          color: AscenityColors.border,
          width: 1.0,
        ),
      ),
    ),
    padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
      AscenitySpacing.buttonPadding,
    ),
    elevation: MaterialStateProperty.resolveWith<double>((states) {
      return 0.0;
    }),
    overlayColor: MaterialStateProperty.all<Color>(
      AscenityColors.overlayLight,
    ),
  );
  
  // Text Button Theme
  static ButtonStyle textButton() => ButtonStyle(
    backgroundColor: MaterialStateProperty.all<Color>(Colors.transparent),
    foregroundColor: MaterialStateProperty.resolveWith<Color>((states) {
      if (states.contains(MaterialState.disabled)) {
        return AscenityColors.oxfordDisabled;
      }
      return AscenityColors.honolulu;
    }),
    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
      RoundedRectangleBorder(
        borderRadius: AscenityRadius.button,
      ),
    ),
    padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
      const EdgeInsets.symmetric(horizontal: AscenitySpacing.xs, vertical: AscenitySpacing.xxs),
    ),
    overlayColor: MaterialStateProperty.all<Color>(
      AscenityColors.overlayLight,
    ),
  );
  
  // Gradient Button Decoration
  static Decoration gradientButtonDecoration() => BoxDecoration(
    gradient: AscenityColors.primaryGradient,
    borderRadius: AscenityRadius.button,
    boxShadow: AscenityShadows.soft,
  );
  
  // Icon Button Theme
  static ButtonStyle iconButton() => ButtonStyle(
    backgroundColor: MaterialStateProperty.all<Color>(Colors.transparent),
    foregroundColor: MaterialStateProperty.resolveWith<Color>((states) {
      if (states.contains(MaterialState.disabled)) {
        return AscenityColors.oxfordDisabled;
      }
      return AscenityColors.oxford;
    }),
    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
      RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(AscenityRadius.full),
      ),
    ),
    padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
      const EdgeInsets.all(AscenitySpacing.xs),
    ),
    overlayColor: MaterialStateProperty.all<Color>(
      AscenityColors.overlayLight,
    ),
  );
}

/// Input field styling for the Ascenity design system
class AscenityInputs {
  static InputDecoration textFieldDecoration({
    required String labelText,
    String? hintText,
    Widget? prefixIcon,
    Widget? suffixIcon,
  }) => InputDecoration(
    labelText: labelText,
    hintText: hintText,
    prefixIcon: prefixIcon,
    suffixIcon: suffixIcon,
    floatingLabelBehavior: FloatingLabelBehavior.auto,
    contentPadding: AscenitySpacing.inputPadding,
    border: OutlineInputBorder(
      borderRadius: AscenityRadius.input,
      borderSide: BorderSide(color: AscenityColors.border),
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: AscenityRadius.input,
      borderSide: BorderSide(color: AscenityColors.border),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: AscenityRadius.input,
      borderSide: const BorderSide(color: AscenityColors.honolulu, width: 2.0),
    ),
    errorBorder: OutlineInputBorder(
      borderRadius: AscenityRadius.input,
      borderSide: BorderSide(color: Colors.red.shade300),
    ),
    filled: true,
    fillColor: AscenityColors.snow,
    labelStyle: AscenityTextStyles.bodyMedium(color: AscenityColors.oxfordSecondary),
    hintStyle: AscenityTextStyles.bodyMedium(color: AscenityColors.oxfordDisabled),
  );
}

/// Card styles for the Ascenity design system
class AscenityCards {
  static BoxDecoration standard({
    Color? color,
    BorderRadius? borderRadius,
    List<BoxShadow>? boxShadow,
    Gradient? gradient,
  }) => BoxDecoration(
    color: color ?? AscenityColors.snow,
    borderRadius: borderRadius ?? AscenityRadius.card,
    boxShadow: boxShadow ?? AscenityShadows.soft,
    gradient: gradient,
    border: Border.all(color: AscenityColors.border),
  );
  
  static BoxDecoration elevated({
    Color? color,
    BorderRadius? borderRadius,
    Gradient? gradient,
  }) => BoxDecoration(
    color: color ?? AscenityColors.snow,
    borderRadius: borderRadius ?? AscenityRadius.card,
    boxShadow: AscenityShadows.medium,
    gradient: gradient,
  );
  
  static BoxDecoration subtle({
    Color? color,
    BorderRadius? borderRadius,
    Gradient? gradient,
  }) => BoxDecoration(
    color: color ?? AscenityColors.snowWithOpacity(0.7),
    borderRadius: borderRadius ?? AscenityRadius.cardSm,
    boxShadow: AscenityShadows.subtle,
    gradient: gradient,
    border: Border.all(color: AscenityColors.border),
  );
  
  static BoxDecoration moodCard({
    required Color moodColor,
    bool isSelected = false,
  }) => BoxDecoration(
    color: AscenityColors.snow,
    borderRadius: AscenityRadius.cardSm,
    boxShadow: isSelected ? AscenityShadows.medium : AscenityShadows.subtle,
    border: Border.all(
      color: isSelected ? moodColor : AscenityColors.border,
      width: isSelected ? 2.0 : 1.0,
    ),
  );
}

/// Animation durations and curves for the Ascenity design system
class AscenityAnimations {
  // Durations
  static const Duration shortest = Duration(milliseconds: 150);
  static const Duration short = Duration(milliseconds: 250);
  static const Duration standard = Duration(milliseconds: 300);
  static const Duration medium = Duration(milliseconds: 500);
  static const Duration long = Duration(milliseconds: 700);
  
  // Curves
  static const Curve standard = Curves.easeOutCubic;
  static const Curve decelerate = Curves.easeOutQuint;
  static const Curve accelerate = Curves.easeInQuint;
  static const Curve bounce = Curves.elasticOut;
  
  // Animation Builders
  static Widget fadeInTransition({
    required Widget child,
    required Animation<double> animation,
    Offset? offset,
  }) {
    return FadeTransition(
      opacity: CurvedAnimation(
        parent: animation,
        curve: AscenityAnimations.standard,
      ),
      child: SlideTransition(
        position: Tween<Offset>(
          begin: offset ?? const Offset(0, 0.05),
          end: Offset.zero,
        ).animate(CurvedAnimation(
          parent: animation,
          curve: AscenityAnimations.standard,
        )),
        child: child,
      ),
    );
  }
}

/// Complete MaterialTheme for the Ascenity design system
class AscenityTheme {
  // Access the theme with: AscenityTheme.of(context)
  static AscenityThemeData of(BuildContext context) {
    return AscenityThemeProvider.of(context);
  }
  
  // Generate a complete Material ThemeData object
  static ThemeData materialTheme(Brightness brightness) {
    final bool isDark = brightness == Brightness.dark;
    
    // Define colors based on light/dark mode
    final Color primaryColor = AscenityColors.honolulu;
    final Color backgroundColor = isDark ? AscenityColors.oxford : AscenityColors.snow;
    final Color surfaceColor = isDark ? Color(0xFF14324D) : Colors.white;
    final Color textColor = isDark ? AscenityColors.snow : AscenityColors.oxford;
    final Color secondaryTextColor = isDark ? AscenityColors.snowSecondary : AscenityColors.oxfordSecondary;
    
    return ThemeData(
      // Base Theme Configuration
      primaryColor: primaryColor,
      colorScheme: ColorScheme(
        brightness: brightness,
        primary: primaryColor,
        onPrimary: AscenityColors.snow,
        secondary: AscenityColors.robin,
        onSecondary: AscenityColors.oxford,
        error: Colors.red.shade400,
        onError: Colors.white,
        background: backgroundColor,
        onBackground: textColor,
        surface: surfaceColor,
        onSurface: textColor,
      ),
      
      // Typography
      fontFamily: AscenityTextStyles.fontFamily,
      textTheme: TextTheme(
        displayLarge: AscenityTextStyles.heading1(color: textColor),
        displayMedium: AscenityTextStyles.heading2(color: textColor),
        displaySmall: AscenityTextStyles.heading3(color: textColor),
        headlineMedium: AscenityTextStyles.heading4(color: textColor),
        titleLarge: AscenityTextStyles.heading4(color: textColor),
        titleMedium: AscenityTextStyles.bodyLarge(color: textColor),
        titleSmall: AscenityTextStyles.bodyMedium(color: textColor),
        bodyLarge: AscenityTextStyles.bodyLarge(color: textColor),
        bodyMedium: AscenityTextStyles.bodyMedium(color: textColor),
        bodySmall: AscenityTextStyles.bodySmall(color: textColor),
        labelLarge: AscenityTextStyles.button(color: textColor),
        labelMedium: AscenityTextStyles.caption(color: secondaryTextColor),
        labelSmall: AscenityTextStyles.overline(color: secondaryTextColor),
      ),
      
      // Component Themes
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: AscenityButtons.primaryButton(),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: AscenityButtons.secondaryButton(),
      ),
      textButtonTheme: TextButtonThemeData(
        style: AscenityButtons.textButton(),
      ),
      iconButtonTheme: IconButtonThemeData(
        style: AscenityButtons.iconButton(),
      ),
      
      inputDecorationTheme: InputDecorationTheme(
        floatingLabelBehavior: FloatingLabelBehavior.auto,
        contentPadding: AscenitySpacing.inputPadding,
        border: OutlineInputBorder(
          borderRadius: AscenityRadius.input,
          borderSide: BorderSide(color: AscenityColors.border),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: AscenityRadius.input,
          borderSide: BorderSide(color: AscenityColors.border),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: AscenityRadius.input,
          borderSide: const BorderSide(color: AscenityColors.honolulu, width: 2.0),
        ),
        filled: true,
        fillColor: surfaceColor,
      ),
      
      cardTheme: CardTheme(
        color: surfaceColor,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: AscenityRadius.card,
          side: BorderSide(color: AscenityColors.border),
        ),
        margin: EdgeInsets.zero,
      ),
      
      chipTheme: ChipThemeData(
        backgroundColor: AscenityColors.overlayMedium,
        labelStyle: AscenityTextStyles.caption(color: textColor),
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 0),
        shape: RoundedRectangleBorder(
          borderRadius: AscenityRadius.tag,
        ),
      ),
      
      dividerTheme: DividerThemeData(
        color: isDark ? AscenityColors.snowWithOpacity(0.1) : AscenityColors.border,
        thickness: 1,
        space: 1,
      ),
      
      bottomNavigationBarTheme: BottomNavigationBarThemeData(
        backgroundColor: surfaceColor,
        selectedItemColor: primaryColor,
        unselectedItemColor: secondaryTextColor,
      ),
      
      tabBarTheme: TabBarTheme(
        labelColor: primaryColor,
        unselectedLabelColor: secondaryTextColor,
        indicatorColor: primaryColor,
        indicatorSize: TabBarIndicatorSize.label,
      ),
      
      // Core UI Settings
      brightness: brightness,
      scaffoldBackgroundColor: backgroundColor,
      appBarTheme: AppBarTheme(
        color: surfaceColor,
        elevation: 0,
        titleTextStyle: AscenityTextStyles.heading3(color: textColor),
        iconTheme: IconThemeData(color: textColor),
      ),
      
      // Miscellaneous
      useMaterial3: true,
      visualDensity: VisualDensity.adaptivePlatformDensity,
    );
  }
}

/// Custom theme data specific to Ascenity
class AscenityThemeData {
  final ThemeData materialTheme;
  final Brightness brightness;
  final bool isDark;
  
  AscenityThemeData({
    required this.materialTheme,
    required this.brightness,
  }) : isDark = brightness == Brightness.dark;
  
  // Frequently used colors
  Color get primaryColor => AscenityColors.honolulu;
  Color get accentColor => AscenityColors.robin;
  Color get backgroundColor => isDark ? AscenityColors.oxford : AscenityColors.snow;
  Color get cardColor => isDark ? const Color(0xFF14324D) : Colors.white;
  Color get textColor => isDark ? AscenityColors.snow : AscenityColors.oxford;
  Color get secondaryTextColor => isDark ? AscenityColors.snowSecondary : AscenityColors.oxfordSecondary;
  Color get borderColor => AscenityColors.border;
  
  // Text Styles with proper coloring
  TextStyle get heading1 => AscenityTextStyles.heading1(color: textColor);
  TextStyle get heading2 => AscenityTextStyles.heading2(color: textColor);
  TextStyle get heading3 => AscenityTextStyles.heading3(color: textColor);
  TextStyle get heading4 => AscenityTextStyles.heading4(color: textColor);
  TextStyle get bodyLarge => AscenityTextStyles.bodyLarge(color: textColor);
  TextStyle get bodyMedium => AscenityTextStyles.bodyMedium(color: textColor);
  TextStyle get bodySmall => AscenityTextStyles.bodySmall(color: textColor);
  TextStyle get button => AscenityTextStyles.button(color: textColor);
  TextStyle get caption => AscenityTextStyles.caption(color: secondaryTextColor);
  TextStyle get overline => AscenityTextStyles.overline(color: secondaryTextColor);
}

/// Theme Provider for Ascenity
class AscenityThemeProvider extends InheritedWidget {
  final AscenityThemeData theme;
  
  const AscenityThemeProvider({
    Key? key,
    required Widget child,
    required this.theme,
  }) : super(key: key, child: child);
  
  @override
  bool updateShouldNotify(AscenityThemeProvider oldWidget) => theme != oldWidget.theme;
  
  static AscenityThemeData of(BuildContext context) {
    final provider = context.dependOnInheritedWidgetOfExactType<AscenityThemeProvider>();
    if (provider == null) {
      throw Exception('No AscenityThemeProvider found in context');
    }
    return provider.theme;
  }
  
  /// Create a light theme provider
  static AscenityThemeProvider light({required Widget child}) {
    final materialTheme = AscenityTheme.materialTheme(Brightness.light);
    return AscenityThemeProvider(
      theme: AscenityThemeData(
        materialTheme: materialTheme,
        brightness: Brightness.light,
      ),
      child: child,
    );
  }
  
  /// Create a dark theme provider
  static AscenityThemeProvider dark({required Widget child}) {
    final materialTheme = AscenityTheme.materialTheme(Brightness.dark);
    return AscenityThemeProvider(
      theme: AscenityThemeData(
        materialTheme: materialTheme,
        brightness: Brightness.dark,
      ),
      child: child,
    );
  }
}

/// Example usage of the theme with common UI elements
class AscenityDesignExample {
  // Example of a standard card with content
  static Widget buildCard(BuildContext context) {
    final theme = AscenityTheme.of(context);
    
    return Container(
      decoration: AscenityCards.standard(),
      padding: AscenitySpacing.cardPadding,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Card Title', style: theme.heading4),
          const SizedBox(height: AscenitySpacing.xs),
          Text(
            'This is a standard card with content that follows the Ascenity design system.',
            style: theme.bodyMedium,
          ),
          const SizedBox(height: AscenitySpacing.md),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Primary Action'),
          ),
        ],
      ),
    );
  }
  
  // Example of a mood selection card
  static Widget buildMoodCard(BuildContext context, {
    required String mood,
    required bool isSelected,
    required VoidCallback onTap,
  }) {
    final color = AscenityColors.moodColors[mood] ?? AscenityColors.honolulu;
    
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: AscenityAnimations.short,
        curve: AscenityAnimations.standard,
        decoration: AscenityCards.moodCard(
          moodColor: color,
          isSelected: isSelected,
        ),
        padding: AscenitySpacing.cardPaddingSmall,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                color: color.withOpacity(0.15),
                shape: BoxShape.circle,
              ),
              child: Icon(
                Icons.sentiment_satisfied_alt,
                color: color,
                size: 20,
              ),
            ),
            const SizedBox(height: AscenitySpacing.xs),
            Text(
              mood,
              style: AscenityTextStyles.caption(
                color: isSelected ? color : AscenityColors.oxford,
              ),
            ),
          ],
        ),
      ),
    );
  }
}